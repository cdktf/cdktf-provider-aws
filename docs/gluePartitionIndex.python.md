# `gluePartitionIndex` Submodule <a name="`gluePartitionIndex` Submodule" id="@cdktf/provider-aws.gluePartitionIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GluePartitionIndex <a name="GluePartitionIndex" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index aws_glue_partition_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition_index

gluePartitionIndex.GluePartitionIndex(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_name: str,
  partition_index: GluePartitionIndexPartitionIndex,
  table_name: str,
  catalog_id: str = None,
  id: str = None,
  timeouts: GluePartitionIndexTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#database_name GluePartitionIndex#database_name}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.partitionIndex">partition_index</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a></code> | partition_index block. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#table_name GluePartitionIndex#table_name}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#catalog_id GluePartitionIndex#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#id GluePartitionIndex#id}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#database_name GluePartitionIndex#database_name}.

---

##### `partition_index`<sup>Required</sup> <a name="partition_index" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.partitionIndex"></a>

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a>

partition_index block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#partition_index GluePartitionIndex#partition_index}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#table_name GluePartitionIndex#table_name}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#catalog_id GluePartitionIndex#catalog_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#id GluePartitionIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#timeouts GluePartitionIndex#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.putPartitionIndex">put_partition_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_partition_index` <a name="put_partition_index" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.putPartitionIndex"></a>

```python
def put_partition_index(
  index_name: str = None,
  keys: typing.List[str] = None
) -> None
```

###### `index_name`<sup>Optional</sup> <a name="index_name" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.putPartitionIndex.parameter.indexName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#index_name GluePartitionIndex#index_name}.

---

###### `keys`<sup>Optional</sup> <a name="keys" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.putPartitionIndex.parameter.keys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#keys GluePartitionIndex#keys}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#create GluePartitionIndex#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#delete GluePartitionIndex#delete}.

---

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition_index

gluePartitionIndex.GluePartitionIndex.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition_index

gluePartitionIndex.GluePartitionIndex.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition_index

gluePartitionIndex.GluePartitionIndex.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.partitionIndex">partition_index</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference">GluePartitionIndexPartitionIndexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference">GluePartitionIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.partitionIndexInput">partition_index_input</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `partition_index`<sup>Required</sup> <a name="partition_index" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.partitionIndex"></a>

```python
partition_index: GluePartitionIndexPartitionIndexOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference">GluePartitionIndexPartitionIndexOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.timeouts"></a>

```python
timeouts: GluePartitionIndexTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference">GluePartitionIndexTimeoutsOutputReference</a>

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `partition_index_input`<sup>Optional</sup> <a name="partition_index_input" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.partitionIndexInput"></a>

```python
partition_index_input: GluePartitionIndexPartitionIndex
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a>

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GluePartitionIndexTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a>, cdktf.IResolvable]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GluePartitionIndexConfig <a name="GluePartitionIndexConfig" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition_index

gluePartitionIndex.GluePartitionIndexConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_name: str,
  partition_index: GluePartitionIndexPartitionIndex,
  table_name: str,
  catalog_id: str = None,
  id: str = None,
  timeouts: GluePartitionIndexTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#database_name GluePartitionIndex#database_name}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.partitionIndex">partition_index</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a></code> | partition_index block. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#table_name GluePartitionIndex#table_name}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#catalog_id GluePartitionIndex#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#id GluePartitionIndex#id}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#database_name GluePartitionIndex#database_name}.

---

##### `partition_index`<sup>Required</sup> <a name="partition_index" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.partitionIndex"></a>

```python
partition_index: GluePartitionIndexPartitionIndex
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a>

partition_index block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#partition_index GluePartitionIndex#partition_index}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#table_name GluePartitionIndex#table_name}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#catalog_id GluePartitionIndex#catalog_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#id GluePartitionIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.timeouts"></a>

```python
timeouts: GluePartitionIndexTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#timeouts GluePartitionIndex#timeouts}

---

### GluePartitionIndexPartitionIndex <a name="GluePartitionIndexPartitionIndex" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition_index

gluePartitionIndex.GluePartitionIndexPartitionIndex(
  index_name: str = None,
  keys: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex.property.indexName">index_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#index_name GluePartitionIndex#index_name}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex.property.keys">keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#keys GluePartitionIndex#keys}. |

---

##### `index_name`<sup>Optional</sup> <a name="index_name" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#index_name GluePartitionIndex#index_name}.

---

##### `keys`<sup>Optional</sup> <a name="keys" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex.property.keys"></a>

```python
keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#keys GluePartitionIndex#keys}.

---

### GluePartitionIndexTimeouts <a name="GluePartitionIndexTimeouts" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition_index

gluePartitionIndex.GluePartitionIndexTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#create GluePartitionIndex#create}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#delete GluePartitionIndex#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#create GluePartitionIndex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#delete GluePartitionIndex#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GluePartitionIndexPartitionIndexOutputReference <a name="GluePartitionIndexPartitionIndexOutputReference" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition_index

gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resetIndexName">reset_index_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resetKeys">reset_keys</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_index_name` <a name="reset_index_name" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resetIndexName"></a>

```python
def reset_index_name() -> None
```

##### `reset_keys` <a name="reset_keys" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resetKeys"></a>

```python
def reset_keys() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexStatus">index_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexNameInput">index_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.keysInput">keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexName">index_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.keys">keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `index_status`<sup>Required</sup> <a name="index_status" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexStatus"></a>

```python
index_status: str
```

- *Type:* str

---

##### `index_name_input`<sup>Optional</sup> <a name="index_name_input" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexNameInput"></a>

```python
index_name_input: str
```

- *Type:* str

---

##### `keys_input`<sup>Optional</sup> <a name="keys_input" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.keysInput"></a>

```python
keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.keys"></a>

```python
keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.internalValue"></a>

```python
internal_value: GluePartitionIndexPartitionIndex
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a>

---


### GluePartitionIndexTimeoutsOutputReference <a name="GluePartitionIndexTimeoutsOutputReference" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition_index

gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GluePartitionIndexTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a>, cdktf.IResolvable]

---



