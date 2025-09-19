# `dataAwsOdbNetwork` Submodule <a name="`dataAwsOdbNetwork` Submodule" id="@cdktf/provider-aws.dataAwsOdbNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbNetwork <a name="DataAwsOdbNetwork" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/odb_network aws_odb_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetwork(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/odb_network#id DataAwsOdbNetwork#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/odb_network#id DataAwsOdbNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/odb_network#region DataAwsOdbNetwork#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsOdbNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetwork.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetwork.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetwork.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsOdbNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsOdbNetwork to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsOdbNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/odb_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOdbNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.backupSubnetCidr">backup_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.clientSubnetCidr">client_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.customDomainName">custom_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.defaultDnsPrefix">default_dns_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.managedServices">managed_services</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList">DataAwsOdbNetworkManagedServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociDnsForwardingConfigs">oci_dns_forwarding_configs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList">DataAwsOdbNetworkOciDnsForwardingConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociNetworkAnchorId">oci_network_anchor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociNetworkAnchorUrl">oci_network_anchor_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociResourceAnchorName">oci_resource_anchor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociVcnId">oci_vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociVcnUrl">oci_vcn_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.peeredCidrs">peered_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.percentProgress">percent_progress</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `backup_subnet_cidr`<sup>Required</sup> <a name="backup_subnet_cidr" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.backupSubnetCidr"></a>

```python
backup_subnet_cidr: str
```

- *Type:* str

---

##### `client_subnet_cidr`<sup>Required</sup> <a name="client_subnet_cidr" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.clientSubnetCidr"></a>

```python
client_subnet_cidr: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `custom_domain_name`<sup>Required</sup> <a name="custom_domain_name" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.customDomainName"></a>

```python
custom_domain_name: str
```

- *Type:* str

---

##### `default_dns_prefix`<sup>Required</sup> <a name="default_dns_prefix" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.defaultDnsPrefix"></a>

```python
default_dns_prefix: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `managed_services`<sup>Required</sup> <a name="managed_services" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.managedServices"></a>

```python
managed_services: DataAwsOdbNetworkManagedServicesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList">DataAwsOdbNetworkManagedServicesList</a>

---

##### `oci_dns_forwarding_configs`<sup>Required</sup> <a name="oci_dns_forwarding_configs" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociDnsForwardingConfigs"></a>

```python
oci_dns_forwarding_configs: DataAwsOdbNetworkOciDnsForwardingConfigsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList">DataAwsOdbNetworkOciDnsForwardingConfigsList</a>

---

##### `oci_network_anchor_id`<sup>Required</sup> <a name="oci_network_anchor_id" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociNetworkAnchorId"></a>

```python
oci_network_anchor_id: str
```

- *Type:* str

---

##### `oci_network_anchor_url`<sup>Required</sup> <a name="oci_network_anchor_url" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociNetworkAnchorUrl"></a>

```python
oci_network_anchor_url: str
```

- *Type:* str

---

##### `oci_resource_anchor_name`<sup>Required</sup> <a name="oci_resource_anchor_name" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociResourceAnchorName"></a>

```python
oci_resource_anchor_name: str
```

- *Type:* str

---

##### `oci_vcn_id`<sup>Required</sup> <a name="oci_vcn_id" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociVcnId"></a>

```python
oci_vcn_id: str
```

- *Type:* str

---

##### `oci_vcn_url`<sup>Required</sup> <a name="oci_vcn_url" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociVcnUrl"></a>

```python
oci_vcn_url: str
```

- *Type:* str

---

##### `peered_cidrs`<sup>Required</sup> <a name="peered_cidrs" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.peeredCidrs"></a>

```python
peered_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `percent_progress`<sup>Required</sup> <a name="percent_progress" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.percentProgress"></a>

```python
percent_progress: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbNetworkConfig <a name="DataAwsOdbNetworkConfig" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetworkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/odb_network#id DataAwsOdbNetwork#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/odb_network#id DataAwsOdbNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/odb_network#region DataAwsOdbNetwork#region}

---

### DataAwsOdbNetworkManagedServices <a name="DataAwsOdbNetworkManagedServices" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServices.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetworkManagedServices()
```


### DataAwsOdbNetworkManagedServicesManagedS3BackupAccess <a name="DataAwsOdbNetworkManagedServicesManagedS3BackupAccess" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccess()
```


### DataAwsOdbNetworkManagedServicesS3Access <a name="DataAwsOdbNetworkManagedServicesS3Access" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3Access"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3Access.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3Access()
```


### DataAwsOdbNetworkManagedServicesServiceNetworkEndpoint <a name="DataAwsOdbNetworkManagedServicesServiceNetworkEndpoint" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpoint()
```


### DataAwsOdbNetworkManagedServicesZeroTlAccess <a name="DataAwsOdbNetworkManagedServicesZeroTlAccess" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccess()
```


### DataAwsOdbNetworkOciDnsForwardingConfigs <a name="DataAwsOdbNetworkOciDnsForwardingConfigs" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigs()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbNetworkManagedServicesList <a name="DataAwsOdbNetworkManagedServicesList" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOdbNetworkManagedServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList <a name="DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference <a name="DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.ipv4Addresses">ipv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccess">DataAwsOdbNetworkManagedServicesManagedS3BackupAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4_addresses`<sup>Required</sup> <a name="ipv4_addresses" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.ipv4Addresses"></a>

```python
ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOdbNetworkManagedServicesManagedS3BackupAccess
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccess">DataAwsOdbNetworkManagedServicesManagedS3BackupAccess</a>

---


### DataAwsOdbNetworkManagedServicesOutputReference <a name="DataAwsOdbNetworkManagedServicesOutputReference" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.managedS3BackupAccess">managed_s3_backup_access</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList">DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.managedServiceIpv4Cidrs">managed_service_ipv4_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.resourceGatewayArn">resource_gateway_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.s3Access">s3_access</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList">DataAwsOdbNetworkManagedServicesS3AccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.serviceNetworkArn">service_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.serviceNetworkEndpoint">service_network_endpoint</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList">DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.zeroTlAccess">zero_tl_access</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList">DataAwsOdbNetworkManagedServicesZeroTlAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServices">DataAwsOdbNetworkManagedServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_s3_backup_access`<sup>Required</sup> <a name="managed_s3_backup_access" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.managedS3BackupAccess"></a>

```python
managed_s3_backup_access: DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList">DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList</a>

---

##### `managed_service_ipv4_cidrs`<sup>Required</sup> <a name="managed_service_ipv4_cidrs" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.managedServiceIpv4Cidrs"></a>

```python
managed_service_ipv4_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_gateway_arn`<sup>Required</sup> <a name="resource_gateway_arn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.resourceGatewayArn"></a>

```python
resource_gateway_arn: str
```

- *Type:* str

---

##### `s3_access`<sup>Required</sup> <a name="s3_access" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.s3Access"></a>

```python
s3_access: DataAwsOdbNetworkManagedServicesS3AccessList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList">DataAwsOdbNetworkManagedServicesS3AccessList</a>

---

##### `service_network_arn`<sup>Required</sup> <a name="service_network_arn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.serviceNetworkArn"></a>

```python
service_network_arn: str
```

- *Type:* str

---

##### `service_network_endpoint`<sup>Required</sup> <a name="service_network_endpoint" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.serviceNetworkEndpoint"></a>

```python
service_network_endpoint: DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList">DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList</a>

---

##### `zero_tl_access`<sup>Required</sup> <a name="zero_tl_access" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.zeroTlAccess"></a>

```python
zero_tl_access: DataAwsOdbNetworkManagedServicesZeroTlAccessList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList">DataAwsOdbNetworkManagedServicesZeroTlAccessList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOdbNetworkManagedServices
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServices">DataAwsOdbNetworkManagedServices</a>

---


### DataAwsOdbNetworkManagedServicesS3AccessList <a name="DataAwsOdbNetworkManagedServicesS3AccessList" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOdbNetworkManagedServicesS3AccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOdbNetworkManagedServicesS3AccessOutputReference <a name="DataAwsOdbNetworkManagedServicesS3AccessOutputReference" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.ipv4Addresses">ipv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.s3PolicyDocument">s3_policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3Access">DataAwsOdbNetworkManagedServicesS3Access</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `ipv4_addresses`<sup>Required</sup> <a name="ipv4_addresses" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.ipv4Addresses"></a>

```python
ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_policy_document`<sup>Required</sup> <a name="s3_policy_document" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.s3PolicyDocument"></a>

```python
s3_policy_document: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOdbNetworkManagedServicesS3Access
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3Access">DataAwsOdbNetworkManagedServicesS3Access</a>

---


### DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList <a name="DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference <a name="DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointType">vpc_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpoint">DataAwsOdbNetworkManagedServicesServiceNetworkEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `vpc_endpoint_type`<sup>Required</sup> <a name="vpc_endpoint_type" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointType"></a>

```python
vpc_endpoint_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOdbNetworkManagedServicesServiceNetworkEndpoint
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpoint">DataAwsOdbNetworkManagedServicesServiceNetworkEndpoint</a>

---


### DataAwsOdbNetworkManagedServicesZeroTlAccessList <a name="DataAwsOdbNetworkManagedServicesZeroTlAccessList" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference <a name="DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccess">DataAwsOdbNetworkManagedServicesZeroTlAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOdbNetworkManagedServicesZeroTlAccess
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccess">DataAwsOdbNetworkManagedServicesZeroTlAccess</a>

---


### DataAwsOdbNetworkOciDnsForwardingConfigsList <a name="DataAwsOdbNetworkOciDnsForwardingConfigsList" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference <a name="DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_network

dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.property.ociDnsListenerIp">oci_dns_listener_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigs">DataAwsOdbNetworkOciDnsForwardingConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `oci_dns_listener_ip`<sup>Required</sup> <a name="oci_dns_listener_ip" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.property.ociDnsListenerIp"></a>

```python
oci_dns_listener_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOdbNetworkOciDnsForwardingConfigs
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigs">DataAwsOdbNetworkOciDnsForwardingConfigs</a>

---



