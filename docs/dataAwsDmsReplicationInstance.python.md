# `dataAwsDmsReplicationInstance` Submodule <a name="`dataAwsDmsReplicationInstance` Submodule" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDmsReplicationInstance <a name="DataAwsDmsReplicationInstance" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/dms_replication_instance aws_dms_replication_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_dms_replication_instance

dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  replication_instance_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.replicationInstanceId">replication_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/dms_replication_instance#replication_instance_id DataAwsDmsReplicationInstance#replication_instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/dms_replication_instance#id DataAwsDmsReplicationInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/dms_replication_instance#tags DataAwsDmsReplicationInstance#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `replication_instance_id`<sup>Required</sup> <a name="replication_instance_id" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.replicationInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/dms_replication_instance#replication_instance_id DataAwsDmsReplicationInstance#replication_instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/dms_replication_instance#id DataAwsDmsReplicationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/dms_replication_instance#tags DataAwsDmsReplicationInstance#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsDmsReplicationInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_dms_replication_instance

dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_dms_replication_instance

dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_dms_replication_instance

dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_dms_replication_instance

dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsDmsReplicationInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsDmsReplicationInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsDmsReplicationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/dms_replication_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsDmsReplicationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.multiAz">multi_az</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.publiclyAccessible">publicly_accessible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceArn">replication_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceClass">replication_instance_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstancePrivateIps">replication_instance_private_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstancePublicIps">replication_instance_public_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationSubnetGroupId">replication_subnet_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceIdInput">replication_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceId">replication_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `allocated_storage`<sup>Required</sup> <a name="allocated_storage" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.allocatedStorage"></a>

```python
allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_minor_version_upgrade`<sup>Required</sup> <a name="auto_minor_version_upgrade" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `multi_az`<sup>Required</sup> <a name="multi_az" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.multiAz"></a>

```python
multi_az: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.publiclyAccessible"></a>

```python
publicly_accessible: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `replication_instance_arn`<sup>Required</sup> <a name="replication_instance_arn" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceArn"></a>

```python
replication_instance_arn: str
```

- *Type:* str

---

##### `replication_instance_class`<sup>Required</sup> <a name="replication_instance_class" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceClass"></a>

```python
replication_instance_class: str
```

- *Type:* str

---

##### `replication_instance_private_ips`<sup>Required</sup> <a name="replication_instance_private_ips" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstancePrivateIps"></a>

```python
replication_instance_private_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replication_instance_public_ips`<sup>Required</sup> <a name="replication_instance_public_ips" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstancePublicIps"></a>

```python
replication_instance_public_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replication_subnet_group_id`<sup>Required</sup> <a name="replication_subnet_group_id" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationSubnetGroupId"></a>

```python
replication_subnet_group_id: str
```

- *Type:* str

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `replication_instance_id_input`<sup>Optional</sup> <a name="replication_instance_id_input" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceIdInput"></a>

```python
replication_instance_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `replication_instance_id`<sup>Required</sup> <a name="replication_instance_id" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceId"></a>

```python
replication_instance_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDmsReplicationInstanceConfig <a name="DataAwsDmsReplicationInstanceConfig" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_dms_replication_instance

dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  replication_instance_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.replicationInstanceId">replication_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/dms_replication_instance#replication_instance_id DataAwsDmsReplicationInstance#replication_instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/dms_replication_instance#id DataAwsDmsReplicationInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/dms_replication_instance#tags DataAwsDmsReplicationInstance#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `replication_instance_id`<sup>Required</sup> <a name="replication_instance_id" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.replicationInstanceId"></a>

```python
replication_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/dms_replication_instance#replication_instance_id DataAwsDmsReplicationInstance#replication_instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/dms_replication_instance#id DataAwsDmsReplicationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/dms_replication_instance#tags DataAwsDmsReplicationInstance#tags}.

---



