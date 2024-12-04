# `dataAwsVerifiedpermissionsPolicyStore` Submodule <a name="`dataAwsVerifiedpermissionsPolicyStore` Submodule" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVerifiedpermissionsPolicyStore <a name="DataAwsVerifiedpermissionsPolicyStore" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/data-sources/verifiedpermissions_policy_store aws_verifiedpermissions_policy_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_verifiedpermissions_policy_store

dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/data-sources/verifiedpermissions_policy_store#id DataAwsVerifiedpermissionsPolicyStore#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/data-sources/verifiedpermissions_policy_store#id DataAwsVerifiedpermissionsPolicyStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsVerifiedpermissionsPolicyStore resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_verifiedpermissions_policy_store

dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_verifiedpermissions_policy_store

dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_verifiedpermissions_policy_store

dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_verifiedpermissions_policy_store

dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsVerifiedpermissionsPolicyStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsVerifiedpermissionsPolicyStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsVerifiedpermissionsPolicyStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/data-sources/verifiedpermissions_policy_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsVerifiedpermissionsPolicyStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.lastUpdatedDate">last_updated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.validationSettings">validation_settings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList">DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `last_updated_date`<sup>Required</sup> <a name="last_updated_date" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.lastUpdatedDate"></a>

```python
last_updated_date: str
```

- *Type:* str

---

##### `validation_settings`<sup>Required</sup> <a name="validation_settings" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.validationSettings"></a>

```python
validation_settings: DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList">DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVerifiedpermissionsPolicyStoreConfig <a name="DataAwsVerifiedpermissionsPolicyStoreConfig" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_verifiedpermissions_policy_store

dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/data-sources/verifiedpermissions_policy_store#id DataAwsVerifiedpermissionsPolicyStore#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/data-sources/verifiedpermissions_policy_store#id DataAwsVerifiedpermissionsPolicyStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsVerifiedpermissionsPolicyStoreValidationSettings <a name="DataAwsVerifiedpermissionsPolicyStoreValidationSettings" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_verifiedpermissions_policy_store

dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList <a name="DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_verifiedpermissions_policy_store

dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference <a name="DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_verifiedpermissions_policy_store

dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettings">DataAwsVerifiedpermissionsPolicyStoreValidationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsVerifiedpermissionsPolicyStoreValidationSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettings">DataAwsVerifiedpermissionsPolicyStoreValidationSettings</a>

---



