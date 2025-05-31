# `s3TablesTableBucket` Submodule <a name="`s3TablesTableBucket` Submodule" id="@cdktf/provider-aws.s3TablesTableBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3TablesTableBucket <a name="S3TablesTableBucket" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket aws_s3tables_table_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucket(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  encryption_configuration: S3TablesTableBucketEncryptionConfiguration = None,
  maintenance_configuration: S3TablesTableBucketMaintenanceConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#name S3TablesTableBucket#name}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#encryption_configuration S3TablesTableBucket#encryption_configuration}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.maintenanceConfiguration">maintenance_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfiguration">S3TablesTableBucketMaintenanceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#maintenance_configuration S3TablesTableBucket#maintenance_configuration}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#name S3TablesTableBucket#name}.

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#encryption_configuration S3TablesTableBucket#encryption_configuration}.

---

##### `maintenance_configuration`<sup>Optional</sup> <a name="maintenance_configuration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.maintenanceConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfiguration">S3TablesTableBucketMaintenanceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#maintenance_configuration S3TablesTableBucket#maintenance_configuration}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.putMaintenanceConfiguration">put_maintenance_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.resetMaintenanceConfiguration">reset_maintenance_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  kms_key_arn: str = None,
  sse_algorithm: str = None
) -> None
```

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.putEncryptionConfiguration.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#kms_key_arn S3TablesTableBucket#kms_key_arn}.

---

###### `sse_algorithm`<sup>Optional</sup> <a name="sse_algorithm" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.putEncryptionConfiguration.parameter.sseAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#sse_algorithm S3TablesTableBucket#sse_algorithm}.

---

##### `put_maintenance_configuration` <a name="put_maintenance_configuration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.putMaintenanceConfiguration"></a>

```python
def put_maintenance_configuration(
  iceberg_unreferenced_file_removal: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval = None
) -> None
```

###### `iceberg_unreferenced_file_removal`<sup>Optional</sup> <a name="iceberg_unreferenced_file_removal" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.putMaintenanceConfiguration.parameter.icebergUnreferencedFileRemoval"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#iceberg_unreferenced_file_removal S3TablesTableBucket#iceberg_unreferenced_file_removal}.

---

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_maintenance_configuration` <a name="reset_maintenance_configuration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.resetMaintenanceConfiguration"></a>

```python
def reset_maintenance_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a S3TablesTableBucket resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucket.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucket.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a S3TablesTableBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3TablesTableBucket to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3TablesTableBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3TablesTableBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference">S3TablesTableBucketEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.maintenanceConfiguration">maintenance_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference">S3TablesTableBucketMaintenanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.ownerAccountId">owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.maintenanceConfigurationInput">maintenance_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfiguration">S3TablesTableBucketMaintenanceConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.encryptionConfiguration"></a>

```python
encryption_configuration: S3TablesTableBucketEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference">S3TablesTableBucketEncryptionConfigurationOutputReference</a>

---

##### `maintenance_configuration`<sup>Required</sup> <a name="maintenance_configuration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.maintenanceConfiguration"></a>

```python
maintenance_configuration: S3TablesTableBucketMaintenanceConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference">S3TablesTableBucketMaintenanceConfigurationOutputReference</a>

---

##### `owner_account_id`<sup>Required</sup> <a name="owner_account_id" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.ownerAccountId"></a>

```python
owner_account_id: str
```

- *Type:* str

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: typing.Union[IResolvable, S3TablesTableBucketEncryptionConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>]

---

##### `maintenance_configuration_input`<sup>Optional</sup> <a name="maintenance_configuration_input" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.maintenanceConfigurationInput"></a>

```python
maintenance_configuration_input: typing.Union[IResolvable, S3TablesTableBucketMaintenanceConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfiguration">S3TablesTableBucketMaintenanceConfiguration</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3TablesTableBucketConfig <a name="S3TablesTableBucketConfig" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  encryption_configuration: S3TablesTableBucketEncryptionConfiguration = None,
  maintenance_configuration: S3TablesTableBucketMaintenanceConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#name S3TablesTableBucket#name}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#encryption_configuration S3TablesTableBucket#encryption_configuration}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.maintenanceConfiguration">maintenance_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfiguration">S3TablesTableBucketMaintenanceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#maintenance_configuration S3TablesTableBucket#maintenance_configuration}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#name S3TablesTableBucket#name}.

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.encryptionConfiguration"></a>

```python
encryption_configuration: S3TablesTableBucketEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#encryption_configuration S3TablesTableBucket#encryption_configuration}.

---

##### `maintenance_configuration`<sup>Optional</sup> <a name="maintenance_configuration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.maintenanceConfiguration"></a>

```python
maintenance_configuration: S3TablesTableBucketMaintenanceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfiguration">S3TablesTableBucketMaintenanceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#maintenance_configuration S3TablesTableBucket#maintenance_configuration}.

---

### S3TablesTableBucketEncryptionConfiguration <a name="S3TablesTableBucketEncryptionConfiguration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration(
  kms_key_arn: str = None,
  sse_algorithm: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#kms_key_arn S3TablesTableBucket#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.property.sseAlgorithm">sse_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#sse_algorithm S3TablesTableBucket#sse_algorithm}. |

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#kms_key_arn S3TablesTableBucket#kms_key_arn}.

---

##### `sse_algorithm`<sup>Optional</sup> <a name="sse_algorithm" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.property.sseAlgorithm"></a>

```python
sse_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#sse_algorithm S3TablesTableBucket#sse_algorithm}.

---

### S3TablesTableBucketMaintenanceConfiguration <a name="S3TablesTableBucketMaintenanceConfiguration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketMaintenanceConfiguration(
  iceberg_unreferenced_file_removal: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfiguration.property.icebergUnreferencedFileRemoval">iceberg_unreferenced_file_removal</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#iceberg_unreferenced_file_removal S3TablesTableBucket#iceberg_unreferenced_file_removal}. |

---

##### `iceberg_unreferenced_file_removal`<sup>Optional</sup> <a name="iceberg_unreferenced_file_removal" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfiguration.property.icebergUnreferencedFileRemoval"></a>

```python
iceberg_unreferenced_file_removal: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#iceberg_unreferenced_file_removal S3TablesTableBucket#iceberg_unreferenced_file_removal}.

---

### S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval <a name="S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval(
  settings: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#settings S3TablesTableBucket#settings}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#status S3TablesTableBucket#status}. |

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval.property.settings"></a>

```python
settings: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#settings S3TablesTableBucket#settings}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#status S3TablesTableBucket#status}.

---

### S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings <a name="S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings(
  non_current_days: typing.Union[int, float] = None,
  unreferenced_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings.property.nonCurrentDays">non_current_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#non_current_days S3TablesTableBucket#non_current_days}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings.property.unreferencedDays">unreferenced_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#unreferenced_days S3TablesTableBucket#unreferenced_days}. |

---

##### `non_current_days`<sup>Optional</sup> <a name="non_current_days" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings.property.nonCurrentDays"></a>

```python
non_current_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#non_current_days S3TablesTableBucket#non_current_days}.

---

##### `unreferenced_days`<sup>Optional</sup> <a name="unreferenced_days" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings.property.unreferencedDays"></a>

```python
unreferenced_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#unreferenced_days S3TablesTableBucket#unreferenced_days}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3TablesTableBucketEncryptionConfigurationOutputReference <a name="S3TablesTableBucketEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resetSseAlgorithm">reset_sse_algorithm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_sse_algorithm` <a name="reset_sse_algorithm" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resetSseAlgorithm"></a>

```python
def reset_sse_algorithm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithmInput">sse_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithm">sse_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `sse_algorithm_input`<sup>Optional</sup> <a name="sse_algorithm_input" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithmInput"></a>

```python
sse_algorithm_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `sse_algorithm`<sup>Required</sup> <a name="sse_algorithm" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithm"></a>

```python
sse_algorithm: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, S3TablesTableBucketEncryptionConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>]

---


### S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference <a name="S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.resetSettings">reset_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_settings` <a name="put_settings" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.putSettings"></a>

```python
def put_settings(
  non_current_days: typing.Union[int, float] = None,
  unreferenced_days: typing.Union[int, float] = None
) -> None
```

###### `non_current_days`<sup>Optional</sup> <a name="non_current_days" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.putSettings.parameter.nonCurrentDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#non_current_days S3TablesTableBucket#non_current_days}.

---

###### `unreferenced_days`<sup>Optional</sup> <a name="unreferenced_days" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.putSettings.parameter.unreferencedDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#unreferenced_days S3TablesTableBucket#unreferenced_days}.

---

##### `reset_settings` <a name="reset_settings" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.settingsInput">settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.settings"></a>

```python
settings: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference</a>

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.settingsInput"></a>

```python
settings_input: typing.Union[IResolvable, S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings</a>]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval</a>]

---


### S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference <a name="S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.resetNonCurrentDays">reset_non_current_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.resetUnreferencedDays">reset_unreferenced_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_non_current_days` <a name="reset_non_current_days" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.resetNonCurrentDays"></a>

```python
def reset_non_current_days() -> None
```

##### `reset_unreferenced_days` <a name="reset_unreferenced_days" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.resetUnreferencedDays"></a>

```python
def reset_unreferenced_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.nonCurrentDaysInput">non_current_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.unreferencedDaysInput">unreferenced_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.nonCurrentDays">non_current_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.unreferencedDays">unreferenced_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `non_current_days_input`<sup>Optional</sup> <a name="non_current_days_input" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.nonCurrentDaysInput"></a>

```python
non_current_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unreferenced_days_input`<sup>Optional</sup> <a name="unreferenced_days_input" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.unreferencedDaysInput"></a>

```python
unreferenced_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `non_current_days`<sup>Required</sup> <a name="non_current_days" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.nonCurrentDays"></a>

```python
non_current_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unreferenced_days`<sup>Required</sup> <a name="unreferenced_days" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.unreferencedDays"></a>

```python
unreferenced_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings</a>]

---


### S3TablesTableBucketMaintenanceConfigurationOutputReference <a name="S3TablesTableBucketMaintenanceConfigurationOutputReference" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.putIcebergUnreferencedFileRemoval">put_iceberg_unreferenced_file_removal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.resetIcebergUnreferencedFileRemoval">reset_iceberg_unreferenced_file_removal</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_iceberg_unreferenced_file_removal` <a name="put_iceberg_unreferenced_file_removal" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.putIcebergUnreferencedFileRemoval"></a>

```python
def put_iceberg_unreferenced_file_removal(
  settings: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings = None,
  status: str = None
) -> None
```

###### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.putIcebergUnreferencedFileRemoval.parameter.settings"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#settings S3TablesTableBucket#settings}.

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.putIcebergUnreferencedFileRemoval.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/s3tables_table_bucket#status S3TablesTableBucket#status}.

---

##### `reset_iceberg_unreferenced_file_removal` <a name="reset_iceberg_unreferenced_file_removal" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.resetIcebergUnreferencedFileRemoval"></a>

```python
def reset_iceberg_unreferenced_file_removal() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.property.icebergUnreferencedFileRemoval">iceberg_unreferenced_file_removal</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.property.icebergUnreferencedFileRemovalInput">iceberg_unreferenced_file_removal_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfiguration">S3TablesTableBucketMaintenanceConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iceberg_unreferenced_file_removal`<sup>Required</sup> <a name="iceberg_unreferenced_file_removal" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.property.icebergUnreferencedFileRemoval"></a>

```python
iceberg_unreferenced_file_removal: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference</a>

---

##### `iceberg_unreferenced_file_removal_input`<sup>Optional</sup> <a name="iceberg_unreferenced_file_removal_input" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.property.icebergUnreferencedFileRemovalInput"></a>

```python
iceberg_unreferenced_file_removal_input: typing.Union[IResolvable, S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, S3TablesTableBucketMaintenanceConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfiguration">S3TablesTableBucketMaintenanceConfiguration</a>]

---



