# `rekognitionStreamProcessor` Submodule <a name="`rekognitionStreamProcessor` Submodule" id="@cdktf/provider-aws.rekognitionStreamProcessor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RekognitionStreamProcessor <a name="RekognitionStreamProcessor" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor aws_rekognition_stream_processor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessor(
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
  role_arn: str,
  data_sharing_preference: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorDataSharingPreference]] = None,
  input: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorInput]] = None,
  kms_key_id: str = None,
  notification_channel: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorNotificationChannel]] = None,
  output: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorOutput]] = None,
  regions_of_interest: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorRegionsOfInterest]] = None,
  settings: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorSettings]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: RekognitionStreamProcessorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.name">name</a></code> | <code>str</code> | An identifier you assign to the stream processor. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.dataSharingPreference">data_sharing_preference</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>]]</code> | data_sharing_preference block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.input">input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>]]</code> | input block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The identifier for your AWS Key Management Service key (AWS KMS key). |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.notificationChannel">notification_channel</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>]]</code> | notification_channel block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.output">output</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>]]</code> | output block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.regionsOfInterest">regions_of_interest</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>]]</code> | regions_of_interest block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.settings">settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>]]</code> | settings block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#tags RekognitionStreamProcessor#tags}. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.name"></a>

- *Type:* str

An identifier you assign to the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#name RekognitionStreamProcessor#name}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#role_arn RekognitionStreamProcessor#role_arn}

---

##### `data_sharing_preference`<sup>Optional</sup> <a name="data_sharing_preference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.dataSharingPreference"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>]]

data_sharing_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#data_sharing_preference RekognitionStreamProcessor#data_sharing_preference}

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.input"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>]]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#input RekognitionStreamProcessor#input}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The identifier for your AWS Key Management Service key (AWS KMS key).

You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#kms_key_id RekognitionStreamProcessor#kms_key_id}

---

##### `notification_channel`<sup>Optional</sup> <a name="notification_channel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.notificationChannel"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>]]

notification_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#notification_channel RekognitionStreamProcessor#notification_channel}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.output"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>]]

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#output RekognitionStreamProcessor#output}

---

##### `regions_of_interest`<sup>Optional</sup> <a name="regions_of_interest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.regionsOfInterest"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>]]

regions_of_interest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#regions_of_interest RekognitionStreamProcessor#regions_of_interest}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.settings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>]]

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#settings RekognitionStreamProcessor#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#tags RekognitionStreamProcessor#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#timeouts RekognitionStreamProcessor#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putDataSharingPreference">put_data_sharing_preference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putInput">put_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putNotificationChannel">put_notification_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putOutput">put_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putRegionsOfInterest">put_regions_of_interest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetDataSharingPreference">reset_data_sharing_preference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetInput">reset_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetNotificationChannel">reset_notification_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetOutput">reset_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetRegionsOfInterest">reset_regions_of_interest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetSettings">reset_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_sharing_preference` <a name="put_data_sharing_preference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putDataSharingPreference"></a>

```python
def put_data_sharing_preference(
  value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorDataSharingPreference]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putDataSharingPreference.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>]]

---

##### `put_input` <a name="put_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putInput"></a>

```python
def put_input(
  value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorInput]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putInput.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>]]

---

##### `put_notification_channel` <a name="put_notification_channel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putNotificationChannel"></a>

```python
def put_notification_channel(
  value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorNotificationChannel]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putNotificationChannel.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>]]

---

##### `put_output` <a name="put_output" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putOutput"></a>

```python
def put_output(
  value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorOutput]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putOutput.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>]]

---

##### `put_regions_of_interest` <a name="put_regions_of_interest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putRegionsOfInterest"></a>

```python
def put_regions_of_interest(
  value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorRegionsOfInterest]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putRegionsOfInterest.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>]]

---

##### `put_settings` <a name="put_settings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putSettings"></a>

```python
def put_settings(
  value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorSettings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putSettings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#create RekognitionStreamProcessor#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#delete RekognitionStreamProcessor#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#update RekognitionStreamProcessor#update}

---

##### `reset_data_sharing_preference` <a name="reset_data_sharing_preference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetDataSharingPreference"></a>

```python
def reset_data_sharing_preference() -> None
```

##### `reset_input` <a name="reset_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetInput"></a>

```python
def reset_input() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_notification_channel` <a name="reset_notification_channel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetNotificationChannel"></a>

```python
def reset_notification_channel() -> None
```

##### `reset_output` <a name="reset_output" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetOutput"></a>

```python
def reset_output() -> None
```

##### `reset_regions_of_interest` <a name="reset_regions_of_interest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetRegionsOfInterest"></a>

```python
def reset_regions_of_interest() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetSettings"></a>

```python
def reset_settings() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RekognitionStreamProcessor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RekognitionStreamProcessor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RekognitionStreamProcessor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RekognitionStreamProcessor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RekognitionStreamProcessor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dataSharingPreference">data_sharing_preference</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList">RekognitionStreamProcessorDataSharingPreferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.input">input</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList">RekognitionStreamProcessorInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.notificationChannel">notification_channel</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList">RekognitionStreamProcessorNotificationChannelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.output">output</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList">RekognitionStreamProcessorOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.regionsOfInterest">regions_of_interest</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList">RekognitionStreamProcessorRegionsOfInterestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList">RekognitionStreamProcessorSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.streamProcessorArn">stream_processor_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference">RekognitionStreamProcessorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dataSharingPreferenceInput">data_sharing_preference_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.inputInput">input_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.notificationChannelInput">notification_channel_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.outputInput">output_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.regionsOfInterestInput">regions_of_interest_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.settingsInput">settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_sharing_preference`<sup>Required</sup> <a name="data_sharing_preference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dataSharingPreference"></a>

```python
data_sharing_preference: RekognitionStreamProcessorDataSharingPreferenceList
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList">RekognitionStreamProcessorDataSharingPreferenceList</a>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.input"></a>

```python
input: RekognitionStreamProcessorInputList
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList">RekognitionStreamProcessorInputList</a>

---

##### `notification_channel`<sup>Required</sup> <a name="notification_channel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.notificationChannel"></a>

```python
notification_channel: RekognitionStreamProcessorNotificationChannelList
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList">RekognitionStreamProcessorNotificationChannelList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.output"></a>

```python
output: RekognitionStreamProcessorOutputList
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList">RekognitionStreamProcessorOutputList</a>

---

##### `regions_of_interest`<sup>Required</sup> <a name="regions_of_interest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.regionsOfInterest"></a>

```python
regions_of_interest: RekognitionStreamProcessorRegionsOfInterestList
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList">RekognitionStreamProcessorRegionsOfInterestList</a>

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.settings"></a>

```python
settings: RekognitionStreamProcessorSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList">RekognitionStreamProcessorSettingsList</a>

---

##### `stream_processor_arn`<sup>Required</sup> <a name="stream_processor_arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.streamProcessorArn"></a>

```python
stream_processor_arn: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.timeouts"></a>

```python
timeouts: RekognitionStreamProcessorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference">RekognitionStreamProcessorTimeoutsOutputReference</a>

---

##### `data_sharing_preference_input`<sup>Optional</sup> <a name="data_sharing_preference_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dataSharingPreferenceInput"></a>

```python
data_sharing_preference_input: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorDataSharingPreference]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>]]

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.inputInput"></a>

```python
input_input: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>]]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_channel_input`<sup>Optional</sup> <a name="notification_channel_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.notificationChannelInput"></a>

```python
notification_channel_input: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorNotificationChannel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>]]

---

##### `output_input`<sup>Optional</sup> <a name="output_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.outputInput"></a>

```python
output_input: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorOutput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>]]

---

##### `regions_of_interest_input`<sup>Optional</sup> <a name="regions_of_interest_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.regionsOfInterestInput"></a>

```python
regions_of_interest_input: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorRegionsOfInterest]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>]]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.settingsInput"></a>

```python
settings_input: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, RekognitionStreamProcessorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a>]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RekognitionStreamProcessorConfig <a name="RekognitionStreamProcessorConfig" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  role_arn: str,
  data_sharing_preference: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorDataSharingPreference]] = None,
  input: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorInput]] = None,
  kms_key_id: str = None,
  notification_channel: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorNotificationChannel]] = None,
  output: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorOutput]] = None,
  regions_of_interest: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorRegionsOfInterest]] = None,
  settings: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorSettings]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: RekognitionStreamProcessorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.name">name</a></code> | <code>str</code> | An identifier you assign to the stream processor. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.dataSharingPreference">data_sharing_preference</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>]]</code> | data_sharing_preference block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.input">input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>]]</code> | input block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The identifier for your AWS Key Management Service key (AWS KMS key). |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.notificationChannel">notification_channel</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>]]</code> | notification_channel block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.output">output</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>]]</code> | output block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.regionsOfInterest">regions_of_interest</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>]]</code> | regions_of_interest block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.settings">settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>]]</code> | settings block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#tags RekognitionStreamProcessor#tags}. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

An identifier you assign to the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#name RekognitionStreamProcessor#name}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#role_arn RekognitionStreamProcessor#role_arn}

---

##### `data_sharing_preference`<sup>Optional</sup> <a name="data_sharing_preference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.dataSharingPreference"></a>

```python
data_sharing_preference: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorDataSharingPreference]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>]]

data_sharing_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#data_sharing_preference RekognitionStreamProcessor#data_sharing_preference}

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.input"></a>

```python
input: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>]]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#input RekognitionStreamProcessor#input}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The identifier for your AWS Key Management Service key (AWS KMS key).

You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#kms_key_id RekognitionStreamProcessor#kms_key_id}

---

##### `notification_channel`<sup>Optional</sup> <a name="notification_channel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.notificationChannel"></a>

```python
notification_channel: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorNotificationChannel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>]]

notification_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#notification_channel RekognitionStreamProcessor#notification_channel}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.output"></a>

```python
output: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorOutput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>]]

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#output RekognitionStreamProcessor#output}

---

##### `regions_of_interest`<sup>Optional</sup> <a name="regions_of_interest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.regionsOfInterest"></a>

```python
regions_of_interest: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorRegionsOfInterest]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>]]

regions_of_interest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#regions_of_interest RekognitionStreamProcessor#regions_of_interest}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.settings"></a>

```python
settings: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>]]

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#settings RekognitionStreamProcessor#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#tags RekognitionStreamProcessor#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.timeouts"></a>

```python
timeouts: RekognitionStreamProcessorTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#timeouts RekognitionStreamProcessor#timeouts}

---

### RekognitionStreamProcessorDataSharingPreference <a name="RekognitionStreamProcessorDataSharingPreference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference(
  opt_in: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference.property.optIn">opt_in</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do you want to share data with Rekognition to improve model performance. |

---

##### `opt_in`<sup>Required</sup> <a name="opt_in" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference.property.optIn"></a>

```python
opt_in: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do you want to share data with Rekognition to improve model performance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#opt_in RekognitionStreamProcessor#opt_in}

---

### RekognitionStreamProcessorInput <a name="RekognitionStreamProcessorInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorInput(
  kinesis_video_stream: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorInputKinesisVideoStream]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput.property.kinesisVideoStream">kinesis_video_stream</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>]]</code> | kinesis_video_stream block. |

---

##### `kinesis_video_stream`<sup>Optional</sup> <a name="kinesis_video_stream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput.property.kinesisVideoStream"></a>

```python
kinesis_video_stream: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorInputKinesisVideoStream]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>]]

kinesis_video_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#kinesis_video_stream RekognitionStreamProcessor#kinesis_video_stream}

---

### RekognitionStreamProcessorInputKinesisVideoStream <a name="RekognitionStreamProcessorInputKinesisVideoStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream(
  arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream.property.arn">arn</a></code> | <code>str</code> | ARN of the Kinesis video stream stream that streams the source video. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream.property.arn"></a>

```python
arn: str
```

- *Type:* str

ARN of the Kinesis video stream stream that streams the source video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#arn RekognitionStreamProcessor#arn}

---

### RekognitionStreamProcessorNotificationChannel <a name="RekognitionStreamProcessorNotificationChannel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel(
  sns_topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | The Amazon Resource Number (ARN) of the Amazon Amazon Simple Notification Service topic to which Amazon Rekognition posts the completion status. |

---

##### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

The Amazon Resource Number (ARN) of the Amazon Amazon Simple Notification Service topic to which Amazon Rekognition posts the completion status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#sns_topic_arn RekognitionStreamProcessor#sns_topic_arn}

---

### RekognitionStreamProcessorOutput <a name="RekognitionStreamProcessorOutput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorOutput(
  kinesis_data_stream: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorOutputKinesisDataStream]] = None,
  s3_destination: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorOutputS3Destination]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput.property.kinesisDataStream">kinesis_data_stream</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>]]</code> | kinesis_data_stream block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput.property.s3Destination">s3_destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>]]</code> | s3_destination block. |

---

##### `kinesis_data_stream`<sup>Optional</sup> <a name="kinesis_data_stream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput.property.kinesisDataStream"></a>

```python
kinesis_data_stream: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorOutputKinesisDataStream]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>]]

kinesis_data_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#kinesis_data_stream RekognitionStreamProcessor#kinesis_data_stream}

---

##### `s3_destination`<sup>Optional</sup> <a name="s3_destination" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput.property.s3Destination"></a>

```python
s3_destination: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorOutputS3Destination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>]]

s3_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#s3_destination RekognitionStreamProcessor#s3_destination}

---

### RekognitionStreamProcessorOutputKinesisDataStream <a name="RekognitionStreamProcessorOutputKinesisDataStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream(
  arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream.property.arn">arn</a></code> | <code>str</code> | ARN of the output Amazon Kinesis Data Streams stream. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream.property.arn"></a>

```python
arn: str
```

- *Type:* str

ARN of the output Amazon Kinesis Data Streams stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#arn RekognitionStreamProcessor#arn}

---

### RekognitionStreamProcessorOutputS3Destination <a name="RekognitionStreamProcessorOutputS3Destination" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination(
  bucket: str = None,
  key_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination.property.bucket">bucket</a></code> | <code>str</code> | The name of the Amazon S3 bucket you want to associate with the streaming video project. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination.property.keyPrefix">key_prefix</a></code> | <code>str</code> | The prefix value of the location within the bucket that you want the information to be published to. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The name of the Amazon S3 bucket you want to associate with the streaming video project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#bucket RekognitionStreamProcessor#bucket}

---

##### `key_prefix`<sup>Optional</sup> <a name="key_prefix" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

The prefix value of the location within the bucket that you want the information to be published to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#key_prefix RekognitionStreamProcessor#key_prefix}

---

### RekognitionStreamProcessorRegionsOfInterest <a name="RekognitionStreamProcessorRegionsOfInterest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest(
  bounding_box: RekognitionStreamProcessorRegionsOfInterestBoundingBox = None,
  polygon: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorRegionsOfInterestPolygon]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest.property.boundingBox">bounding_box</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a></code> | bounding_box block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest.property.polygon">polygon</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>]]</code> | polygon block. |

---

##### `bounding_box`<sup>Optional</sup> <a name="bounding_box" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest.property.boundingBox"></a>

```python
bounding_box: RekognitionStreamProcessorRegionsOfInterestBoundingBox
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a>

bounding_box block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#bounding_box RekognitionStreamProcessor#bounding_box}

---

##### `polygon`<sup>Optional</sup> <a name="polygon" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest.property.polygon"></a>

```python
polygon: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorRegionsOfInterestPolygon]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>]]

polygon block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#polygon RekognitionStreamProcessor#polygon}

---

### RekognitionStreamProcessorRegionsOfInterestBoundingBox <a name="RekognitionStreamProcessorRegionsOfInterestBoundingBox" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox(
  height: typing.Union[int, float] = None,
  left: typing.Union[int, float] = None,
  top: typing.Union[int, float] = None,
  width: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.height">height</a></code> | <code>typing.Union[int, float]</code> | Height of the bounding box as a ratio of the overall image height. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.left">left</a></code> | <code>typing.Union[int, float]</code> | Left coordinate of the bounding box as a ratio of overall image width. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.top">top</a></code> | <code>typing.Union[int, float]</code> | Top coordinate of the bounding box as a ratio of overall image height. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.width">width</a></code> | <code>typing.Union[int, float]</code> | Width of the bounding box as a ratio of the overall image width. |

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.height"></a>

```python
height: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Height of the bounding box as a ratio of the overall image height.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#height RekognitionStreamProcessor#height}

---

##### `left`<sup>Optional</sup> <a name="left" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.left"></a>

```python
left: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Left coordinate of the bounding box as a ratio of overall image width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#left RekognitionStreamProcessor#left}

---

##### `top`<sup>Optional</sup> <a name="top" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.top"></a>

```python
top: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Top coordinate of the bounding box as a ratio of overall image height.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#top RekognitionStreamProcessor#top}

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.width"></a>

```python
width: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Width of the bounding box as a ratio of the overall image width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#width RekognitionStreamProcessor#width}

---

### RekognitionStreamProcessorRegionsOfInterestPolygon <a name="RekognitionStreamProcessorRegionsOfInterestPolygon" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon(
  x: typing.Union[int, float] = None,
  y: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon.property.x">x</a></code> | <code>typing.Union[int, float]</code> | The value of the X coordinate for a point on a Polygon. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon.property.y">y</a></code> | <code>typing.Union[int, float]</code> | The value of the Y coordinate for a point on a Polygon. |

---

##### `x`<sup>Optional</sup> <a name="x" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon.property.x"></a>

```python
x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value of the X coordinate for a point on a Polygon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#x RekognitionStreamProcessor#x}

---

##### `y`<sup>Optional</sup> <a name="y" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon.property.y"></a>

```python
y: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value of the Y coordinate for a point on a Polygon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#y RekognitionStreamProcessor#y}

---

### RekognitionStreamProcessorSettings <a name="RekognitionStreamProcessorSettings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorSettings(
  connected_home: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorSettingsConnectedHome]] = None,
  face_search: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorSettingsFaceSearch]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings.property.connectedHome">connected_home</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>]]</code> | connected_home block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings.property.faceSearch">face_search</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>]]</code> | face_search block. |

---

##### `connected_home`<sup>Optional</sup> <a name="connected_home" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings.property.connectedHome"></a>

```python
connected_home: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorSettingsConnectedHome]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>]]

connected_home block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#connected_home RekognitionStreamProcessor#connected_home}

---

##### `face_search`<sup>Optional</sup> <a name="face_search" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings.property.faceSearch"></a>

```python
face_search: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorSettingsFaceSearch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>]]

face_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#face_search RekognitionStreamProcessor#face_search}

---

### RekognitionStreamProcessorSettingsConnectedHome <a name="RekognitionStreamProcessorSettingsConnectedHome" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome(
  labels: typing.List[str] = None,
  min_confidence: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome.property.labels">labels</a></code> | <code>typing.List[str]</code> | Specifies what you want to detect in the video, such as people, packages, or pets. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome.property.minConfidence">min_confidence</a></code> | <code>typing.Union[int, float]</code> | The minimum confidence required to label an object in the video. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

Specifies what you want to detect in the video, such as people, packages, or pets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#labels RekognitionStreamProcessor#labels}

---

##### `min_confidence`<sup>Optional</sup> <a name="min_confidence" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome.property.minConfidence"></a>

```python
min_confidence: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum confidence required to label an object in the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#min_confidence RekognitionStreamProcessor#min_confidence}

---

### RekognitionStreamProcessorSettingsFaceSearch <a name="RekognitionStreamProcessorSettingsFaceSearch" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch(
  collection_id: str,
  face_match_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch.property.collectionId">collection_id</a></code> | <code>str</code> | The ID of a collection that contains faces that you want to search for. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch.property.faceMatchThreshold">face_match_threshold</a></code> | <code>typing.Union[int, float]</code> | Minimum face match confidence score that must be met to return a result for a recognized face. |

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

The ID of a collection that contains faces that you want to search for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#collection_id RekognitionStreamProcessor#collection_id}

---

##### `face_match_threshold`<sup>Optional</sup> <a name="face_match_threshold" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch.property.faceMatchThreshold"></a>

```python
face_match_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum face match confidence score that must be met to return a result for a recognized face.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#face_match_threshold RekognitionStreamProcessor#face_match_threshold}

---

### RekognitionStreamProcessorTimeouts <a name="RekognitionStreamProcessorTimeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#create RekognitionStreamProcessor#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#delete RekognitionStreamProcessor#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#update RekognitionStreamProcessor#update}

---

## Classes <a name="Classes" id="Classes"></a>

### RekognitionStreamProcessorDataSharingPreferenceList <a name="RekognitionStreamProcessorDataSharingPreferenceList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RekognitionStreamProcessorDataSharingPreferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorDataSharingPreference]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>]]

---


### RekognitionStreamProcessorDataSharingPreferenceOutputReference <a name="RekognitionStreamProcessorDataSharingPreferenceOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.optInInput">opt_in_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.optIn">opt_in</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `opt_in_input`<sup>Optional</sup> <a name="opt_in_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.optInInput"></a>

```python
opt_in_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `opt_in`<sup>Required</sup> <a name="opt_in" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.optIn"></a>

```python
opt_in: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RekognitionStreamProcessorDataSharingPreference]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>]

---


### RekognitionStreamProcessorInputKinesisVideoStreamList <a name="RekognitionStreamProcessorInputKinesisVideoStreamList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RekognitionStreamProcessorInputKinesisVideoStreamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorInputKinesisVideoStream]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>]]

---


### RekognitionStreamProcessorInputKinesisVideoStreamOutputReference <a name="RekognitionStreamProcessorInputKinesisVideoStreamOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RekognitionStreamProcessorInputKinesisVideoStream]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>]

---


### RekognitionStreamProcessorInputList <a name="RekognitionStreamProcessorInputList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorInputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RekognitionStreamProcessorInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>]]

---


### RekognitionStreamProcessorInputOutputReference <a name="RekognitionStreamProcessorInputOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.putKinesisVideoStream">put_kinesis_video_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.resetKinesisVideoStream">reset_kinesis_video_stream</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_kinesis_video_stream` <a name="put_kinesis_video_stream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.putKinesisVideoStream"></a>

```python
def put_kinesis_video_stream(
  value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorInputKinesisVideoStream]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.putKinesisVideoStream.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>]]

---

##### `reset_kinesis_video_stream` <a name="reset_kinesis_video_stream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.resetKinesisVideoStream"></a>

```python
def reset_kinesis_video_stream() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.kinesisVideoStream">kinesis_video_stream</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList">RekognitionStreamProcessorInputKinesisVideoStreamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.kinesisVideoStreamInput">kinesis_video_stream_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kinesis_video_stream`<sup>Required</sup> <a name="kinesis_video_stream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.kinesisVideoStream"></a>

```python
kinesis_video_stream: RekognitionStreamProcessorInputKinesisVideoStreamList
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList">RekognitionStreamProcessorInputKinesisVideoStreamList</a>

---

##### `kinesis_video_stream_input`<sup>Optional</sup> <a name="kinesis_video_stream_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.kinesisVideoStreamInput"></a>

```python
kinesis_video_stream_input: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorInputKinesisVideoStream]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RekognitionStreamProcessorInput]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>]

---


### RekognitionStreamProcessorNotificationChannelList <a name="RekognitionStreamProcessorNotificationChannelList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RekognitionStreamProcessorNotificationChannelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorNotificationChannel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>]]

---


### RekognitionStreamProcessorNotificationChannelOutputReference <a name="RekognitionStreamProcessorNotificationChannelOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.resetSnsTopicArn">reset_sns_topic_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sns_topic_arn` <a name="reset_sns_topic_arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.resetSnsTopicArn"></a>

```python
def reset_sns_topic_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.snsTopicArnInput">sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sns_topic_arn_input`<sup>Optional</sup> <a name="sns_topic_arn_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.snsTopicArnInput"></a>

```python
sns_topic_arn_input: str
```

- *Type:* str

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RekognitionStreamProcessorNotificationChannel]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>]

---


### RekognitionStreamProcessorOutputKinesisDataStreamList <a name="RekognitionStreamProcessorOutputKinesisDataStreamList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RekognitionStreamProcessorOutputKinesisDataStreamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorOutputKinesisDataStream]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>]]

---


### RekognitionStreamProcessorOutputKinesisDataStreamOutputReference <a name="RekognitionStreamProcessorOutputKinesisDataStreamOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.resetArn">reset_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RekognitionStreamProcessorOutputKinesisDataStream]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>]

---


### RekognitionStreamProcessorOutputList <a name="RekognitionStreamProcessorOutputList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RekognitionStreamProcessorOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorOutput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>]]

---


### RekognitionStreamProcessorOutputOutputReference <a name="RekognitionStreamProcessorOutputOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putKinesisDataStream">put_kinesis_data_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putS3Destination">put_s3_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resetKinesisDataStream">reset_kinesis_data_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resetS3Destination">reset_s3_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_kinesis_data_stream` <a name="put_kinesis_data_stream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putKinesisDataStream"></a>

```python
def put_kinesis_data_stream(
  value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorOutputKinesisDataStream]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putKinesisDataStream.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>]]

---

##### `put_s3_destination` <a name="put_s3_destination" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putS3Destination"></a>

```python
def put_s3_destination(
  value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorOutputS3Destination]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putS3Destination.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>]]

---

##### `reset_kinesis_data_stream` <a name="reset_kinesis_data_stream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resetKinesisDataStream"></a>

```python
def reset_kinesis_data_stream() -> None
```

##### `reset_s3_destination` <a name="reset_s3_destination" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resetS3Destination"></a>

```python
def reset_s3_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.kinesisDataStream">kinesis_data_stream</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList">RekognitionStreamProcessorOutputKinesisDataStreamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.s3Destination">s3_destination</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList">RekognitionStreamProcessorOutputS3DestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.kinesisDataStreamInput">kinesis_data_stream_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.s3DestinationInput">s3_destination_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kinesis_data_stream`<sup>Required</sup> <a name="kinesis_data_stream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.kinesisDataStream"></a>

```python
kinesis_data_stream: RekognitionStreamProcessorOutputKinesisDataStreamList
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList">RekognitionStreamProcessorOutputKinesisDataStreamList</a>

---

##### `s3_destination`<sup>Required</sup> <a name="s3_destination" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.s3Destination"></a>

```python
s3_destination: RekognitionStreamProcessorOutputS3DestinationList
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList">RekognitionStreamProcessorOutputS3DestinationList</a>

---

##### `kinesis_data_stream_input`<sup>Optional</sup> <a name="kinesis_data_stream_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.kinesisDataStreamInput"></a>

```python
kinesis_data_stream_input: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorOutputKinesisDataStream]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>]]

---

##### `s3_destination_input`<sup>Optional</sup> <a name="s3_destination_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.s3DestinationInput"></a>

```python
s3_destination_input: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorOutputS3Destination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RekognitionStreamProcessorOutput]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>]

---


### RekognitionStreamProcessorOutputS3DestinationList <a name="RekognitionStreamProcessorOutputS3DestinationList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RekognitionStreamProcessorOutputS3DestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorOutputS3Destination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>]]

---


### RekognitionStreamProcessorOutputS3DestinationOutputReference <a name="RekognitionStreamProcessorOutputS3DestinationOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resetKeyPrefix">reset_key_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_key_prefix` <a name="reset_key_prefix" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resetKeyPrefix"></a>

```python
def reset_key_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.keyPrefixInput">key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.keyPrefix">key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_prefix_input`<sup>Optional</sup> <a name="key_prefix_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.keyPrefixInput"></a>

```python
key_prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key_prefix`<sup>Required</sup> <a name="key_prefix" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RekognitionStreamProcessorOutputS3Destination]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>]

---


### RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference <a name="RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetHeight">reset_height</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetLeft">reset_left</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetTop">reset_top</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetWidth">reset_width</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_height` <a name="reset_height" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetHeight"></a>

```python
def reset_height() -> None
```

##### `reset_left` <a name="reset_left" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetLeft"></a>

```python
def reset_left() -> None
```

##### `reset_top` <a name="reset_top" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetTop"></a>

```python
def reset_top() -> None
```

##### `reset_width` <a name="reset_width" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetWidth"></a>

```python
def reset_width() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.heightInput">height_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.leftInput">left_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.topInput">top_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.widthInput">width_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.height">height</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.left">left</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.top">top</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.width">width</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `height_input`<sup>Optional</sup> <a name="height_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.heightInput"></a>

```python
height_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `left_input`<sup>Optional</sup> <a name="left_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.leftInput"></a>

```python
left_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_input`<sup>Optional</sup> <a name="top_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.topInput"></a>

```python
top_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `width_input`<sup>Optional</sup> <a name="width_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.widthInput"></a>

```python
width_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.height"></a>

```python
height: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.left"></a>

```python
left: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top`<sup>Required</sup> <a name="top" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.top"></a>

```python
top: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.width"></a>

```python
width: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RekognitionStreamProcessorRegionsOfInterestBoundingBox]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a>]

---


### RekognitionStreamProcessorRegionsOfInterestList <a name="RekognitionStreamProcessorRegionsOfInterestList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RekognitionStreamProcessorRegionsOfInterestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorRegionsOfInterest]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>]]

---


### RekognitionStreamProcessorRegionsOfInterestOutputReference <a name="RekognitionStreamProcessorRegionsOfInterestOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putBoundingBox">put_bounding_box</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putPolygon">put_polygon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resetBoundingBox">reset_bounding_box</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resetPolygon">reset_polygon</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bounding_box` <a name="put_bounding_box" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putBoundingBox"></a>

```python
def put_bounding_box(
  height: typing.Union[int, float] = None,
  left: typing.Union[int, float] = None,
  top: typing.Union[int, float] = None,
  width: typing.Union[int, float] = None
) -> None
```

###### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putBoundingBox.parameter.height"></a>

- *Type:* typing.Union[int, float]

Height of the bounding box as a ratio of the overall image height.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#height RekognitionStreamProcessor#height}

---

###### `left`<sup>Optional</sup> <a name="left" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putBoundingBox.parameter.left"></a>

- *Type:* typing.Union[int, float]

Left coordinate of the bounding box as a ratio of overall image width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#left RekognitionStreamProcessor#left}

---

###### `top`<sup>Optional</sup> <a name="top" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putBoundingBox.parameter.top"></a>

- *Type:* typing.Union[int, float]

Top coordinate of the bounding box as a ratio of overall image height.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#top RekognitionStreamProcessor#top}

---

###### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putBoundingBox.parameter.width"></a>

- *Type:* typing.Union[int, float]

Width of the bounding box as a ratio of the overall image width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/rekognition_stream_processor#width RekognitionStreamProcessor#width}

---

##### `put_polygon` <a name="put_polygon" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putPolygon"></a>

```python
def put_polygon(
  value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorRegionsOfInterestPolygon]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putPolygon.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>]]

---

##### `reset_bounding_box` <a name="reset_bounding_box" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resetBoundingBox"></a>

```python
def reset_bounding_box() -> None
```

##### `reset_polygon` <a name="reset_polygon" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resetPolygon"></a>

```python
def reset_polygon() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.boundingBox">bounding_box</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference">RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.polygon">polygon</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList">RekognitionStreamProcessorRegionsOfInterestPolygonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.boundingBoxInput">bounding_box_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.polygonInput">polygon_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bounding_box`<sup>Required</sup> <a name="bounding_box" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.boundingBox"></a>

```python
bounding_box: RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference">RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference</a>

---

##### `polygon`<sup>Required</sup> <a name="polygon" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.polygon"></a>

```python
polygon: RekognitionStreamProcessorRegionsOfInterestPolygonList
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList">RekognitionStreamProcessorRegionsOfInterestPolygonList</a>

---

##### `bounding_box_input`<sup>Optional</sup> <a name="bounding_box_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.boundingBoxInput"></a>

```python
bounding_box_input: typing.Union[IResolvable, RekognitionStreamProcessorRegionsOfInterestBoundingBox]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a>]

---

##### `polygon_input`<sup>Optional</sup> <a name="polygon_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.polygonInput"></a>

```python
polygon_input: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorRegionsOfInterestPolygon]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RekognitionStreamProcessorRegionsOfInterest]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>]

---


### RekognitionStreamProcessorRegionsOfInterestPolygonList <a name="RekognitionStreamProcessorRegionsOfInterestPolygonList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorRegionsOfInterestPolygon]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>]]

---


### RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference <a name="RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resetX">reset_x</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resetY">reset_y</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_x` <a name="reset_x" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resetX"></a>

```python
def reset_x() -> None
```

##### `reset_y` <a name="reset_y" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resetY"></a>

```python
def reset_y() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.xInput">x_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.yInput">y_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.x">x</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.y">y</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x_input`<sup>Optional</sup> <a name="x_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.xInput"></a>

```python
x_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `y_input`<sup>Optional</sup> <a name="y_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.yInput"></a>

```python
y_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.x"></a>

```python
x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `y`<sup>Required</sup> <a name="y" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.y"></a>

```python
y: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RekognitionStreamProcessorRegionsOfInterestPolygon]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>]

---


### RekognitionStreamProcessorSettingsConnectedHomeList <a name="RekognitionStreamProcessorSettingsConnectedHomeList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RekognitionStreamProcessorSettingsConnectedHomeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorSettingsConnectedHome]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>]]

---


### RekognitionStreamProcessorSettingsConnectedHomeOutputReference <a name="RekognitionStreamProcessorSettingsConnectedHomeOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resetMinConfidence">reset_min_confidence</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_min_confidence` <a name="reset_min_confidence" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resetMinConfidence"></a>

```python
def reset_min_confidence() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.minConfidenceInput">min_confidence_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.minConfidence">min_confidence</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.labelsInput"></a>

```python
labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `min_confidence_input`<sup>Optional</sup> <a name="min_confidence_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.minConfidenceInput"></a>

```python
min_confidence_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `min_confidence`<sup>Required</sup> <a name="min_confidence" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.minConfidence"></a>

```python
min_confidence: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RekognitionStreamProcessorSettingsConnectedHome]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>]

---


### RekognitionStreamProcessorSettingsFaceSearchList <a name="RekognitionStreamProcessorSettingsFaceSearchList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RekognitionStreamProcessorSettingsFaceSearchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorSettingsFaceSearch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>]]

---


### RekognitionStreamProcessorSettingsFaceSearchOutputReference <a name="RekognitionStreamProcessorSettingsFaceSearchOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.resetFaceMatchThreshold">reset_face_match_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_face_match_threshold` <a name="reset_face_match_threshold" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.resetFaceMatchThreshold"></a>

```python
def reset_face_match_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.faceMatchThresholdInput">face_match_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.faceMatchThreshold">face_match_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `face_match_threshold_input`<sup>Optional</sup> <a name="face_match_threshold_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.faceMatchThresholdInput"></a>

```python
face_match_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `face_match_threshold`<sup>Required</sup> <a name="face_match_threshold" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.faceMatchThreshold"></a>

```python
face_match_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RekognitionStreamProcessorSettingsFaceSearch]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>]

---


### RekognitionStreamProcessorSettingsList <a name="RekognitionStreamProcessorSettingsList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RekognitionStreamProcessorSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>]]

---


### RekognitionStreamProcessorSettingsOutputReference <a name="RekognitionStreamProcessorSettingsOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putConnectedHome">put_connected_home</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putFaceSearch">put_face_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resetConnectedHome">reset_connected_home</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resetFaceSearch">reset_face_search</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_connected_home` <a name="put_connected_home" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putConnectedHome"></a>

```python
def put_connected_home(
  value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorSettingsConnectedHome]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putConnectedHome.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>]]

---

##### `put_face_search` <a name="put_face_search" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putFaceSearch"></a>

```python
def put_face_search(
  value: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorSettingsFaceSearch]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putFaceSearch.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>]]

---

##### `reset_connected_home` <a name="reset_connected_home" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resetConnectedHome"></a>

```python
def reset_connected_home() -> None
```

##### `reset_face_search` <a name="reset_face_search" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resetFaceSearch"></a>

```python
def reset_face_search() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.connectedHome">connected_home</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList">RekognitionStreamProcessorSettingsConnectedHomeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.faceSearch">face_search</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList">RekognitionStreamProcessorSettingsFaceSearchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.connectedHomeInput">connected_home_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.faceSearchInput">face_search_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connected_home`<sup>Required</sup> <a name="connected_home" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.connectedHome"></a>

```python
connected_home: RekognitionStreamProcessorSettingsConnectedHomeList
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList">RekognitionStreamProcessorSettingsConnectedHomeList</a>

---

##### `face_search`<sup>Required</sup> <a name="face_search" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.faceSearch"></a>

```python
face_search: RekognitionStreamProcessorSettingsFaceSearchList
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList">RekognitionStreamProcessorSettingsFaceSearchList</a>

---

##### `connected_home_input`<sup>Optional</sup> <a name="connected_home_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.connectedHomeInput"></a>

```python
connected_home_input: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorSettingsConnectedHome]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>]]

---

##### `face_search_input`<sup>Optional</sup> <a name="face_search_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.faceSearchInput"></a>

```python
face_search_input: typing.Union[IResolvable, typing.List[RekognitionStreamProcessorSettingsFaceSearch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RekognitionStreamProcessorSettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>]

---


### RekognitionStreamProcessorTimeoutsOutputReference <a name="RekognitionStreamProcessorTimeoutsOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rekognition_stream_processor

rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RekognitionStreamProcessorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a>]

---



