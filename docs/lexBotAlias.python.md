# `lexBotAlias` Submodule <a name="`lexBotAlias` Submodule" id="@cdktf/provider-aws.lexBotAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LexBotAlias <a name="LexBotAlias" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias aws_lex_bot_alias}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot_alias

lexBotAlias.LexBotAlias(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bot_name: str,
  bot_version: str,
  name: str,
  conversation_logs: LexBotAliasConversationLogs = None,
  description: str = None,
  id: str = None,
  timeouts: LexBotAliasTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.botName">bot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#bot_name LexBotAlias#bot_name}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.botVersion">bot_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#bot_version LexBotAlias#bot_version}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#name LexBotAlias#name}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.conversationLogs">conversation_logs</a></code> | <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs">LexBotAliasConversationLogs</a></code> | conversation_logs block. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#description LexBotAlias#description}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#id LexBotAlias#id}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts">LexBotAliasTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bot_name`<sup>Required</sup> <a name="bot_name" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.botName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#bot_name LexBotAlias#bot_name}.

---

##### `bot_version`<sup>Required</sup> <a name="bot_version" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.botVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#bot_version LexBotAlias#bot_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#name LexBotAlias#name}.

---

##### `conversation_logs`<sup>Optional</sup> <a name="conversation_logs" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.conversationLogs"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs">LexBotAliasConversationLogs</a>

conversation_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#conversation_logs LexBotAlias#conversation_logs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#description LexBotAlias#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#id LexBotAlias#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts">LexBotAliasTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#timeouts LexBotAlias#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.putConversationLogs">put_conversation_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.resetConversationLogs">reset_conversation_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_conversation_logs` <a name="put_conversation_logs" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.putConversationLogs"></a>

```python
def put_conversation_logs(
  iam_role_arn: str,
  log_settings: typing.Union[IResolvable, typing.List[LexBotAliasConversationLogsLogSettings]] = None
) -> None
```

###### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.putConversationLogs.parameter.iamRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#iam_role_arn LexBotAlias#iam_role_arn}.

---

###### `log_settings`<sup>Optional</sup> <a name="log_settings" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.putConversationLogs.parameter.logSettings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings">LexBotAliasConversationLogsLogSettings</a>]]

log_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#log_settings LexBotAlias#log_settings}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#create LexBotAlias#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#delete LexBotAlias#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#update LexBotAlias#update}.

---

##### `reset_conversation_logs` <a name="reset_conversation_logs" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.resetConversationLogs"></a>

```python
def reset_conversation_logs() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot_alias

lexBotAlias.LexBotAlias.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot_alias

lexBotAlias.LexBotAlias.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot_alias

lexBotAlias.LexBotAlias.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.checksum">checksum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.conversationLogs">conversation_logs</a></code> | <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference">LexBotAliasConversationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.lastUpdatedDate">last_updated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference">LexBotAliasTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.botNameInput">bot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.botVersionInput">bot_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.conversationLogsInput">conversation_logs_input</a></code> | <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs">LexBotAliasConversationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts">LexBotAliasTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.botName">bot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.botVersion">bot_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.checksum"></a>

```python
checksum: str
```

- *Type:* str

---

##### `conversation_logs`<sup>Required</sup> <a name="conversation_logs" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.conversationLogs"></a>

```python
conversation_logs: LexBotAliasConversationLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference">LexBotAliasConversationLogsOutputReference</a>

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `last_updated_date`<sup>Required</sup> <a name="last_updated_date" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.lastUpdatedDate"></a>

```python
last_updated_date: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.timeouts"></a>

```python
timeouts: LexBotAliasTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference">LexBotAliasTimeoutsOutputReference</a>

---

##### `bot_name_input`<sup>Optional</sup> <a name="bot_name_input" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.botNameInput"></a>

```python
bot_name_input: str
```

- *Type:* str

---

##### `bot_version_input`<sup>Optional</sup> <a name="bot_version_input" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.botVersionInput"></a>

```python
bot_version_input: str
```

- *Type:* str

---

##### `conversation_logs_input`<sup>Optional</sup> <a name="conversation_logs_input" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.conversationLogsInput"></a>

```python
conversation_logs_input: LexBotAliasConversationLogs
```

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs">LexBotAliasConversationLogs</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[LexBotAliasTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts">LexBotAliasTimeouts</a>, cdktf.IResolvable]

---

##### `bot_name`<sup>Required</sup> <a name="bot_name" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.botName"></a>

```python
bot_name: str
```

- *Type:* str

---

##### `bot_version`<sup>Required</sup> <a name="bot_version" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.botVersion"></a>

```python
bot_version: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LexBotAliasConfig <a name="LexBotAliasConfig" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot_alias

lexBotAlias.LexBotAliasConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bot_name: str,
  bot_version: str,
  name: str,
  conversation_logs: LexBotAliasConversationLogs = None,
  description: str = None,
  id: str = None,
  timeouts: LexBotAliasTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.botName">bot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#bot_name LexBotAlias#bot_name}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.botVersion">bot_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#bot_version LexBotAlias#bot_version}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#name LexBotAlias#name}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.conversationLogs">conversation_logs</a></code> | <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs">LexBotAliasConversationLogs</a></code> | conversation_logs block. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#description LexBotAlias#description}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#id LexBotAlias#id}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts">LexBotAliasTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bot_name`<sup>Required</sup> <a name="bot_name" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.botName"></a>

```python
bot_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#bot_name LexBotAlias#bot_name}.

---

##### `bot_version`<sup>Required</sup> <a name="bot_version" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.botVersion"></a>

```python
bot_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#bot_version LexBotAlias#bot_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#name LexBotAlias#name}.

---

##### `conversation_logs`<sup>Optional</sup> <a name="conversation_logs" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.conversationLogs"></a>

```python
conversation_logs: LexBotAliasConversationLogs
```

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs">LexBotAliasConversationLogs</a>

conversation_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#conversation_logs LexBotAlias#conversation_logs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#description LexBotAlias#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#id LexBotAlias#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.timeouts"></a>

```python
timeouts: LexBotAliasTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts">LexBotAliasTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#timeouts LexBotAlias#timeouts}

---

### LexBotAliasConversationLogs <a name="LexBotAliasConversationLogs" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogs(
  iam_role_arn: str,
  log_settings: typing.Union[IResolvable, typing.List[LexBotAliasConversationLogsLogSettings]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#iam_role_arn LexBotAlias#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs.property.logSettings">log_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings">LexBotAliasConversationLogsLogSettings</a>]]</code> | log_settings block. |

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#iam_role_arn LexBotAlias#iam_role_arn}.

---

##### `log_settings`<sup>Optional</sup> <a name="log_settings" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs.property.logSettings"></a>

```python
log_settings: typing.Union[IResolvable, typing.List[LexBotAliasConversationLogsLogSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings">LexBotAliasConversationLogsLogSettings</a>]]

log_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#log_settings LexBotAlias#log_settings}

---

### LexBotAliasConversationLogsLogSettings <a name="LexBotAliasConversationLogsLogSettings" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogsLogSettings(
  destination: str,
  log_type: str,
  resource_arn: str,
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#destination LexBotAlias#destination}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings.property.logType">log_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#log_type LexBotAlias#log_type}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings.property.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#resource_arn LexBotAlias#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#kms_key_arn LexBotAlias#kms_key_arn}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#destination LexBotAlias#destination}.

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings.property.logType"></a>

```python
log_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#log_type LexBotAlias#log_type}.

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#resource_arn LexBotAlias#resource_arn}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#kms_key_arn LexBotAlias#kms_key_arn}.

---

### LexBotAliasTimeouts <a name="LexBotAliasTimeouts" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot_alias

lexBotAlias.LexBotAliasTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#create LexBotAlias#create}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#delete LexBotAlias#delete}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#update LexBotAlias#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#create LexBotAlias#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#delete LexBotAlias#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#update LexBotAlias#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LexBotAliasConversationLogsLogSettingsList <a name="LexBotAliasConversationLogsLogSettingsList" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogsLogSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LexBotAliasConversationLogsLogSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings">LexBotAliasConversationLogsLogSettings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LexBotAliasConversationLogsLogSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings">LexBotAliasConversationLogsLogSettings</a>]]

---


### LexBotAliasConversationLogsLogSettingsOutputReference <a name="LexBotAliasConversationLogsLogSettingsOutputReference" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.resourcePrefix">resource_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.logTypeInput">log_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.logType">log_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings">LexBotAliasConversationLogsLogSettings</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_prefix`<sup>Required</sup> <a name="resource_prefix" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.resourcePrefix"></a>

```python
resource_prefix: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `log_type_input`<sup>Optional</sup> <a name="log_type_input" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.logTypeInput"></a>

```python
log_type_input: str
```

- *Type:* str

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.logType"></a>

```python
log_type: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LexBotAliasConversationLogsLogSettings, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings">LexBotAliasConversationLogsLogSettings</a>, cdktf.IResolvable]

---


### LexBotAliasConversationLogsOutputReference <a name="LexBotAliasConversationLogsOutputReference" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot_alias

lexBotAlias.LexBotAliasConversationLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.putLogSettings">put_log_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.resetLogSettings">reset_log_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_log_settings` <a name="put_log_settings" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.putLogSettings"></a>

```python
def put_log_settings(
  value: typing.Union[IResolvable, typing.List[LexBotAliasConversationLogsLogSettings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.putLogSettings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings">LexBotAliasConversationLogsLogSettings</a>]]

---

##### `reset_log_settings` <a name="reset_log_settings" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.resetLogSettings"></a>

```python
def reset_log_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.logSettings">log_settings</a></code> | <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList">LexBotAliasConversationLogsLogSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.logSettingsInput">log_settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings">LexBotAliasConversationLogsLogSettings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs">LexBotAliasConversationLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_settings`<sup>Required</sup> <a name="log_settings" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.logSettings"></a>

```python
log_settings: LexBotAliasConversationLogsLogSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList">LexBotAliasConversationLogsLogSettingsList</a>

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `log_settings_input`<sup>Optional</sup> <a name="log_settings_input" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.logSettingsInput"></a>

```python
log_settings_input: typing.Union[IResolvable, typing.List[LexBotAliasConversationLogsLogSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings">LexBotAliasConversationLogsLogSettings</a>]]

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.internalValue"></a>

```python
internal_value: LexBotAliasConversationLogs
```

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs">LexBotAliasConversationLogs</a>

---


### LexBotAliasTimeoutsOutputReference <a name="LexBotAliasTimeoutsOutputReference" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot_alias

lexBotAlias.LexBotAliasTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts">LexBotAliasTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LexBotAliasTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts">LexBotAliasTimeouts</a>, cdktf.IResolvable]

---



