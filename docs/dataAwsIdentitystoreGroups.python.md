# `dataAwsIdentitystoreGroups` Submodule <a name="`dataAwsIdentitystoreGroups` Submodule" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIdentitystoreGroups <a name="DataAwsIdentitystoreGroups" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/identitystore_groups aws_identitystore_groups}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_groups

dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  identity_store_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.identityStoreId">identity_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/identitystore_groups#identity_store_id DataAwsIdentitystoreGroups#identity_store_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.identityStoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/identitystore_groups#identity_store_id DataAwsIdentitystoreGroups#identity_store_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsIdentitystoreGroups resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_groups

dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_groups

dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_groups

dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_groups

dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsIdentitystoreGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsIdentitystoreGroups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsIdentitystoreGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/identitystore_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsIdentitystoreGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.groups">groups</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList">DataAwsIdentitystoreGroupsGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.identityStoreIdInput">identity_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.identityStoreId">identity_store_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.groups"></a>

```python
groups: DataAwsIdentitystoreGroupsGroupsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList">DataAwsIdentitystoreGroupsGroupsList</a>

---

##### `identity_store_id_input`<sup>Optional</sup> <a name="identity_store_id_input" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.identityStoreIdInput"></a>

```python
identity_store_id_input: str
```

- *Type:* str

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.identityStoreId"></a>

```python
identity_store_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIdentitystoreGroupsConfig <a name="DataAwsIdentitystoreGroupsConfig" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_groups

dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  identity_store_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.identityStoreId">identity_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/identitystore_groups#identity_store_id DataAwsIdentitystoreGroups#identity_store_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.identityStoreId"></a>

```python
identity_store_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/identitystore_groups#identity_store_id DataAwsIdentitystoreGroups#identity_store_id}.

---

### DataAwsIdentitystoreGroupsGroups <a name="DataAwsIdentitystoreGroupsGroups" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_groups

dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroups()
```


### DataAwsIdentitystoreGroupsGroupsExternalIds <a name="DataAwsIdentitystoreGroupsGroupsExternalIds" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIds.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_groups

dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIds()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsIdentitystoreGroupsGroupsExternalIdsList <a name="DataAwsIdentitystoreGroupsGroupsExternalIdsList" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_groups

dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference <a name="DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_groups

dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIds">DataAwsIdentitystoreGroupsGroupsExternalIds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsIdentitystoreGroupsGroupsExternalIds
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIds">DataAwsIdentitystoreGroupsGroupsExternalIds</a>

---


### DataAwsIdentitystoreGroupsGroupsList <a name="DataAwsIdentitystoreGroupsGroupsList" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_groups

dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsIdentitystoreGroupsGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsIdentitystoreGroupsGroupsOutputReference <a name="DataAwsIdentitystoreGroupsGroupsOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_groups

dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.externalIds">external_ids</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList">DataAwsIdentitystoreGroupsGroupsExternalIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.identityStoreId">identity_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroups">DataAwsIdentitystoreGroupsGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_ids`<sup>Required</sup> <a name="external_ids" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.externalIds"></a>

```python
external_ids: DataAwsIdentitystoreGroupsGroupsExternalIdsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList">DataAwsIdentitystoreGroupsGroupsExternalIdsList</a>

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.identityStoreId"></a>

```python
identity_store_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsIdentitystoreGroupsGroups
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroups">DataAwsIdentitystoreGroupsGroups</a>

---



