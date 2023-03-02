# `ivschatRoom` Submodule <a name="`ivschatRoom` Submodule" id="@cdktf/provider-aws.ivschatRoom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvschatRoom <a name="IvschatRoom" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room aws_ivschat_room}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_room

ivschatRoom.IvschatRoom(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  logging_configuration_identifiers: typing.List[str] = None,
  maximum_message_length: typing.Union[int, float] = None,
  maximum_message_rate_per_second: typing.Union[int, float] = None,
  message_review_handler: IvschatRoomMessageReviewHandler = None,
  name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: IvschatRoomTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#id IvschatRoom#id}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.loggingConfigurationIdentifiers">logging_configuration_identifiers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#logging_configuration_identifiers IvschatRoom#logging_configuration_identifiers}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.maximumMessageLength">maximum_message_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_length IvschatRoom#maximum_message_length}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.maximumMessageRatePerSecond">maximum_message_rate_per_second</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_rate_per_second IvschatRoom#maximum_message_rate_per_second}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.messageReviewHandler">message_review_handler</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a></code> | message_review_handler block. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#name IvschatRoom#name}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags IvschatRoom#tags}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags_all IvschatRoom#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#id IvschatRoom#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_configuration_identifiers`<sup>Optional</sup> <a name="logging_configuration_identifiers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.loggingConfigurationIdentifiers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#logging_configuration_identifiers IvschatRoom#logging_configuration_identifiers}.

---

##### `maximum_message_length`<sup>Optional</sup> <a name="maximum_message_length" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.maximumMessageLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_length IvschatRoom#maximum_message_length}.

---

##### `maximum_message_rate_per_second`<sup>Optional</sup> <a name="maximum_message_rate_per_second" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.maximumMessageRatePerSecond"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_rate_per_second IvschatRoom#maximum_message_rate_per_second}.

---

##### `message_review_handler`<sup>Optional</sup> <a name="message_review_handler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.messageReviewHandler"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

message_review_handler block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#message_review_handler IvschatRoom#message_review_handler}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#name IvschatRoom#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags IvschatRoom#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags_all IvschatRoom#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#timeouts IvschatRoom#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.putMessageReviewHandler">put_message_review_handler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetLoggingConfigurationIdentifiers">reset_logging_configuration_identifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMaximumMessageLength">reset_maximum_message_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMaximumMessageRatePerSecond">reset_maximum_message_rate_per_second</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMessageReviewHandler">reset_message_review_handler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_message_review_handler` <a name="put_message_review_handler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.putMessageReviewHandler"></a>

```python
def put_message_review_handler(
  fallback_result: str = None,
  uri: str = None
) -> None
```

###### `fallback_result`<sup>Optional</sup> <a name="fallback_result" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.putMessageReviewHandler.parameter.fallbackResult"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#fallback_result IvschatRoom#fallback_result}.

---

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.putMessageReviewHandler.parameter.uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#uri IvschatRoom#uri}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#create IvschatRoom#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#delete IvschatRoom#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#update IvschatRoom#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logging_configuration_identifiers` <a name="reset_logging_configuration_identifiers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetLoggingConfigurationIdentifiers"></a>

```python
def reset_logging_configuration_identifiers() -> None
```

##### `reset_maximum_message_length` <a name="reset_maximum_message_length" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMaximumMessageLength"></a>

```python
def reset_maximum_message_length() -> None
```

##### `reset_maximum_message_rate_per_second` <a name="reset_maximum_message_rate_per_second" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMaximumMessageRatePerSecond"></a>

```python
def reset_maximum_message_rate_per_second() -> None
```

##### `reset_message_review_handler` <a name="reset_message_review_handler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMessageReviewHandler"></a>

```python
def reset_message_review_handler() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_room

ivschatRoom.IvschatRoom.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_room

ivschatRoom.IvschatRoom.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_room

ivschatRoom.IvschatRoom.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.messageReviewHandler">message_review_handler</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference">IvschatRoomMessageReviewHandlerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference">IvschatRoomTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.loggingConfigurationIdentifiersInput">logging_configuration_identifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageLengthInput">maximum_message_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageRatePerSecondInput">maximum_message_rate_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.messageReviewHandlerInput">message_review_handler_input</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.loggingConfigurationIdentifiers">logging_configuration_identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageLength">maximum_message_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageRatePerSecond">maximum_message_rate_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `message_review_handler`<sup>Required</sup> <a name="message_review_handler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.messageReviewHandler"></a>

```python
message_review_handler: IvschatRoomMessageReviewHandlerOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference">IvschatRoomMessageReviewHandlerOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.timeouts"></a>

```python
timeouts: IvschatRoomTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference">IvschatRoomTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `logging_configuration_identifiers_input`<sup>Optional</sup> <a name="logging_configuration_identifiers_input" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.loggingConfigurationIdentifiersInput"></a>

```python
logging_configuration_identifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `maximum_message_length_input`<sup>Optional</sup> <a name="maximum_message_length_input" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageLengthInput"></a>

```python
maximum_message_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_message_rate_per_second_input`<sup>Optional</sup> <a name="maximum_message_rate_per_second_input" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageRatePerSecondInput"></a>

```python
maximum_message_rate_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message_review_handler_input`<sup>Optional</sup> <a name="message_review_handler_input" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.messageReviewHandlerInput"></a>

```python
message_review_handler_input: IvschatRoomMessageReviewHandler
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IvschatRoomTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logging_configuration_identifiers`<sup>Required</sup> <a name="logging_configuration_identifiers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.loggingConfigurationIdentifiers"></a>

```python
logging_configuration_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `maximum_message_length`<sup>Required</sup> <a name="maximum_message_length" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageLength"></a>

```python
maximum_message_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_message_rate_per_second`<sup>Required</sup> <a name="maximum_message_rate_per_second" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageRatePerSecond"></a>

```python
maximum_message_rate_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IvschatRoomConfig <a name="IvschatRoomConfig" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_room

ivschatRoom.IvschatRoomConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  logging_configuration_identifiers: typing.List[str] = None,
  maximum_message_length: typing.Union[int, float] = None,
  maximum_message_rate_per_second: typing.Union[int, float] = None,
  message_review_handler: IvschatRoomMessageReviewHandler = None,
  name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: IvschatRoomTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#id IvschatRoom#id}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.loggingConfigurationIdentifiers">logging_configuration_identifiers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#logging_configuration_identifiers IvschatRoom#logging_configuration_identifiers}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.maximumMessageLength">maximum_message_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_length IvschatRoom#maximum_message_length}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.maximumMessageRatePerSecond">maximum_message_rate_per_second</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_rate_per_second IvschatRoom#maximum_message_rate_per_second}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.messageReviewHandler">message_review_handler</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a></code> | message_review_handler block. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#name IvschatRoom#name}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags IvschatRoom#tags}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags_all IvschatRoom#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#id IvschatRoom#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_configuration_identifiers`<sup>Optional</sup> <a name="logging_configuration_identifiers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.loggingConfigurationIdentifiers"></a>

```python
logging_configuration_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#logging_configuration_identifiers IvschatRoom#logging_configuration_identifiers}.

---

##### `maximum_message_length`<sup>Optional</sup> <a name="maximum_message_length" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.maximumMessageLength"></a>

```python
maximum_message_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_length IvschatRoom#maximum_message_length}.

---

##### `maximum_message_rate_per_second`<sup>Optional</sup> <a name="maximum_message_rate_per_second" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.maximumMessageRatePerSecond"></a>

```python
maximum_message_rate_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_rate_per_second IvschatRoom#maximum_message_rate_per_second}.

---

##### `message_review_handler`<sup>Optional</sup> <a name="message_review_handler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.messageReviewHandler"></a>

```python
message_review_handler: IvschatRoomMessageReviewHandler
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

message_review_handler block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#message_review_handler IvschatRoom#message_review_handler}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#name IvschatRoom#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags IvschatRoom#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags_all IvschatRoom#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.timeouts"></a>

```python
timeouts: IvschatRoomTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#timeouts IvschatRoom#timeouts}

---

### IvschatRoomMessageReviewHandler <a name="IvschatRoomMessageReviewHandler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_room

ivschatRoom.IvschatRoomMessageReviewHandler(
  fallback_result: str = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler.property.fallbackResult">fallback_result</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#fallback_result IvschatRoom#fallback_result}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#uri IvschatRoom#uri}. |

---

##### `fallback_result`<sup>Optional</sup> <a name="fallback_result" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler.property.fallbackResult"></a>

```python
fallback_result: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#fallback_result IvschatRoom#fallback_result}.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#uri IvschatRoom#uri}.

---

### IvschatRoomTimeouts <a name="IvschatRoomTimeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_room

ivschatRoom.IvschatRoomTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#create IvschatRoom#create}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#delete IvschatRoom#delete}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#update IvschatRoom#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#create IvschatRoom#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#delete IvschatRoom#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#update IvschatRoom#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IvschatRoomMessageReviewHandlerOutputReference <a name="IvschatRoomMessageReviewHandlerOutputReference" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_room

ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resetFallbackResult">reset_fallback_result</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fallback_result` <a name="reset_fallback_result" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resetFallbackResult"></a>

```python
def reset_fallback_result() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fallbackResultInput">fallback_result_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fallbackResult">fallback_result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fallback_result_input`<sup>Optional</sup> <a name="fallback_result_input" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fallbackResultInput"></a>

```python
fallback_result_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `fallback_result`<sup>Required</sup> <a name="fallback_result" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fallbackResult"></a>

```python
fallback_result: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.internalValue"></a>

```python
internal_value: IvschatRoomMessageReviewHandler
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

---


### IvschatRoomTimeoutsOutputReference <a name="IvschatRoomTimeoutsOutputReference" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_room

ivschatRoom.IvschatRoomTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IvschatRoomTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a>, cdktf.IResolvable]

---



