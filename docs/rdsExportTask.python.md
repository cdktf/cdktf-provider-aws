# `rdsExportTask` Submodule <a name="`rdsExportTask` Submodule" id="@cdktf/provider-aws.rdsExportTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsExportTask <a name="RdsExportTask" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task aws_rds_export_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_export_task

rdsExportTask.RdsExportTask(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  export_task_identifier: str,
  iam_role_arn: str,
  kms_key_id: str,
  s3_bucket_name: str,
  source_arn: str,
  export_only: typing.List[str] = None,
  s3_prefix: str = None,
  timeouts: RdsExportTaskTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.exportTaskIdentifier">export_task_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#export_task_identifier RdsExportTask#export_task_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#iam_role_arn RdsExportTask#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#kms_key_id RdsExportTask#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#s3_bucket_name RdsExportTask#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.sourceArn">source_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#source_arn RdsExportTask#source_arn}. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.exportOnly">export_only</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#export_only RdsExportTask#export_only}. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.s3Prefix">s3_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#s3_prefix RdsExportTask#s3_prefix}. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeouts">RdsExportTaskTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `export_task_identifier`<sup>Required</sup> <a name="export_task_identifier" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.exportTaskIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#export_task_identifier RdsExportTask#export_task_identifier}.

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.iamRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#iam_role_arn RdsExportTask#iam_role_arn}.

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#kms_key_id RdsExportTask#kms_key_id}.

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.s3BucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#s3_bucket_name RdsExportTask#s3_bucket_name}.

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.sourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#source_arn RdsExportTask#source_arn}.

---

##### `export_only`<sup>Optional</sup> <a name="export_only" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.exportOnly"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#export_only RdsExportTask#export_only}.

---

##### `s3_prefix`<sup>Optional</sup> <a name="s3_prefix" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.s3Prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#s3_prefix RdsExportTask#s3_prefix}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeouts">RdsExportTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#timeouts RdsExportTask#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.resetExportOnly">reset_export_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.resetS3Prefix">reset_s3_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#create RdsExportTask#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#delete RdsExportTask#delete}.

---

##### `reset_export_only` <a name="reset_export_only" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.resetExportOnly"></a>

```python
def reset_export_only() -> None
```

##### `reset_s3_prefix` <a name="reset_s3_prefix" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.resetS3Prefix"></a>

```python
def reset_s3_prefix() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import rds_export_task

rdsExportTask.RdsExportTask.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import rds_export_task

rdsExportTask.RdsExportTask.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import rds_export_task

rdsExportTask.RdsExportTask.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.failureCause">failure_cause</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.percentProgress">percent_progress</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.snapshotTime">snapshot_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.taskEndTime">task_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.taskStartTime">task_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference">RdsExportTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.warningMessage">warning_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.exportOnlyInput">export_only_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.exportTaskIdentifierInput">export_task_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.s3BucketNameInput">s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.s3PrefixInput">s3_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.sourceArnInput">source_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeouts">RdsExportTaskTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.exportOnly">export_only</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.exportTaskIdentifier">export_task_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.s3Prefix">s3_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.sourceArn">source_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `failure_cause`<sup>Required</sup> <a name="failure_cause" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.failureCause"></a>

```python
failure_cause: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `percent_progress`<sup>Required</sup> <a name="percent_progress" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.percentProgress"></a>

```python
percent_progress: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_time`<sup>Required</sup> <a name="snapshot_time" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.snapshotTime"></a>

```python
snapshot_time: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `task_end_time`<sup>Required</sup> <a name="task_end_time" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.taskEndTime"></a>

```python
task_end_time: str
```

- *Type:* str

---

##### `task_start_time`<sup>Required</sup> <a name="task_start_time" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.taskStartTime"></a>

```python
task_start_time: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.timeouts"></a>

```python
timeouts: RdsExportTaskTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference">RdsExportTaskTimeoutsOutputReference</a>

---

##### `warning_message`<sup>Required</sup> <a name="warning_message" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.warningMessage"></a>

```python
warning_message: str
```

- *Type:* str

---

##### `export_only_input`<sup>Optional</sup> <a name="export_only_input" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.exportOnlyInput"></a>

```python
export_only_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `export_task_identifier_input`<sup>Optional</sup> <a name="export_task_identifier_input" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.exportTaskIdentifierInput"></a>

```python
export_task_identifier_input: str
```

- *Type:* str

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `s3_bucket_name_input`<sup>Optional</sup> <a name="s3_bucket_name_input" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.s3BucketNameInput"></a>

```python
s3_bucket_name_input: str
```

- *Type:* str

---

##### `s3_prefix_input`<sup>Optional</sup> <a name="s3_prefix_input" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.s3PrefixInput"></a>

```python
s3_prefix_input: str
```

- *Type:* str

---

##### `source_arn_input`<sup>Optional</sup> <a name="source_arn_input" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.sourceArnInput"></a>

```python
source_arn_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[RdsExportTaskTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeouts">RdsExportTaskTimeouts</a>, cdktf.IResolvable]

---

##### `export_only`<sup>Required</sup> <a name="export_only" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.exportOnly"></a>

```python
export_only: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `export_task_identifier`<sup>Required</sup> <a name="export_task_identifier" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.exportTaskIdentifier"></a>

```python
export_task_identifier: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_prefix`<sup>Required</sup> <a name="s3_prefix" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.s3Prefix"></a>

```python
s3_prefix: str
```

- *Type:* str

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.rdsExportTask.RdsExportTask.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RdsExportTaskConfig <a name="RdsExportTaskConfig" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_export_task

rdsExportTask.RdsExportTaskConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  export_task_identifier: str,
  iam_role_arn: str,
  kms_key_id: str,
  s3_bucket_name: str,
  source_arn: str,
  export_only: typing.List[str] = None,
  s3_prefix: str = None,
  timeouts: RdsExportTaskTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.exportTaskIdentifier">export_task_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#export_task_identifier RdsExportTask#export_task_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#iam_role_arn RdsExportTask#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#kms_key_id RdsExportTask#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#s3_bucket_name RdsExportTask#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.sourceArn">source_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#source_arn RdsExportTask#source_arn}. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.exportOnly">export_only</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#export_only RdsExportTask#export_only}. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.s3Prefix">s3_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#s3_prefix RdsExportTask#s3_prefix}. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeouts">RdsExportTaskTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `export_task_identifier`<sup>Required</sup> <a name="export_task_identifier" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.exportTaskIdentifier"></a>

```python
export_task_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#export_task_identifier RdsExportTask#export_task_identifier}.

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#iam_role_arn RdsExportTask#iam_role_arn}.

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#kms_key_id RdsExportTask#kms_key_id}.

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#s3_bucket_name RdsExportTask#s3_bucket_name}.

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#source_arn RdsExportTask#source_arn}.

---

##### `export_only`<sup>Optional</sup> <a name="export_only" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.exportOnly"></a>

```python
export_only: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#export_only RdsExportTask#export_only}.

---

##### `s3_prefix`<sup>Optional</sup> <a name="s3_prefix" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.s3Prefix"></a>

```python
s3_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#s3_prefix RdsExportTask#s3_prefix}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskConfig.property.timeouts"></a>

```python
timeouts: RdsExportTaskTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeouts">RdsExportTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#timeouts RdsExportTask#timeouts}

---

### RdsExportTaskTimeouts <a name="RdsExportTaskTimeouts" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_export_task

rdsExportTask.RdsExportTaskTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#create RdsExportTask#create}. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#delete RdsExportTask#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#create RdsExportTask#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_export_task#delete RdsExportTask#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsExportTaskTimeoutsOutputReference <a name="RdsExportTaskTimeoutsOutputReference" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_export_task

rdsExportTask.RdsExportTaskTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeouts">RdsExportTaskTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[RdsExportTaskTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.rdsExportTask.RdsExportTaskTimeouts">RdsExportTaskTimeouts</a>, cdktf.IResolvable]

---



