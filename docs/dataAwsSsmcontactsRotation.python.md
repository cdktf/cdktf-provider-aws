# `dataAwsSsmcontactsRotation` Submodule <a name="`dataAwsSsmcontactsRotation` Submodule" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsmcontactsRotation <a name="DataAwsSsmcontactsRotation" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/ssmcontacts_rotation aws_ssmcontacts_rotation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/ssmcontacts_rotation#arn DataAwsSsmcontactsRotation#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/ssmcontacts_rotation#arn DataAwsSsmcontactsRotation#arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/ssmcontacts_rotation#region DataAwsSsmcontactsRotation#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsSsmcontactsRotation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsSsmcontactsRotation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsSsmcontactsRotation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsSsmcontactsRotation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/ssmcontacts_rotation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSsmcontactsRotation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.contactIds">contact_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList">DataAwsSsmcontactsRotationRecurrenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.timeZoneId">time_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `contact_ids`<sup>Required</sup> <a name="contact_ids" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.contactIds"></a>

```python
contact_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.recurrence"></a>

```python
recurrence: DataAwsSsmcontactsRotationRecurrenceList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList">DataAwsSsmcontactsRotationRecurrenceList</a>

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_zone_id`<sup>Required</sup> <a name="time_zone_id" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.timeZoneId"></a>

```python
time_zone_id: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsmcontactsRotationConfig <a name="DataAwsSsmcontactsRotationConfig" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/ssmcontacts_rotation#arn DataAwsSsmcontactsRotation#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/ssmcontacts_rotation#arn DataAwsSsmcontactsRotation#arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/ssmcontacts_rotation#region DataAwsSsmcontactsRotation#region}

---

### DataAwsSsmcontactsRotationRecurrence <a name="DataAwsSsmcontactsRotationRecurrence" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrence.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrence()
```


### DataAwsSsmcontactsRotationRecurrenceDailySettings <a name="DataAwsSsmcontactsRotationRecurrenceDailySettings" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettings()
```


### DataAwsSsmcontactsRotationRecurrenceMonthlySettings <a name="DataAwsSsmcontactsRotationRecurrenceMonthlySettings" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettings()
```


### DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime <a name="DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime()
```


### DataAwsSsmcontactsRotationRecurrenceShiftCoverages <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoverages" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoverages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoverages.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoverages()
```


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes()
```


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd()
```


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart()
```


### DataAwsSsmcontactsRotationRecurrenceWeeklySettings <a name="DataAwsSsmcontactsRotationRecurrenceWeeklySettings" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettings()
```


### DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime <a name="DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsmcontactsRotationRecurrenceDailySettingsList <a name="DataAwsSsmcontactsRotationRecurrenceDailySettingsList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.minuteOfHour">minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettings">DataAwsSsmcontactsRotationRecurrenceDailySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_of_hour`<sup>Required</sup> <a name="minute_of_hour" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.minuteOfHour"></a>

```python
minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSsmcontactsRotationRecurrenceDailySettings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettings">DataAwsSsmcontactsRotationRecurrenceDailySettings</a>

---


### DataAwsSsmcontactsRotationRecurrenceList <a name="DataAwsSsmcontactsRotationRecurrenceList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSsmcontactsRotationRecurrenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList <a name="DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.minuteOfHour">minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_of_hour`<sup>Required</sup> <a name="minute_of_hour" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.minuteOfHour"></a>

```python
minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a>

---


### DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList <a name="DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonth">day_of_month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTime">hand_off_time</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList">DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettings">DataAwsSsmcontactsRotationRecurrenceMonthlySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_month`<sup>Required</sup> <a name="day_of_month" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonth"></a>

```python
day_of_month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hand_off_time`<sup>Required</sup> <a name="hand_off_time" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTime"></a>

```python
hand_off_time: DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList">DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSsmcontactsRotationRecurrenceMonthlySettings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettings">DataAwsSsmcontactsRotationRecurrenceMonthlySettings</a>

---


### DataAwsSsmcontactsRotationRecurrenceOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.dailySettings">daily_settings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList">DataAwsSsmcontactsRotationRecurrenceDailySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.monthlySettings">monthly_settings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList">DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCalls">number_of_on_calls</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplier">recurrence_multiplier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.shiftCoverages">shift_coverages</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.weeklySettings">weekly_settings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList">DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrence">DataAwsSsmcontactsRotationRecurrence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `daily_settings`<sup>Required</sup> <a name="daily_settings" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.dailySettings"></a>

```python
daily_settings: DataAwsSsmcontactsRotationRecurrenceDailySettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList">DataAwsSsmcontactsRotationRecurrenceDailySettingsList</a>

---

##### `monthly_settings`<sup>Required</sup> <a name="monthly_settings" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.monthlySettings"></a>

```python
monthly_settings: DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList">DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList</a>

---

##### `number_of_on_calls`<sup>Required</sup> <a name="number_of_on_calls" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCalls"></a>

```python
number_of_on_calls: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recurrence_multiplier`<sup>Required</sup> <a name="recurrence_multiplier" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplier"></a>

```python
recurrence_multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shift_coverages`<sup>Required</sup> <a name="shift_coverages" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.shiftCoverages"></a>

```python
shift_coverages: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList</a>

---

##### `weekly_settings`<sup>Required</sup> <a name="weekly_settings" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.weeklySettings"></a>

```python
weekly_settings: DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList">DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSsmcontactsRotationRecurrence
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrence">DataAwsSsmcontactsRotationRecurrence</a>

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.minuteOfHour">minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_of_hour`<sup>Required</sup> <a name="minute_of_hour" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.minuteOfHour"></a>

```python
minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a>

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.end">end</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.start">start</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.end"></a>

```python
end: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList</a>

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.start"></a>

```python
start: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.minuteOfHour">minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_of_hour`<sup>Required</sup> <a name="minute_of_hour" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.minuteOfHour"></a>

```python
minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a>

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimes">coverage_times</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.mapBlockKey">map_block_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoverages">DataAwsSsmcontactsRotationRecurrenceShiftCoverages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `coverage_times`<sup>Required</sup> <a name="coverage_times" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimes"></a>

```python
coverage_times: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList</a>

---

##### `map_block_key`<sup>Required</sup> <a name="map_block_key" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.mapBlockKey"></a>

```python
map_block_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSsmcontactsRotationRecurrenceShiftCoverages
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoverages">DataAwsSsmcontactsRotationRecurrenceShiftCoverages</a>

---


### DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList <a name="DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.minuteOfHour">minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_of_hour`<sup>Required</sup> <a name="minute_of_hour" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.minuteOfHour"></a>

```python
minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a>

---


### DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList <a name="DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_rotation

dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTime">hand_off_time</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList">DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettings">DataAwsSsmcontactsRotationRecurrenceWeeklySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `hand_off_time`<sup>Required</sup> <a name="hand_off_time" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTime"></a>

```python
hand_off_time: DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList">DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSsmcontactsRotationRecurrenceWeeklySettings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettings">DataAwsSsmcontactsRotationRecurrenceWeeklySettings</a>

---



