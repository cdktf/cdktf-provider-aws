# `s3ControlBucketLifecycleConfiguration` Submodule <a name="`s3ControlBucketLifecycleConfiguration` Submodule" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlBucketLifecycleConfiguration <a name="S3ControlBucketLifecycleConfiguration" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration aws_s3control_bucket_lifecycle_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_bucket_lifecycle_configuration

s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  rule: typing.Union[IResolvable, typing.List[S3ControlBucketLifecycleConfigurationRule]],
  id: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#bucket S3ControlBucketLifecycleConfiguration#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule">S3ControlBucketLifecycleConfigurationRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#id S3ControlBucketLifecycleConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#bucket S3ControlBucketLifecycleConfiguration#bucket}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule">S3ControlBucketLifecycleConfigurationRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#rule S3ControlBucketLifecycleConfiguration#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#id S3ControlBucketLifecycleConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#region S3ControlBucketLifecycleConfiguration#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[S3ControlBucketLifecycleConfigurationRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule">S3ControlBucketLifecycleConfigurationRule</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a S3ControlBucketLifecycleConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_bucket_lifecycle_configuration

s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_bucket_lifecycle_configuration

s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_bucket_lifecycle_configuration

s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_bucket_lifecycle_configuration

s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a S3ControlBucketLifecycleConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3ControlBucketLifecycleConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3ControlBucketLifecycleConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3ControlBucketLifecycleConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList">S3ControlBucketLifecycleConfigurationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule">S3ControlBucketLifecycleConfigurationRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.rule"></a>

```python
rule: S3ControlBucketLifecycleConfigurationRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList">S3ControlBucketLifecycleConfigurationRuleList</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[S3ControlBucketLifecycleConfigurationRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule">S3ControlBucketLifecycleConfigurationRule</a>]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlBucketLifecycleConfigurationConfig <a name="S3ControlBucketLifecycleConfigurationConfig" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_bucket_lifecycle_configuration

s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  rule: typing.Union[IResolvable, typing.List[S3ControlBucketLifecycleConfigurationRule]],
  id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#bucket S3ControlBucketLifecycleConfiguration#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule">S3ControlBucketLifecycleConfigurationRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#id S3ControlBucketLifecycleConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#bucket S3ControlBucketLifecycleConfiguration#bucket}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[S3ControlBucketLifecycleConfigurationRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule">S3ControlBucketLifecycleConfigurationRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#rule S3ControlBucketLifecycleConfiguration#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#id S3ControlBucketLifecycleConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#region S3ControlBucketLifecycleConfiguration#region}

---

### S3ControlBucketLifecycleConfigurationRule <a name="S3ControlBucketLifecycleConfigurationRule" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_bucket_lifecycle_configuration

s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule(
  id: str,
  abort_incomplete_multipart_upload: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload = None,
  expiration: S3ControlBucketLifecycleConfigurationRuleExpiration = None,
  filter: S3ControlBucketLifecycleConfigurationRuleFilter = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#id S3ControlBucketLifecycleConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.abortIncompleteMultipartUpload">abort_incomplete_multipart_upload</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a></code> | abort_incomplete_multipart_upload block. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration">S3ControlBucketLifecycleConfigurationRuleExpiration</a></code> | expiration block. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter">S3ControlBucketLifecycleConfigurationRuleFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#status S3ControlBucketLifecycleConfiguration#status}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#id S3ControlBucketLifecycleConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `abort_incomplete_multipart_upload`<sup>Optional</sup> <a name="abort_incomplete_multipart_upload" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.abortIncompleteMultipartUpload"></a>

```python
abort_incomplete_multipart_upload: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a>

abort_incomplete_multipart_upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#abort_incomplete_multipart_upload S3ControlBucketLifecycleConfiguration#abort_incomplete_multipart_upload}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.expiration"></a>

```python
expiration: S3ControlBucketLifecycleConfigurationRuleExpiration
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration">S3ControlBucketLifecycleConfigurationRuleExpiration</a>

expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#expiration S3ControlBucketLifecycleConfiguration#expiration}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.filter"></a>

```python
filter: S3ControlBucketLifecycleConfigurationRuleFilter
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter">S3ControlBucketLifecycleConfigurationRuleFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#filter S3ControlBucketLifecycleConfiguration#filter}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#status S3ControlBucketLifecycleConfiguration#status}.

---

### S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload <a name="S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_bucket_lifecycle_configuration

s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload(
  days_after_initiation: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload.property.daysAfterInitiation">days_after_initiation</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#days_after_initiation S3ControlBucketLifecycleConfiguration#days_after_initiation}. |

---

##### `days_after_initiation`<sup>Required</sup> <a name="days_after_initiation" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload.property.daysAfterInitiation"></a>

```python
days_after_initiation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#days_after_initiation S3ControlBucketLifecycleConfiguration#days_after_initiation}.

---

### S3ControlBucketLifecycleConfigurationRuleExpiration <a name="S3ControlBucketLifecycleConfigurationRuleExpiration" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_bucket_lifecycle_configuration

s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration(
  date: str = None,
  days: typing.Union[int, float] = None,
  expired_object_delete_marker: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.property.date">date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#date S3ControlBucketLifecycleConfiguration#date}. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#days S3ControlBucketLifecycleConfiguration#days}. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.property.expiredObjectDeleteMarker">expired_object_delete_marker</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#expired_object_delete_marker S3ControlBucketLifecycleConfiguration#expired_object_delete_marker}. |

---

##### `date`<sup>Optional</sup> <a name="date" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.property.date"></a>

```python
date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#date S3ControlBucketLifecycleConfiguration#date}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#days S3ControlBucketLifecycleConfiguration#days}.

---

##### `expired_object_delete_marker`<sup>Optional</sup> <a name="expired_object_delete_marker" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.property.expiredObjectDeleteMarker"></a>

```python
expired_object_delete_marker: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#expired_object_delete_marker S3ControlBucketLifecycleConfiguration#expired_object_delete_marker}.

---

### S3ControlBucketLifecycleConfigurationRuleFilter <a name="S3ControlBucketLifecycleConfigurationRuleFilter" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_bucket_lifecycle_configuration

s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter(
  prefix: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#prefix S3ControlBucketLifecycleConfiguration#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#tags S3ControlBucketLifecycleConfiguration#tags}. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#prefix S3ControlBucketLifecycleConfiguration#prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#tags S3ControlBucketLifecycleConfiguration#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference <a name="S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_bucket_lifecycle_configuration

s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput">days_after_initiation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation">days_after_initiation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_after_initiation_input`<sup>Optional</sup> <a name="days_after_initiation_input" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput"></a>

```python
days_after_initiation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_after_initiation`<sup>Required</sup> <a name="days_after_initiation" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation"></a>

```python
days_after_initiation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.internalValue"></a>

```python
internal_value: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a>

---


### S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference <a name="S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_bucket_lifecycle_configuration

s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resetDate">reset_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resetDays">reset_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resetExpiredObjectDeleteMarker">reset_expired_object_delete_marker</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_date` <a name="reset_date" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resetDate"></a>

```python
def reset_date() -> None
```

##### `reset_days` <a name="reset_days" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resetDays"></a>

```python
def reset_days() -> None
```

##### `reset_expired_object_delete_marker` <a name="reset_expired_object_delete_marker" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resetExpiredObjectDeleteMarker"></a>

```python
def reset_expired_object_delete_marker() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.dateInput">date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput">expired_object_delete_marker_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.date">date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.expiredObjectDeleteMarker">expired_object_delete_marker</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration">S3ControlBucketLifecycleConfigurationRuleExpiration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_input`<sup>Optional</sup> <a name="date_input" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.dateInput"></a>

```python
date_input: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expired_object_delete_marker_input`<sup>Optional</sup> <a name="expired_object_delete_marker_input" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput"></a>

```python
expired_object_delete_marker_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.date"></a>

```python
date: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expired_object_delete_marker`<sup>Required</sup> <a name="expired_object_delete_marker" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.expiredObjectDeleteMarker"></a>

```python
expired_object_delete_marker: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.internalValue"></a>

```python
internal_value: S3ControlBucketLifecycleConfigurationRuleExpiration
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration">S3ControlBucketLifecycleConfigurationRuleExpiration</a>

---


### S3ControlBucketLifecycleConfigurationRuleFilterOutputReference <a name="S3ControlBucketLifecycleConfigurationRuleFilterOutputReference" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_bucket_lifecycle_configuration

s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter">S3ControlBucketLifecycleConfigurationRuleFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.internalValue"></a>

```python
internal_value: S3ControlBucketLifecycleConfigurationRuleFilter
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter">S3ControlBucketLifecycleConfigurationRuleFilter</a>

---


### S3ControlBucketLifecycleConfigurationRuleList <a name="S3ControlBucketLifecycleConfigurationRuleList" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_bucket_lifecycle_configuration

s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3ControlBucketLifecycleConfigurationRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule">S3ControlBucketLifecycleConfigurationRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3ControlBucketLifecycleConfigurationRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule">S3ControlBucketLifecycleConfigurationRule</a>]]

---


### S3ControlBucketLifecycleConfigurationRuleOutputReference <a name="S3ControlBucketLifecycleConfigurationRuleOutputReference" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_bucket_lifecycle_configuration

s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putAbortIncompleteMultipartUpload">put_abort_incomplete_multipart_upload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putExpiration">put_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetAbortIncompleteMultipartUpload">reset_abort_incomplete_multipart_upload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetExpiration">reset_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_abort_incomplete_multipart_upload` <a name="put_abort_incomplete_multipart_upload" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putAbortIncompleteMultipartUpload"></a>

```python
def put_abort_incomplete_multipart_upload(
  days_after_initiation: typing.Union[int, float]
) -> None
```

###### `days_after_initiation`<sup>Required</sup> <a name="days_after_initiation" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putAbortIncompleteMultipartUpload.parameter.daysAfterInitiation"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#days_after_initiation S3ControlBucketLifecycleConfiguration#days_after_initiation}.

---

##### `put_expiration` <a name="put_expiration" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putExpiration"></a>

```python
def put_expiration(
  date: str = None,
  days: typing.Union[int, float] = None,
  expired_object_delete_marker: typing.Union[bool, IResolvable] = None
) -> None
```

###### `date`<sup>Optional</sup> <a name="date" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putExpiration.parameter.date"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#date S3ControlBucketLifecycleConfiguration#date}.

---

###### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putExpiration.parameter.days"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#days S3ControlBucketLifecycleConfiguration#days}.

---

###### `expired_object_delete_marker`<sup>Optional</sup> <a name="expired_object_delete_marker" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putExpiration.parameter.expiredObjectDeleteMarker"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#expired_object_delete_marker S3ControlBucketLifecycleConfiguration#expired_object_delete_marker}.

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putFilter"></a>

```python
def put_filter(
  prefix: str = None,
  tags: typing.Mapping[str] = None
) -> None
```

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putFilter.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#prefix S3ControlBucketLifecycleConfiguration#prefix}.

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putFilter.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_bucket_lifecycle_configuration#tags S3ControlBucketLifecycleConfiguration#tags}.

---

##### `reset_abort_incomplete_multipart_upload` <a name="reset_abort_incomplete_multipart_upload" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetAbortIncompleteMultipartUpload"></a>

```python
def reset_abort_incomplete_multipart_upload() -> None
```

##### `reset_expiration` <a name="reset_expiration" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetExpiration"></a>

```python
def reset_expiration() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.abortIncompleteMultipartUpload">abort_incomplete_multipart_upload</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference">S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference">S3ControlBucketLifecycleConfigurationRuleFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.abortIncompleteMultipartUploadInput">abort_incomplete_multipart_upload_input</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.expirationInput">expiration_input</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration">S3ControlBucketLifecycleConfigurationRuleExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.filterInput">filter_input</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter">S3ControlBucketLifecycleConfigurationRuleFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule">S3ControlBucketLifecycleConfigurationRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `abort_incomplete_multipart_upload`<sup>Required</sup> <a name="abort_incomplete_multipart_upload" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.abortIncompleteMultipartUpload"></a>

```python
abort_incomplete_multipart_upload: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference</a>

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.expiration"></a>

```python
expiration: S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference">S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.filter"></a>

```python
filter: S3ControlBucketLifecycleConfigurationRuleFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference">S3ControlBucketLifecycleConfigurationRuleFilterOutputReference</a>

---

##### `abort_incomplete_multipart_upload_input`<sup>Optional</sup> <a name="abort_incomplete_multipart_upload_input" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.abortIncompleteMultipartUploadInput"></a>

```python
abort_incomplete_multipart_upload_input: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a>

---

##### `expiration_input`<sup>Optional</sup> <a name="expiration_input" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.expirationInput"></a>

```python
expiration_input: S3ControlBucketLifecycleConfigurationRuleExpiration
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration">S3ControlBucketLifecycleConfigurationRuleExpiration</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.filterInput"></a>

```python
filter_input: S3ControlBucketLifecycleConfigurationRuleFilter
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter">S3ControlBucketLifecycleConfigurationRuleFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, S3ControlBucketLifecycleConfigurationRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule">S3ControlBucketLifecycleConfigurationRule</a>]

---



