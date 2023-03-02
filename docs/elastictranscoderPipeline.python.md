# `elastictranscoderPipeline` Submodule <a name="`elastictranscoderPipeline` Submodule" id="@cdktf/provider-aws.elastictranscoderPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastictranscoderPipeline <a name="ElastictranscoderPipeline" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline aws_elastictranscoder_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_pipeline

elastictranscoderPipeline.ElastictranscoderPipeline(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  input_bucket: str,
  role: str,
  aws_kms_key_arn: str = None,
  content_config: ElastictranscoderPipelineContentConfig = None,
  content_config_permissions: typing.Union[IResolvable, typing.List[ElastictranscoderPipelineContentConfigPermissions]] = None,
  id: str = None,
  name: str = None,
  notifications: ElastictranscoderPipelineNotifications = None,
  output_bucket: str = None,
  thumbnail_config: ElastictranscoderPipelineThumbnailConfig = None,
  thumbnail_config_permissions: typing.Union[IResolvable, typing.List[ElastictranscoderPipelineThumbnailConfigPermissions]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.inputBucket">input_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#input_bucket ElastictranscoderPipeline#input_bucket}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#role ElastictranscoderPipeline#role}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.awsKmsKeyArn">aws_kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#aws_kms_key_arn ElastictranscoderPipeline#aws_kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.contentConfig">content_config</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a></code> | content_config block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.contentConfigPermissions">content_config_permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>]]</code> | content_config_permissions block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#id ElastictranscoderPipeline#id}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#name ElastictranscoderPipeline#name}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a></code> | notifications block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.outputBucket">output_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#output_bucket ElastictranscoderPipeline#output_bucket}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.thumbnailConfig">thumbnail_config</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a></code> | thumbnail_config block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.thumbnailConfigPermissions">thumbnail_config_permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>]]</code> | thumbnail_config_permissions block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `input_bucket`<sup>Required</sup> <a name="input_bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.inputBucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#input_bucket ElastictranscoderPipeline#input_bucket}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#role ElastictranscoderPipeline#role}.

---

##### `aws_kms_key_arn`<sup>Optional</sup> <a name="aws_kms_key_arn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.awsKmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#aws_kms_key_arn ElastictranscoderPipeline#aws_kms_key_arn}.

---

##### `content_config`<sup>Optional</sup> <a name="content_config" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.contentConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a>

content_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#content_config ElastictranscoderPipeline#content_config}

---

##### `content_config_permissions`<sup>Optional</sup> <a name="content_config_permissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.contentConfigPermissions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>]]

content_config_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#content_config_permissions ElastictranscoderPipeline#content_config_permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#id ElastictranscoderPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#name ElastictranscoderPipeline#name}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.notifications"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a>

notifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#notifications ElastictranscoderPipeline#notifications}

---

##### `output_bucket`<sup>Optional</sup> <a name="output_bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.outputBucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#output_bucket ElastictranscoderPipeline#output_bucket}.

---

##### `thumbnail_config`<sup>Optional</sup> <a name="thumbnail_config" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.thumbnailConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a>

thumbnail_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#thumbnail_config ElastictranscoderPipeline#thumbnail_config}

---

##### `thumbnail_config_permissions`<sup>Optional</sup> <a name="thumbnail_config_permissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.thumbnailConfigPermissions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>]]

thumbnail_config_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#thumbnail_config_permissions ElastictranscoderPipeline#thumbnail_config_permissions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfig">put_content_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfigPermissions">put_content_config_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putNotifications">put_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfig">put_thumbnail_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfigPermissions">put_thumbnail_config_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetAwsKmsKeyArn">reset_aws_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetContentConfig">reset_content_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetContentConfigPermissions">reset_content_config_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetNotifications">reset_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetOutputBucket">reset_output_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetThumbnailConfig">reset_thumbnail_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetThumbnailConfigPermissions">reset_thumbnail_config_permissions</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_content_config` <a name="put_content_config" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfig"></a>

```python
def put_content_config(
  bucket: str = None,
  storage_class: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfig.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}.

---

###### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfig.parameter.storageClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}.

---

##### `put_content_config_permissions` <a name="put_content_config_permissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfigPermissions"></a>

```python
def put_content_config_permissions(
  value: typing.Union[IResolvable, typing.List[ElastictranscoderPipelineContentConfigPermissions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfigPermissions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>]]

---

##### `put_notifications` <a name="put_notifications" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putNotifications"></a>

```python
def put_notifications(
  completed: str = None,
  error: str = None,
  progressing: str = None,
  warning: str = None
) -> None
```

###### `completed`<sup>Optional</sup> <a name="completed" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putNotifications.parameter.completed"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#completed ElastictranscoderPipeline#completed}.

---

###### `error`<sup>Optional</sup> <a name="error" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putNotifications.parameter.error"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#error ElastictranscoderPipeline#error}.

---

###### `progressing`<sup>Optional</sup> <a name="progressing" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putNotifications.parameter.progressing"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#progressing ElastictranscoderPipeline#progressing}.

---

###### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putNotifications.parameter.warning"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#warning ElastictranscoderPipeline#warning}.

---

##### `put_thumbnail_config` <a name="put_thumbnail_config" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfig"></a>

```python
def put_thumbnail_config(
  bucket: str = None,
  storage_class: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfig.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}.

---

###### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfig.parameter.storageClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}.

---

##### `put_thumbnail_config_permissions` <a name="put_thumbnail_config_permissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfigPermissions"></a>

```python
def put_thumbnail_config_permissions(
  value: typing.Union[IResolvable, typing.List[ElastictranscoderPipelineThumbnailConfigPermissions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfigPermissions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>]]

---

##### `reset_aws_kms_key_arn` <a name="reset_aws_kms_key_arn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetAwsKmsKeyArn"></a>

```python
def reset_aws_kms_key_arn() -> None
```

##### `reset_content_config` <a name="reset_content_config" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetContentConfig"></a>

```python
def reset_content_config() -> None
```

##### `reset_content_config_permissions` <a name="reset_content_config_permissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetContentConfigPermissions"></a>

```python
def reset_content_config_permissions() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_notifications` <a name="reset_notifications" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetNotifications"></a>

```python
def reset_notifications() -> None
```

##### `reset_output_bucket` <a name="reset_output_bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetOutputBucket"></a>

```python
def reset_output_bucket() -> None
```

##### `reset_thumbnail_config` <a name="reset_thumbnail_config" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetThumbnailConfig"></a>

```python
def reset_thumbnail_config() -> None
```

##### `reset_thumbnail_config_permissions` <a name="reset_thumbnail_config_permissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetThumbnailConfigPermissions"></a>

```python
def reset_thumbnail_config_permissions() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_pipeline

elastictranscoderPipeline.ElastictranscoderPipeline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_pipeline

elastictranscoderPipeline.ElastictranscoderPipeline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_pipeline

elastictranscoderPipeline.ElastictranscoderPipeline.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfig">content_config</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference">ElastictranscoderPipelineContentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigPermissions">content_config_permissions</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList">ElastictranscoderPipelineContentConfigPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference">ElastictranscoderPipelineNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfig">thumbnail_config</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference">ElastictranscoderPipelineThumbnailConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigPermissions">thumbnail_config_permissions</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList">ElastictranscoderPipelineThumbnailConfigPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.awsKmsKeyArnInput">aws_kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigInput">content_config_input</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigPermissionsInput">content_config_permissions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.inputBucketInput">input_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.notificationsInput">notifications_input</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.outputBucketInput">output_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigInput">thumbnail_config_input</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigPermissionsInput">thumbnail_config_permissions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.awsKmsKeyArn">aws_kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.inputBucket">input_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.outputBucket">output_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `content_config`<sup>Required</sup> <a name="content_config" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfig"></a>

```python
content_config: ElastictranscoderPipelineContentConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference">ElastictranscoderPipelineContentConfigOutputReference</a>

---

##### `content_config_permissions`<sup>Required</sup> <a name="content_config_permissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigPermissions"></a>

```python
content_config_permissions: ElastictranscoderPipelineContentConfigPermissionsList
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList">ElastictranscoderPipelineContentConfigPermissionsList</a>

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.notifications"></a>

```python
notifications: ElastictranscoderPipelineNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference">ElastictranscoderPipelineNotificationsOutputReference</a>

---

##### `thumbnail_config`<sup>Required</sup> <a name="thumbnail_config" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfig"></a>

```python
thumbnail_config: ElastictranscoderPipelineThumbnailConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference">ElastictranscoderPipelineThumbnailConfigOutputReference</a>

---

##### `thumbnail_config_permissions`<sup>Required</sup> <a name="thumbnail_config_permissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigPermissions"></a>

```python
thumbnail_config_permissions: ElastictranscoderPipelineThumbnailConfigPermissionsList
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList">ElastictranscoderPipelineThumbnailConfigPermissionsList</a>

---

##### `aws_kms_key_arn_input`<sup>Optional</sup> <a name="aws_kms_key_arn_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.awsKmsKeyArnInput"></a>

```python
aws_kms_key_arn_input: str
```

- *Type:* str

---

##### `content_config_input`<sup>Optional</sup> <a name="content_config_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigInput"></a>

```python
content_config_input: ElastictranscoderPipelineContentConfig
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a>

---

##### `content_config_permissions_input`<sup>Optional</sup> <a name="content_config_permissions_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigPermissionsInput"></a>

```python
content_config_permissions_input: typing.Union[IResolvable, typing.List[ElastictranscoderPipelineContentConfigPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_bucket_input`<sup>Optional</sup> <a name="input_bucket_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.inputBucketInput"></a>

```python
input_bucket_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notifications_input`<sup>Optional</sup> <a name="notifications_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.notificationsInput"></a>

```python
notifications_input: ElastictranscoderPipelineNotifications
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a>

---

##### `output_bucket_input`<sup>Optional</sup> <a name="output_bucket_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.outputBucketInput"></a>

```python
output_bucket_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `thumbnail_config_input`<sup>Optional</sup> <a name="thumbnail_config_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigInput"></a>

```python
thumbnail_config_input: ElastictranscoderPipelineThumbnailConfig
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a>

---

##### `thumbnail_config_permissions_input`<sup>Optional</sup> <a name="thumbnail_config_permissions_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigPermissionsInput"></a>

```python
thumbnail_config_permissions_input: typing.Union[IResolvable, typing.List[ElastictranscoderPipelineThumbnailConfigPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>]]

---

##### `aws_kms_key_arn`<sup>Required</sup> <a name="aws_kms_key_arn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.awsKmsKeyArn"></a>

```python
aws_kms_key_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_bucket`<sup>Required</sup> <a name="input_bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.inputBucket"></a>

```python
input_bucket: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_bucket`<sup>Required</sup> <a name="output_bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.outputBucket"></a>

```python
output_bucket: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElastictranscoderPipelineConfig <a name="ElastictranscoderPipelineConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_pipeline

elastictranscoderPipeline.ElastictranscoderPipelineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  input_bucket: str,
  role: str,
  aws_kms_key_arn: str = None,
  content_config: ElastictranscoderPipelineContentConfig = None,
  content_config_permissions: typing.Union[IResolvable, typing.List[ElastictranscoderPipelineContentConfigPermissions]] = None,
  id: str = None,
  name: str = None,
  notifications: ElastictranscoderPipelineNotifications = None,
  output_bucket: str = None,
  thumbnail_config: ElastictranscoderPipelineThumbnailConfig = None,
  thumbnail_config_permissions: typing.Union[IResolvable, typing.List[ElastictranscoderPipelineThumbnailConfigPermissions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.inputBucket">input_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#input_bucket ElastictranscoderPipeline#input_bucket}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#role ElastictranscoderPipeline#role}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.awsKmsKeyArn">aws_kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#aws_kms_key_arn ElastictranscoderPipeline#aws_kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.contentConfig">content_config</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a></code> | content_config block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.contentConfigPermissions">content_config_permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>]]</code> | content_config_permissions block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#id ElastictranscoderPipeline#id}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#name ElastictranscoderPipeline#name}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a></code> | notifications block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.outputBucket">output_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#output_bucket ElastictranscoderPipeline#output_bucket}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.thumbnailConfig">thumbnail_config</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a></code> | thumbnail_config block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.thumbnailConfigPermissions">thumbnail_config_permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>]]</code> | thumbnail_config_permissions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `input_bucket`<sup>Required</sup> <a name="input_bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.inputBucket"></a>

```python
input_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#input_bucket ElastictranscoderPipeline#input_bucket}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#role ElastictranscoderPipeline#role}.

---

##### `aws_kms_key_arn`<sup>Optional</sup> <a name="aws_kms_key_arn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.awsKmsKeyArn"></a>

```python
aws_kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#aws_kms_key_arn ElastictranscoderPipeline#aws_kms_key_arn}.

---

##### `content_config`<sup>Optional</sup> <a name="content_config" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.contentConfig"></a>

```python
content_config: ElastictranscoderPipelineContentConfig
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a>

content_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#content_config ElastictranscoderPipeline#content_config}

---

##### `content_config_permissions`<sup>Optional</sup> <a name="content_config_permissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.contentConfigPermissions"></a>

```python
content_config_permissions: typing.Union[IResolvable, typing.List[ElastictranscoderPipelineContentConfigPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>]]

content_config_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#content_config_permissions ElastictranscoderPipeline#content_config_permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#id ElastictranscoderPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#name ElastictranscoderPipeline#name}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.notifications"></a>

```python
notifications: ElastictranscoderPipelineNotifications
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a>

notifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#notifications ElastictranscoderPipeline#notifications}

---

##### `output_bucket`<sup>Optional</sup> <a name="output_bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.outputBucket"></a>

```python
output_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#output_bucket ElastictranscoderPipeline#output_bucket}.

---

##### `thumbnail_config`<sup>Optional</sup> <a name="thumbnail_config" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.thumbnailConfig"></a>

```python
thumbnail_config: ElastictranscoderPipelineThumbnailConfig
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a>

thumbnail_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#thumbnail_config ElastictranscoderPipeline#thumbnail_config}

---

##### `thumbnail_config_permissions`<sup>Optional</sup> <a name="thumbnail_config_permissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.thumbnailConfigPermissions"></a>

```python
thumbnail_config_permissions: typing.Union[IResolvable, typing.List[ElastictranscoderPipelineThumbnailConfigPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>]]

thumbnail_config_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#thumbnail_config_permissions ElastictranscoderPipeline#thumbnail_config_permissions}

---

### ElastictranscoderPipelineContentConfig <a name="ElastictranscoderPipelineContentConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_pipeline

elastictranscoderPipeline.ElastictranscoderPipelineContentConfig(
  bucket: str = None,
  storage_class: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig.property.storageClass">storage_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}.

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}.

---

### ElastictranscoderPipelineContentConfigPermissions <a name="ElastictranscoderPipelineContentConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_pipeline

elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions(
  access: typing.List[str] = None,
  grantee: str = None,
  grantee_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.access">access</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#access ElastictranscoderPipeline#access}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.grantee">grantee</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee ElastictranscoderPipeline#grantee}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.granteeType">grantee_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee_type ElastictranscoderPipeline#grantee_type}. |

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.access"></a>

```python
access: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#access ElastictranscoderPipeline#access}.

---

##### `grantee`<sup>Optional</sup> <a name="grantee" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.grantee"></a>

```python
grantee: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee ElastictranscoderPipeline#grantee}.

---

##### `grantee_type`<sup>Optional</sup> <a name="grantee_type" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.granteeType"></a>

```python
grantee_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee_type ElastictranscoderPipeline#grantee_type}.

---

### ElastictranscoderPipelineNotifications <a name="ElastictranscoderPipelineNotifications" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_pipeline

elastictranscoderPipeline.ElastictranscoderPipelineNotifications(
  completed: str = None,
  error: str = None,
  progressing: str = None,
  warning: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.completed">completed</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#completed ElastictranscoderPipeline#completed}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.error">error</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#error ElastictranscoderPipeline#error}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.progressing">progressing</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#progressing ElastictranscoderPipeline#progressing}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.warning">warning</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#warning ElastictranscoderPipeline#warning}. |

---

##### `completed`<sup>Optional</sup> <a name="completed" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.completed"></a>

```python
completed: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#completed ElastictranscoderPipeline#completed}.

---

##### `error`<sup>Optional</sup> <a name="error" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.error"></a>

```python
error: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#error ElastictranscoderPipeline#error}.

---

##### `progressing`<sup>Optional</sup> <a name="progressing" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.progressing"></a>

```python
progressing: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#progressing ElastictranscoderPipeline#progressing}.

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.warning"></a>

```python
warning: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#warning ElastictranscoderPipeline#warning}.

---

### ElastictranscoderPipelineThumbnailConfig <a name="ElastictranscoderPipelineThumbnailConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_pipeline

elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig(
  bucket: str = None,
  storage_class: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig.property.storageClass">storage_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}.

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}.

---

### ElastictranscoderPipelineThumbnailConfigPermissions <a name="ElastictranscoderPipelineThumbnailConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_pipeline

elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions(
  access: typing.List[str] = None,
  grantee: str = None,
  grantee_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.access">access</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#access ElastictranscoderPipeline#access}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.grantee">grantee</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee ElastictranscoderPipeline#grantee}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.granteeType">grantee_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee_type ElastictranscoderPipeline#grantee_type}. |

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.access"></a>

```python
access: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#access ElastictranscoderPipeline#access}.

---

##### `grantee`<sup>Optional</sup> <a name="grantee" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.grantee"></a>

```python
grantee: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee ElastictranscoderPipeline#grantee}.

---

##### `grantee_type`<sup>Optional</sup> <a name="grantee_type" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.granteeType"></a>

```python
grantee_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee_type ElastictranscoderPipeline#grantee_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastictranscoderPipelineContentConfigOutputReference <a name="ElastictranscoderPipelineContentConfigOutputReference" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_pipeline

elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resetStorageClass">reset_storage_class</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.internalValue"></a>

```python
internal_value: ElastictranscoderPipelineContentConfig
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a>

---


### ElastictranscoderPipelineContentConfigPermissionsList <a name="ElastictranscoderPipelineContentConfigPermissionsList" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_pipeline

elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastictranscoderPipelineContentConfigPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastictranscoderPipelineContentConfigPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>]]

---


### ElastictranscoderPipelineContentConfigPermissionsOutputReference <a name="ElastictranscoderPipelineContentConfigPermissionsOutputReference" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_pipeline

elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetAccess">reset_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetGrantee">reset_grantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetGranteeType">reset_grantee_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access` <a name="reset_access" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetAccess"></a>

```python
def reset_access() -> None
```

##### `reset_grantee` <a name="reset_grantee" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetGrantee"></a>

```python
def reset_grantee() -> None
```

##### `reset_grantee_type` <a name="reset_grantee_type" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetGranteeType"></a>

```python
def reset_grantee_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.accessInput">access_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeInput">grantee_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeTypeInput">grantee_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.access">access</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.grantee">grantee</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeType">grantee_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_input`<sup>Optional</sup> <a name="access_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.accessInput"></a>

```python
access_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `grantee_input`<sup>Optional</sup> <a name="grantee_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeInput"></a>

```python
grantee_input: str
```

- *Type:* str

---

##### `grantee_type_input`<sup>Optional</sup> <a name="grantee_type_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeTypeInput"></a>

```python
grantee_type_input: str
```

- *Type:* str

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.access"></a>

```python
access: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.grantee"></a>

```python
grantee: str
```

- *Type:* str

---

##### `grantee_type`<sup>Required</sup> <a name="grantee_type" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeType"></a>

```python
grantee_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ElastictranscoderPipelineContentConfigPermissions, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>, cdktf.IResolvable]

---


### ElastictranscoderPipelineNotificationsOutputReference <a name="ElastictranscoderPipelineNotificationsOutputReference" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_pipeline

elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetCompleted">reset_completed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetError">reset_error</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetProgressing">reset_progressing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetWarning">reset_warning</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_completed` <a name="reset_completed" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetCompleted"></a>

```python
def reset_completed() -> None
```

##### `reset_error` <a name="reset_error" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetError"></a>

```python
def reset_error() -> None
```

##### `reset_progressing` <a name="reset_progressing" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetProgressing"></a>

```python
def reset_progressing() -> None
```

##### `reset_warning` <a name="reset_warning" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetWarning"></a>

```python
def reset_warning() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.completedInput">completed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.errorInput">error_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.progressingInput">progressing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.warningInput">warning_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.completed">completed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.error">error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.progressing">progressing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.warning">warning</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `completed_input`<sup>Optional</sup> <a name="completed_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.completedInput"></a>

```python
completed_input: str
```

- *Type:* str

---

##### `error_input`<sup>Optional</sup> <a name="error_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.errorInput"></a>

```python
error_input: str
```

- *Type:* str

---

##### `progressing_input`<sup>Optional</sup> <a name="progressing_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.progressingInput"></a>

```python
progressing_input: str
```

- *Type:* str

---

##### `warning_input`<sup>Optional</sup> <a name="warning_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.warningInput"></a>

```python
warning_input: str
```

- *Type:* str

---

##### `completed`<sup>Required</sup> <a name="completed" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.completed"></a>

```python
completed: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.error"></a>

```python
error: str
```

- *Type:* str

---

##### `progressing`<sup>Required</sup> <a name="progressing" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.progressing"></a>

```python
progressing: str
```

- *Type:* str

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.warning"></a>

```python
warning: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: ElastictranscoderPipelineNotifications
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a>

---


### ElastictranscoderPipelineThumbnailConfigOutputReference <a name="ElastictranscoderPipelineThumbnailConfigOutputReference" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_pipeline

elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resetStorageClass">reset_storage_class</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.internalValue"></a>

```python
internal_value: ElastictranscoderPipelineThumbnailConfig
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a>

---


### ElastictranscoderPipelineThumbnailConfigPermissionsList <a name="ElastictranscoderPipelineThumbnailConfigPermissionsList" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_pipeline

elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastictranscoderPipelineThumbnailConfigPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>]]

---


### ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference <a name="ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_pipeline

elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetAccess">reset_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetGrantee">reset_grantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetGranteeType">reset_grantee_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access` <a name="reset_access" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetAccess"></a>

```python
def reset_access() -> None
```

##### `reset_grantee` <a name="reset_grantee" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetGrantee"></a>

```python
def reset_grantee() -> None
```

##### `reset_grantee_type` <a name="reset_grantee_type" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetGranteeType"></a>

```python
def reset_grantee_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.accessInput">access_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeInput">grantee_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeTypeInput">grantee_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.access">access</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.grantee">grantee</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeType">grantee_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_input`<sup>Optional</sup> <a name="access_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.accessInput"></a>

```python
access_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `grantee_input`<sup>Optional</sup> <a name="grantee_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeInput"></a>

```python
grantee_input: str
```

- *Type:* str

---

##### `grantee_type_input`<sup>Optional</sup> <a name="grantee_type_input" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeTypeInput"></a>

```python
grantee_type_input: str
```

- *Type:* str

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.access"></a>

```python
access: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.grantee"></a>

```python
grantee: str
```

- *Type:* str

---

##### `grantee_type`<sup>Required</sup> <a name="grantee_type" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeType"></a>

```python
grantee_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ElastictranscoderPipelineThumbnailConfigPermissions, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>, cdktf.IResolvable]

---



