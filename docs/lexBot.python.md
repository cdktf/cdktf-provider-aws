# `lexBot` Submodule <a name="`lexBot` Submodule" id="@cdktf/provider-aws.lexBot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LexBot <a name="LexBot" id="@cdktf/provider-aws.lexBot.LexBot"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_bot aws_lex_bot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBot.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot

lexBot.LexBot(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  abort_statement: LexBotAbortStatement,
  child_directed: typing.Union[bool, IResolvable],
  intent: typing.Union[IResolvable, typing.List[LexBotIntent]],
  name: str,
  clarification_prompt: LexBotClarificationPrompt = None,
  create_version: typing.Union[bool, IResolvable] = None,
  description: str = None,
  detect_sentiment: typing.Union[bool, IResolvable] = None,
  enable_model_improvements: typing.Union[bool, IResolvable] = None,
  id: str = None,
  idle_session_ttl_in_seconds: typing.Union[int, float] = None,
  locale: str = None,
  nlu_intent_confidence_threshold: typing.Union[int, float] = None,
  process_behavior: str = None,
  timeouts: LexBotTimeouts = None,
  voice_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.abortStatement">abort_statement</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a></code> | abort_statement block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.childDirected">child_directed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#child_directed LexBot#child_directed}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.intent">intent</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a>]]</code> | intent block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#name LexBot#name}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.clarificationPrompt">clarification_prompt</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a></code> | clarification_prompt block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.createVersion">create_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#create_version LexBot#create_version}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#description LexBot#description}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.detectSentiment">detect_sentiment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#detect_sentiment LexBot#detect_sentiment}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.enableModelImprovements">enable_model_improvements</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#enable_model_improvements LexBot#enable_model_improvements}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#id LexBot#id}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.idleSessionTtlInSeconds">idle_session_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#idle_session_ttl_in_seconds LexBot#idle_session_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.locale">locale</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#locale LexBot#locale}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.nluIntentConfidenceThreshold">nlu_intent_confidence_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#nlu_intent_confidence_threshold LexBot#nlu_intent_confidence_threshold}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.processBehavior">process_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#process_behavior LexBot#process_behavior}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts">LexBotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.voiceId">voice_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#voice_id LexBot#voice_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `abort_statement`<sup>Required</sup> <a name="abort_statement" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.abortStatement"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a>

abort_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#abort_statement LexBot#abort_statement}

---

##### `child_directed`<sup>Required</sup> <a name="child_directed" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.childDirected"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#child_directed LexBot#child_directed}.

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.intent"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a>]]

intent block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#intent LexBot#intent}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#name LexBot#name}.

---

##### `clarification_prompt`<sup>Optional</sup> <a name="clarification_prompt" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.clarificationPrompt"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a>

clarification_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#clarification_prompt LexBot#clarification_prompt}

---

##### `create_version`<sup>Optional</sup> <a name="create_version" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.createVersion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#create_version LexBot#create_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#description LexBot#description}.

---

##### `detect_sentiment`<sup>Optional</sup> <a name="detect_sentiment" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.detectSentiment"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#detect_sentiment LexBot#detect_sentiment}.

---

##### `enable_model_improvements`<sup>Optional</sup> <a name="enable_model_improvements" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.enableModelImprovements"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#enable_model_improvements LexBot#enable_model_improvements}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#id LexBot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_session_ttl_in_seconds`<sup>Optional</sup> <a name="idle_session_ttl_in_seconds" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.idleSessionTtlInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#idle_session_ttl_in_seconds LexBot#idle_session_ttl_in_seconds}.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.locale"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#locale LexBot#locale}.

---

##### `nlu_intent_confidence_threshold`<sup>Optional</sup> <a name="nlu_intent_confidence_threshold" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.nluIntentConfidenceThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#nlu_intent_confidence_threshold LexBot#nlu_intent_confidence_threshold}.

---

##### `process_behavior`<sup>Optional</sup> <a name="process_behavior" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.processBehavior"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#process_behavior LexBot#process_behavior}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts">LexBotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#timeouts LexBot#timeouts}

---

##### `voice_id`<sup>Optional</sup> <a name="voice_id" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.voiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#voice_id LexBot#voice_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.putAbortStatement">put_abort_statement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.putClarificationPrompt">put_clarification_prompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.putIntent">put_intent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetClarificationPrompt">reset_clarification_prompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetCreateVersion">reset_create_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetDetectSentiment">reset_detect_sentiment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetEnableModelImprovements">reset_enable_model_improvements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetIdleSessionTtlInSeconds">reset_idle_session_ttl_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetLocale">reset_locale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetNluIntentConfidenceThreshold">reset_nlu_intent_confidence_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetProcessBehavior">reset_process_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetVoiceId">reset_voice_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexBot.LexBot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lexBot.LexBot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lexBot.LexBot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexBot.LexBot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lexBot.LexBot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lexBot.LexBot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lexBot.LexBot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lexBot.LexBot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lexBot.LexBot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexBot.LexBot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexBot.LexBot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexBot.LexBot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexBot.LexBot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexBot.LexBot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexBot.LexBot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexBot.LexBot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexBot.LexBot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexBot.LexBot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexBot.LexBot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_abort_statement` <a name="put_abort_statement" id="@cdktf/provider-aws.lexBot.LexBot.putAbortStatement"></a>

```python
def put_abort_statement(
  message: typing.Union[IResolvable, typing.List[LexBotAbortStatementMessage]],
  response_card: str = None
) -> None
```

###### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexBot.LexBot.putAbortStatement.parameter.message"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>]]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#message LexBot#message}

---

###### `response_card`<sup>Optional</sup> <a name="response_card" id="@cdktf/provider-aws.lexBot.LexBot.putAbortStatement.parameter.responseCard"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#response_card LexBot#response_card}.

---

##### `put_clarification_prompt` <a name="put_clarification_prompt" id="@cdktf/provider-aws.lexBot.LexBot.putClarificationPrompt"></a>

```python
def put_clarification_prompt(
  max_attempts: typing.Union[int, float],
  message: typing.Union[IResolvable, typing.List[LexBotClarificationPromptMessage]],
  response_card: str = None
) -> None
```

###### `max_attempts`<sup>Required</sup> <a name="max_attempts" id="@cdktf/provider-aws.lexBot.LexBot.putClarificationPrompt.parameter.maxAttempts"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#max_attempts LexBot#max_attempts}.

---

###### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexBot.LexBot.putClarificationPrompt.parameter.message"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>]]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#message LexBot#message}

---

###### `response_card`<sup>Optional</sup> <a name="response_card" id="@cdktf/provider-aws.lexBot.LexBot.putClarificationPrompt.parameter.responseCard"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#response_card LexBot#response_card}.

---

##### `put_intent` <a name="put_intent" id="@cdktf/provider-aws.lexBot.LexBot.putIntent"></a>

```python
def put_intent(
  value: typing.Union[IResolvable, typing.List[LexBotIntent]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexBot.LexBot.putIntent.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.lexBot.LexBot.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexBot.LexBot.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#create LexBot#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexBot.LexBot.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#delete LexBot#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lexBot.LexBot.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#update LexBot#update}.

---

##### `reset_clarification_prompt` <a name="reset_clarification_prompt" id="@cdktf/provider-aws.lexBot.LexBot.resetClarificationPrompt"></a>

```python
def reset_clarification_prompt() -> None
```

##### `reset_create_version` <a name="reset_create_version" id="@cdktf/provider-aws.lexBot.LexBot.resetCreateVersion"></a>

```python
def reset_create_version() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.lexBot.LexBot.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_detect_sentiment` <a name="reset_detect_sentiment" id="@cdktf/provider-aws.lexBot.LexBot.resetDetectSentiment"></a>

```python
def reset_detect_sentiment() -> None
```

##### `reset_enable_model_improvements` <a name="reset_enable_model_improvements" id="@cdktf/provider-aws.lexBot.LexBot.resetEnableModelImprovements"></a>

```python
def reset_enable_model_improvements() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lexBot.LexBot.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idle_session_ttl_in_seconds` <a name="reset_idle_session_ttl_in_seconds" id="@cdktf/provider-aws.lexBot.LexBot.resetIdleSessionTtlInSeconds"></a>

```python
def reset_idle_session_ttl_in_seconds() -> None
```

##### `reset_locale` <a name="reset_locale" id="@cdktf/provider-aws.lexBot.LexBot.resetLocale"></a>

```python
def reset_locale() -> None
```

##### `reset_nlu_intent_confidence_threshold` <a name="reset_nlu_intent_confidence_threshold" id="@cdktf/provider-aws.lexBot.LexBot.resetNluIntentConfidenceThreshold"></a>

```python
def reset_nlu_intent_confidence_threshold() -> None
```

##### `reset_process_behavior` <a name="reset_process_behavior" id="@cdktf/provider-aws.lexBot.LexBot.resetProcessBehavior"></a>

```python
def reset_process_behavior() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.lexBot.LexBot.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_voice_id` <a name="reset_voice_id" id="@cdktf/provider-aws.lexBot.LexBot.resetVoiceId"></a>

```python
def reset_voice_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lexBot.LexBot.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot

lexBot.LexBot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexBot.LexBot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lexBot.LexBot.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot

lexBot.LexBot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexBot.LexBot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lexBot.LexBot.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot

lexBot.LexBot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexBot.LexBot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.abortStatement">abort_statement</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference">LexBotAbortStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.checksum">checksum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.clarificationPrompt">clarification_prompt</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference">LexBotClarificationPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.failureReason">failure_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.intent">intent</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList">LexBotIntentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.lastUpdatedDate">last_updated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference">LexBotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.abortStatementInput">abort_statement_input</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.childDirectedInput">child_directed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.clarificationPromptInput">clarification_prompt_input</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.createVersionInput">create_version_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.detectSentimentInput">detect_sentiment_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.enableModelImprovementsInput">enable_model_improvements_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.idleSessionTtlInSecondsInput">idle_session_ttl_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.intentInput">intent_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.localeInput">locale_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.nluIntentConfidenceThresholdInput">nlu_intent_confidence_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.processBehaviorInput">process_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts">LexBotTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.voiceIdInput">voice_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.childDirected">child_directed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.createVersion">create_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.detectSentiment">detect_sentiment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.enableModelImprovements">enable_model_improvements</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.idleSessionTtlInSeconds">idle_session_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.nluIntentConfidenceThreshold">nlu_intent_confidence_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.processBehavior">process_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.voiceId">voice_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lexBot.LexBot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lexBot.LexBot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBot.LexBot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lexBot.LexBot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lexBot.LexBot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lexBot.LexBot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lexBot.LexBot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexBot.LexBot.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexBot.LexBot.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lexBot.LexBot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lexBot.LexBot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexBot.LexBot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexBot.LexBot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexBot.LexBot.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `abort_statement`<sup>Required</sup> <a name="abort_statement" id="@cdktf/provider-aws.lexBot.LexBot.property.abortStatement"></a>

```python
abort_statement: LexBotAbortStatementOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference">LexBotAbortStatementOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lexBot.LexBot.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@cdktf/provider-aws.lexBot.LexBot.property.checksum"></a>

```python
checksum: str
```

- *Type:* str

---

##### `clarification_prompt`<sup>Required</sup> <a name="clarification_prompt" id="@cdktf/provider-aws.lexBot.LexBot.property.clarificationPrompt"></a>

```python
clarification_prompt: LexBotClarificationPromptOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference">LexBotClarificationPromptOutputReference</a>

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-aws.lexBot.LexBot.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `failure_reason`<sup>Required</sup> <a name="failure_reason" id="@cdktf/provider-aws.lexBot.LexBot.property.failureReason"></a>

```python
failure_reason: str
```

- *Type:* str

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-aws.lexBot.LexBot.property.intent"></a>

```python
intent: LexBotIntentList
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotIntentList">LexBotIntentList</a>

---

##### `last_updated_date`<sup>Required</sup> <a name="last_updated_date" id="@cdktf/provider-aws.lexBot.LexBot.property.lastUpdatedDate"></a>

```python
last_updated_date: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.lexBot.LexBot.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lexBot.LexBot.property.timeouts"></a>

```python
timeouts: LexBotTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference">LexBotTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.lexBot.LexBot.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `abort_statement_input`<sup>Optional</sup> <a name="abort_statement_input" id="@cdktf/provider-aws.lexBot.LexBot.property.abortStatementInput"></a>

```python
abort_statement_input: LexBotAbortStatement
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a>

---

##### `child_directed_input`<sup>Optional</sup> <a name="child_directed_input" id="@cdktf/provider-aws.lexBot.LexBot.property.childDirectedInput"></a>

```python
child_directed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `clarification_prompt_input`<sup>Optional</sup> <a name="clarification_prompt_input" id="@cdktf/provider-aws.lexBot.LexBot.property.clarificationPromptInput"></a>

```python
clarification_prompt_input: LexBotClarificationPrompt
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a>

---

##### `create_version_input`<sup>Optional</sup> <a name="create_version_input" id="@cdktf/provider-aws.lexBot.LexBot.property.createVersionInput"></a>

```python
create_version_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.lexBot.LexBot.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `detect_sentiment_input`<sup>Optional</sup> <a name="detect_sentiment_input" id="@cdktf/provider-aws.lexBot.LexBot.property.detectSentimentInput"></a>

```python
detect_sentiment_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_model_improvements_input`<sup>Optional</sup> <a name="enable_model_improvements_input" id="@cdktf/provider-aws.lexBot.LexBot.property.enableModelImprovementsInput"></a>

```python
enable_model_improvements_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lexBot.LexBot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idle_session_ttl_in_seconds_input`<sup>Optional</sup> <a name="idle_session_ttl_in_seconds_input" id="@cdktf/provider-aws.lexBot.LexBot.property.idleSessionTtlInSecondsInput"></a>

```python
idle_session_ttl_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `intent_input`<sup>Optional</sup> <a name="intent_input" id="@cdktf/provider-aws.lexBot.LexBot.property.intentInput"></a>

```python
intent_input: typing.Union[IResolvable, typing.List[LexBotIntent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a>]]

---

##### `locale_input`<sup>Optional</sup> <a name="locale_input" id="@cdktf/provider-aws.lexBot.LexBot.property.localeInput"></a>

```python
locale_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lexBot.LexBot.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nlu_intent_confidence_threshold_input`<sup>Optional</sup> <a name="nlu_intent_confidence_threshold_input" id="@cdktf/provider-aws.lexBot.LexBot.property.nluIntentConfidenceThresholdInput"></a>

```python
nlu_intent_confidence_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `process_behavior_input`<sup>Optional</sup> <a name="process_behavior_input" id="@cdktf/provider-aws.lexBot.LexBot.property.processBehaviorInput"></a>

```python
process_behavior_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.lexBot.LexBot.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[LexBotTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts">LexBotTimeouts</a>, cdktf.IResolvable]

---

##### `voice_id_input`<sup>Optional</sup> <a name="voice_id_input" id="@cdktf/provider-aws.lexBot.LexBot.property.voiceIdInput"></a>

```python
voice_id_input: str
```

- *Type:* str

---

##### `child_directed`<sup>Required</sup> <a name="child_directed" id="@cdktf/provider-aws.lexBot.LexBot.property.childDirected"></a>

```python
child_directed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_version`<sup>Required</sup> <a name="create_version" id="@cdktf/provider-aws.lexBot.LexBot.property.createVersion"></a>

```python
create_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lexBot.LexBot.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `detect_sentiment`<sup>Required</sup> <a name="detect_sentiment" id="@cdktf/provider-aws.lexBot.LexBot.property.detectSentiment"></a>

```python
detect_sentiment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_model_improvements`<sup>Required</sup> <a name="enable_model_improvements" id="@cdktf/provider-aws.lexBot.LexBot.property.enableModelImprovements"></a>

```python
enable_model_improvements: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexBot.LexBot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idle_session_ttl_in_seconds`<sup>Required</sup> <a name="idle_session_ttl_in_seconds" id="@cdktf/provider-aws.lexBot.LexBot.property.idleSessionTtlInSeconds"></a>

```python
idle_session_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-aws.lexBot.LexBot.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexBot.LexBot.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nlu_intent_confidence_threshold`<sup>Required</sup> <a name="nlu_intent_confidence_threshold" id="@cdktf/provider-aws.lexBot.LexBot.property.nluIntentConfidenceThreshold"></a>

```python
nlu_intent_confidence_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `process_behavior`<sup>Required</sup> <a name="process_behavior" id="@cdktf/provider-aws.lexBot.LexBot.property.processBehavior"></a>

```python
process_behavior: str
```

- *Type:* str

---

##### `voice_id`<sup>Required</sup> <a name="voice_id" id="@cdktf/provider-aws.lexBot.LexBot.property.voiceId"></a>

```python
voice_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lexBot.LexBot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LexBotAbortStatement <a name="LexBotAbortStatement" id="@cdktf/provider-aws.lexBot.LexBotAbortStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotAbortStatement.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot

lexBot.LexBotAbortStatement(
  message: typing.Union[IResolvable, typing.List[LexBotAbortStatementMessage]],
  response_card: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement.property.message">message</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>]]</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement.property.responseCard">response_card</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#response_card LexBot#response_card}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexBot.LexBotAbortStatement.property.message"></a>

```python
message: typing.Union[IResolvable, typing.List[LexBotAbortStatementMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>]]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#message LexBot#message}

---

##### `response_card`<sup>Optional</sup> <a name="response_card" id="@cdktf/provider-aws.lexBot.LexBotAbortStatement.property.responseCard"></a>

```python
response_card: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#response_card LexBot#response_card}.

---

### LexBotAbortStatementMessage <a name="LexBotAbortStatementMessage" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot

lexBot.LexBotAbortStatementMessage(
  content: str,
  content_type: str,
  group_number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content LexBot#content}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content_type LexBot#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.property.groupNumber">group_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#group_number LexBot#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content LexBot#content}.

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content_type LexBot#content_type}.

---

##### `group_number`<sup>Optional</sup> <a name="group_number" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.property.groupNumber"></a>

```python
group_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#group_number LexBot#group_number}.

---

### LexBotClarificationPrompt <a name="LexBotClarificationPrompt" id="@cdktf/provider-aws.lexBot.LexBotClarificationPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot

lexBot.LexBotClarificationPrompt(
  max_attempts: typing.Union[int, float],
  message: typing.Union[IResolvable, typing.List[LexBotClarificationPromptMessage]],
  response_card: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.property.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#max_attempts LexBot#max_attempts}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.property.message">message</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>]]</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.property.responseCard">response_card</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#response_card LexBot#response_card}. |

---

##### `max_attempts`<sup>Required</sup> <a name="max_attempts" id="@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.property.maxAttempts"></a>

```python
max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#max_attempts LexBot#max_attempts}.

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.property.message"></a>

```python
message: typing.Union[IResolvable, typing.List[LexBotClarificationPromptMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>]]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#message LexBot#message}

---

##### `response_card`<sup>Optional</sup> <a name="response_card" id="@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.property.responseCard"></a>

```python
response_card: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#response_card LexBot#response_card}.

---

### LexBotClarificationPromptMessage <a name="LexBotClarificationPromptMessage" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot

lexBot.LexBotClarificationPromptMessage(
  content: str,
  content_type: str,
  group_number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content LexBot#content}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content_type LexBot#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.property.groupNumber">group_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#group_number LexBot#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content LexBot#content}.

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content_type LexBot#content_type}.

---

##### `group_number`<sup>Optional</sup> <a name="group_number" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.property.groupNumber"></a>

```python
group_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#group_number LexBot#group_number}.

---

### LexBotConfig <a name="LexBotConfig" id="@cdktf/provider-aws.lexBot.LexBotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot

lexBot.LexBotConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  abort_statement: LexBotAbortStatement,
  child_directed: typing.Union[bool, IResolvable],
  intent: typing.Union[IResolvable, typing.List[LexBotIntent]],
  name: str,
  clarification_prompt: LexBotClarificationPrompt = None,
  create_version: typing.Union[bool, IResolvable] = None,
  description: str = None,
  detect_sentiment: typing.Union[bool, IResolvable] = None,
  enable_model_improvements: typing.Union[bool, IResolvable] = None,
  id: str = None,
  idle_session_ttl_in_seconds: typing.Union[int, float] = None,
  locale: str = None,
  nlu_intent_confidence_threshold: typing.Union[int, float] = None,
  process_behavior: str = None,
  timeouts: LexBotTimeouts = None,
  voice_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.abortStatement">abort_statement</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a></code> | abort_statement block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.childDirected">child_directed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#child_directed LexBot#child_directed}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.intent">intent</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a>]]</code> | intent block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#name LexBot#name}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.clarificationPrompt">clarification_prompt</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a></code> | clarification_prompt block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.createVersion">create_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#create_version LexBot#create_version}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#description LexBot#description}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.detectSentiment">detect_sentiment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#detect_sentiment LexBot#detect_sentiment}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.enableModelImprovements">enable_model_improvements</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#enable_model_improvements LexBot#enable_model_improvements}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#id LexBot#id}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.idleSessionTtlInSeconds">idle_session_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#idle_session_ttl_in_seconds LexBot#idle_session_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.locale">locale</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#locale LexBot#locale}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.nluIntentConfidenceThreshold">nlu_intent_confidence_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#nlu_intent_confidence_threshold LexBot#nlu_intent_confidence_threshold}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.processBehavior">process_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#process_behavior LexBot#process_behavior}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts">LexBotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.voiceId">voice_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#voice_id LexBot#voice_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `abort_statement`<sup>Required</sup> <a name="abort_statement" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.abortStatement"></a>

```python
abort_statement: LexBotAbortStatement
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a>

abort_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#abort_statement LexBot#abort_statement}

---

##### `child_directed`<sup>Required</sup> <a name="child_directed" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.childDirected"></a>

```python
child_directed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#child_directed LexBot#child_directed}.

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.intent"></a>

```python
intent: typing.Union[IResolvable, typing.List[LexBotIntent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a>]]

intent block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#intent LexBot#intent}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#name LexBot#name}.

---

##### `clarification_prompt`<sup>Optional</sup> <a name="clarification_prompt" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.clarificationPrompt"></a>

```python
clarification_prompt: LexBotClarificationPrompt
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a>

clarification_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#clarification_prompt LexBot#clarification_prompt}

---

##### `create_version`<sup>Optional</sup> <a name="create_version" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.createVersion"></a>

```python
create_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#create_version LexBot#create_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#description LexBot#description}.

---

##### `detect_sentiment`<sup>Optional</sup> <a name="detect_sentiment" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.detectSentiment"></a>

```python
detect_sentiment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#detect_sentiment LexBot#detect_sentiment}.

---

##### `enable_model_improvements`<sup>Optional</sup> <a name="enable_model_improvements" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.enableModelImprovements"></a>

```python
enable_model_improvements: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#enable_model_improvements LexBot#enable_model_improvements}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#id LexBot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_session_ttl_in_seconds`<sup>Optional</sup> <a name="idle_session_ttl_in_seconds" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.idleSessionTtlInSeconds"></a>

```python
idle_session_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#idle_session_ttl_in_seconds LexBot#idle_session_ttl_in_seconds}.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.locale"></a>

```python
locale: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#locale LexBot#locale}.

---

##### `nlu_intent_confidence_threshold`<sup>Optional</sup> <a name="nlu_intent_confidence_threshold" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.nluIntentConfidenceThreshold"></a>

```python
nlu_intent_confidence_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#nlu_intent_confidence_threshold LexBot#nlu_intent_confidence_threshold}.

---

##### `process_behavior`<sup>Optional</sup> <a name="process_behavior" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.processBehavior"></a>

```python
process_behavior: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#process_behavior LexBot#process_behavior}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.timeouts"></a>

```python
timeouts: LexBotTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts">LexBotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#timeouts LexBot#timeouts}

---

##### `voice_id`<sup>Optional</sup> <a name="voice_id" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.voiceId"></a>

```python
voice_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#voice_id LexBot#voice_id}.

---

### LexBotIntent <a name="LexBotIntent" id="@cdktf/provider-aws.lexBot.LexBotIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotIntent.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot

lexBot.LexBotIntent(
  intent_name: str,
  intent_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntent.property.intentName">intent_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#intent_name LexBot#intent_name}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntent.property.intentVersion">intent_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#intent_version LexBot#intent_version}. |

---

##### `intent_name`<sup>Required</sup> <a name="intent_name" id="@cdktf/provider-aws.lexBot.LexBotIntent.property.intentName"></a>

```python
intent_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#intent_name LexBot#intent_name}.

---

##### `intent_version`<sup>Required</sup> <a name="intent_version" id="@cdktf/provider-aws.lexBot.LexBotIntent.property.intentVersion"></a>

```python
intent_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#intent_version LexBot#intent_version}.

---

### LexBotTimeouts <a name="LexBotTimeouts" id="@cdktf/provider-aws.lexBot.LexBotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot

lexBot.LexBotTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#create LexBot#create}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#delete LexBot#delete}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#update LexBot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexBot.LexBotTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#create LexBot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexBot.LexBotTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#delete LexBot#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lexBot.LexBotTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#update LexBot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LexBotAbortStatementMessageList <a name="LexBotAbortStatementMessageList" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot

lexBot.LexBotAbortStatementMessageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LexBotAbortStatementMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LexBotAbortStatementMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>]]

---


### LexBotAbortStatementMessageOutputReference <a name="LexBotAbortStatementMessageOutputReference" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot

lexBot.LexBotAbortStatementMessageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.resetGroupNumber">reset_group_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_number` <a name="reset_group_number" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.resetGroupNumber"></a>

```python
def reset_group_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.groupNumberInput">group_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.groupNumber">group_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `group_number_input`<sup>Optional</sup> <a name="group_number_input" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.groupNumberInput"></a>

```python
group_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `group_number`<sup>Required</sup> <a name="group_number" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.groupNumber"></a>

```python
group_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LexBotAbortStatementMessage, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>, cdktf.IResolvable]

---


### LexBotAbortStatementOutputReference <a name="LexBotAbortStatementOutputReference" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot

lexBot.LexBotAbortStatementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.putMessage">put_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.resetResponseCard">reset_response_card</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_message` <a name="put_message" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.putMessage"></a>

```python
def put_message(
  value: typing.Union[IResolvable, typing.List[LexBotAbortStatementMessage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.putMessage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>]]

---

##### `reset_response_card` <a name="reset_response_card" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.resetResponseCard"></a>

```python
def reset_response_card() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList">LexBotAbortStatementMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.messageInput">message_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.responseCardInput">response_card_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.responseCard">response_card</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.message"></a>

```python
message: LexBotAbortStatementMessageList
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList">LexBotAbortStatementMessageList</a>

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.messageInput"></a>

```python
message_input: typing.Union[IResolvable, typing.List[LexBotAbortStatementMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>]]

---

##### `response_card_input`<sup>Optional</sup> <a name="response_card_input" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.responseCardInput"></a>

```python
response_card_input: str
```

- *Type:* str

---

##### `response_card`<sup>Required</sup> <a name="response_card" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.responseCard"></a>

```python
response_card: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.internalValue"></a>

```python
internal_value: LexBotAbortStatement
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a>

---


### LexBotClarificationPromptMessageList <a name="LexBotClarificationPromptMessageList" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot

lexBot.LexBotClarificationPromptMessageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LexBotClarificationPromptMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LexBotClarificationPromptMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>]]

---


### LexBotClarificationPromptMessageOutputReference <a name="LexBotClarificationPromptMessageOutputReference" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot

lexBot.LexBotClarificationPromptMessageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.resetGroupNumber">reset_group_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_number` <a name="reset_group_number" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.resetGroupNumber"></a>

```python
def reset_group_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.groupNumberInput">group_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.groupNumber">group_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `group_number_input`<sup>Optional</sup> <a name="group_number_input" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.groupNumberInput"></a>

```python
group_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `group_number`<sup>Required</sup> <a name="group_number" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.groupNumber"></a>

```python
group_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LexBotClarificationPromptMessage, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>, cdktf.IResolvable]

---


### LexBotClarificationPromptOutputReference <a name="LexBotClarificationPromptOutputReference" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot

lexBot.LexBotClarificationPromptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.putMessage">put_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.resetResponseCard">reset_response_card</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_message` <a name="put_message" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.putMessage"></a>

```python
def put_message(
  value: typing.Union[IResolvable, typing.List[LexBotClarificationPromptMessage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.putMessage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>]]

---

##### `reset_response_card` <a name="reset_response_card" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.resetResponseCard"></a>

```python
def reset_response_card() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList">LexBotClarificationPromptMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.maxAttemptsInput">max_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.messageInput">message_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.responseCardInput">response_card_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.responseCard">response_card</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.message"></a>

```python
message: LexBotClarificationPromptMessageList
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList">LexBotClarificationPromptMessageList</a>

---

##### `max_attempts_input`<sup>Optional</sup> <a name="max_attempts_input" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.maxAttemptsInput"></a>

```python
max_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.messageInput"></a>

```python
message_input: typing.Union[IResolvable, typing.List[LexBotClarificationPromptMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>]]

---

##### `response_card_input`<sup>Optional</sup> <a name="response_card_input" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.responseCardInput"></a>

```python
response_card_input: str
```

- *Type:* str

---

##### `max_attempts`<sup>Required</sup> <a name="max_attempts" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.maxAttempts"></a>

```python
max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `response_card`<sup>Required</sup> <a name="response_card" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.responseCard"></a>

```python
response_card: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.internalValue"></a>

```python
internal_value: LexBotClarificationPrompt
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a>

---


### LexBotIntentList <a name="LexBotIntentList" id="@cdktf/provider-aws.lexBot.LexBotIntentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot

lexBot.LexBotIntentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexBot.LexBotIntentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBot.LexBotIntentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBot.LexBotIntentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexBot.LexBotIntentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexBot.LexBotIntentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LexBotIntentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexBot.LexBotIntentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexBot.LexBotIntentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBot.LexBotIntentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexBot.LexBotIntentList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LexBotIntent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a>]]

---


### LexBotIntentOutputReference <a name="LexBotIntentOutputReference" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot

lexBot.LexBotIntentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentNameInput">intent_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentVersionInput">intent_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentName">intent_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentVersion">intent_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `intent_name_input`<sup>Optional</sup> <a name="intent_name_input" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentNameInput"></a>

```python
intent_name_input: str
```

- *Type:* str

---

##### `intent_version_input`<sup>Optional</sup> <a name="intent_version_input" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentVersionInput"></a>

```python
intent_version_input: str
```

- *Type:* str

---

##### `intent_name`<sup>Required</sup> <a name="intent_name" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentName"></a>

```python
intent_name: str
```

- *Type:* str

---

##### `intent_version`<sup>Required</sup> <a name="intent_version" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentVersion"></a>

```python
intent_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LexBotIntent, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a>, cdktf.IResolvable]

---


### LexBotTimeoutsOutputReference <a name="LexBotTimeoutsOutputReference" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_bot

lexBot.LexBotTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts">LexBotTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LexBotTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts">LexBotTimeouts</a>, cdktf.IResolvable]

---



