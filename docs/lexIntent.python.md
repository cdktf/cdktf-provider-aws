# `lexIntent` Submodule <a name="`lexIntent` Submodule" id="@cdktf/provider-aws.lexIntent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LexIntent <a name="LexIntent" id="@cdktf/provider-aws.lexIntent.LexIntent"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_intent aws_lex_intent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntent(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fulfillment_activity: LexIntentFulfillmentActivity,
  name: str,
  conclusion_statement: LexIntentConclusionStatement = None,
  confirmation_prompt: LexIntentConfirmationPrompt = None,
  create_version: typing.Union[bool, IResolvable] = None,
  description: str = None,
  dialog_code_hook: LexIntentDialogCodeHook = None,
  follow_up_prompt: LexIntentFollowUpPrompt = None,
  id: str = None,
  parent_intent_signature: str = None,
  rejection_statement: LexIntentRejectionStatement = None,
  sample_utterances: typing.List[str] = None,
  slot: typing.Union[IResolvable, typing.List[LexIntentSlot]] = None,
  timeouts: LexIntentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.fulfillmentActivity">fulfillment_activity</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a></code> | fulfillment_activity block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.conclusionStatement">conclusion_statement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a></code> | conclusion_statement block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.confirmationPrompt">confirmation_prompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a></code> | confirmation_prompt block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.createVersion">create_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create_version LexIntent#create_version}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.dialogCodeHook">dialog_code_hook</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a></code> | dialog_code_hook block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.followUpPrompt">follow_up_prompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a></code> | follow_up_prompt block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#id LexIntent#id}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.parentIntentSignature">parent_intent_signature</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#parent_intent_signature LexIntent#parent_intent_signature}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.rejectionStatement">rejection_statement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a></code> | rejection_statement block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.sampleUtterances">sample_utterances</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.slot">slot</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>]]</code> | slot block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fulfillment_activity`<sup>Required</sup> <a name="fulfillment_activity" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.fulfillmentActivity"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

fulfillment_activity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#fulfillment_activity LexIntent#fulfillment_activity}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}.

---

##### `conclusion_statement`<sup>Optional</sup> <a name="conclusion_statement" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.conclusionStatement"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

conclusion_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#conclusion_statement LexIntent#conclusion_statement}

---

##### `confirmation_prompt`<sup>Optional</sup> <a name="confirmation_prompt" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.confirmationPrompt"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

confirmation_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#confirmation_prompt LexIntent#confirmation_prompt}

---

##### `create_version`<sup>Optional</sup> <a name="create_version" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.createVersion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create_version LexIntent#create_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}.

---

##### `dialog_code_hook`<sup>Optional</sup> <a name="dialog_code_hook" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.dialogCodeHook"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

dialog_code_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#dialog_code_hook LexIntent#dialog_code_hook}

---

##### `follow_up_prompt`<sup>Optional</sup> <a name="follow_up_prompt" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.followUpPrompt"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

follow_up_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#follow_up_prompt LexIntent#follow_up_prompt}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#id LexIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent_intent_signature`<sup>Optional</sup> <a name="parent_intent_signature" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.parentIntentSignature"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#parent_intent_signature LexIntent#parent_intent_signature}.

---

##### `rejection_statement`<sup>Optional</sup> <a name="rejection_statement" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.rejectionStatement"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

rejection_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#rejection_statement LexIntent#rejection_statement}

---

##### `sample_utterances`<sup>Optional</sup> <a name="sample_utterances" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.sampleUtterances"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}.

---

##### `slot`<sup>Optional</sup> <a name="slot" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.slot"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>]]

slot block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot LexIntent#slot}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#timeouts LexIntent#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putConclusionStatement">put_conclusion_statement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putConfirmationPrompt">put_confirmation_prompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putDialogCodeHook">put_dialog_code_hook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putFollowUpPrompt">put_follow_up_prompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putFulfillmentActivity">put_fulfillment_activity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putRejectionStatement">put_rejection_statement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putSlot">put_slot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetConclusionStatement">reset_conclusion_statement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetConfirmationPrompt">reset_confirmation_prompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetCreateVersion">reset_create_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetDialogCodeHook">reset_dialog_code_hook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetFollowUpPrompt">reset_follow_up_prompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetParentIntentSignature">reset_parent_intent_signature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetRejectionStatement">reset_rejection_statement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetSampleUtterances">reset_sample_utterances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetSlot">reset_slot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lexIntent.LexIntent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lexIntent.LexIntent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lexIntent.LexIntent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lexIntent.LexIntent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lexIntent.LexIntent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lexIntent.LexIntent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lexIntent.LexIntent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexIntent.LexIntent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_conclusion_statement` <a name="put_conclusion_statement" id="@cdktf/provider-aws.lexIntent.LexIntent.putConclusionStatement"></a>

```python
def put_conclusion_statement(
  message: typing.Union[IResolvable, typing.List[LexIntentConclusionStatementMessage]],
  response_card: str = None
) -> None
```

###### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntent.putConclusionStatement.parameter.message"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>]]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

###### `response_card`<sup>Optional</sup> <a name="response_card" id="@cdktf/provider-aws.lexIntent.LexIntent.putConclusionStatement.parameter.responseCard"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

##### `put_confirmation_prompt` <a name="put_confirmation_prompt" id="@cdktf/provider-aws.lexIntent.LexIntent.putConfirmationPrompt"></a>

```python
def put_confirmation_prompt(
  max_attempts: typing.Union[int, float],
  message: typing.Union[IResolvable, typing.List[LexIntentConfirmationPromptMessage]],
  response_card: str = None
) -> None
```

###### `max_attempts`<sup>Required</sup> <a name="max_attempts" id="@cdktf/provider-aws.lexIntent.LexIntent.putConfirmationPrompt.parameter.maxAttempts"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}.

---

###### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntent.putConfirmationPrompt.parameter.message"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>]]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

###### `response_card`<sup>Optional</sup> <a name="response_card" id="@cdktf/provider-aws.lexIntent.LexIntent.putConfirmationPrompt.parameter.responseCard"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

##### `put_dialog_code_hook` <a name="put_dialog_code_hook" id="@cdktf/provider-aws.lexIntent.LexIntent.putDialogCodeHook"></a>

```python
def put_dialog_code_hook(
  message_version: str,
  uri: str
) -> None
```

###### `message_version`<sup>Required</sup> <a name="message_version" id="@cdktf/provider-aws.lexIntent.LexIntent.putDialogCodeHook.parameter.messageVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message_version LexIntent#message_version}.

---

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.lexIntent.LexIntent.putDialogCodeHook.parameter.uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#uri LexIntent#uri}.

---

##### `put_follow_up_prompt` <a name="put_follow_up_prompt" id="@cdktf/provider-aws.lexIntent.LexIntent.putFollowUpPrompt"></a>

```python
def put_follow_up_prompt(
  prompt: LexIntentFollowUpPromptPrompt,
  rejection_statement: LexIntentFollowUpPromptRejectionStatement
) -> None
```

###### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktf/provider-aws.lexIntent.LexIntent.putFollowUpPrompt.parameter.prompt"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a>

prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#prompt LexIntent#prompt}

---

###### `rejection_statement`<sup>Required</sup> <a name="rejection_statement" id="@cdktf/provider-aws.lexIntent.LexIntent.putFollowUpPrompt.parameter.rejectionStatement"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a>

rejection_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#rejection_statement LexIntent#rejection_statement}

---

##### `put_fulfillment_activity` <a name="put_fulfillment_activity" id="@cdktf/provider-aws.lexIntent.LexIntent.putFulfillmentActivity"></a>

```python
def put_fulfillment_activity(
  type: str,
  code_hook: LexIntentFulfillmentActivityCodeHook = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lexIntent.LexIntent.putFulfillmentActivity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#type LexIntent#type}.

---

###### `code_hook`<sup>Optional</sup> <a name="code_hook" id="@cdktf/provider-aws.lexIntent.LexIntent.putFulfillmentActivity.parameter.codeHook"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a>

code_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#code_hook LexIntent#code_hook}

---

##### `put_rejection_statement` <a name="put_rejection_statement" id="@cdktf/provider-aws.lexIntent.LexIntent.putRejectionStatement"></a>

```python
def put_rejection_statement(
  message: typing.Union[IResolvable, typing.List[LexIntentRejectionStatementMessage]],
  response_card: str = None
) -> None
```

###### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntent.putRejectionStatement.parameter.message"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>]]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

###### `response_card`<sup>Optional</sup> <a name="response_card" id="@cdktf/provider-aws.lexIntent.LexIntent.putRejectionStatement.parameter.responseCard"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

##### `put_slot` <a name="put_slot" id="@cdktf/provider-aws.lexIntent.LexIntent.putSlot"></a>

```python
def put_slot(
  value: typing.Union[IResolvable, typing.List[LexIntentSlot]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntent.putSlot.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.lexIntent.LexIntent.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexIntent.LexIntent.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create LexIntent#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexIntent.LexIntent.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#delete LexIntent#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lexIntent.LexIntent.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#update LexIntent#update}.

---

##### `reset_conclusion_statement` <a name="reset_conclusion_statement" id="@cdktf/provider-aws.lexIntent.LexIntent.resetConclusionStatement"></a>

```python
def reset_conclusion_statement() -> None
```

##### `reset_confirmation_prompt` <a name="reset_confirmation_prompt" id="@cdktf/provider-aws.lexIntent.LexIntent.resetConfirmationPrompt"></a>

```python
def reset_confirmation_prompt() -> None
```

##### `reset_create_version` <a name="reset_create_version" id="@cdktf/provider-aws.lexIntent.LexIntent.resetCreateVersion"></a>

```python
def reset_create_version() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.lexIntent.LexIntent.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dialog_code_hook` <a name="reset_dialog_code_hook" id="@cdktf/provider-aws.lexIntent.LexIntent.resetDialogCodeHook"></a>

```python
def reset_dialog_code_hook() -> None
```

##### `reset_follow_up_prompt` <a name="reset_follow_up_prompt" id="@cdktf/provider-aws.lexIntent.LexIntent.resetFollowUpPrompt"></a>

```python
def reset_follow_up_prompt() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lexIntent.LexIntent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parent_intent_signature` <a name="reset_parent_intent_signature" id="@cdktf/provider-aws.lexIntent.LexIntent.resetParentIntentSignature"></a>

```python
def reset_parent_intent_signature() -> None
```

##### `reset_rejection_statement` <a name="reset_rejection_statement" id="@cdktf/provider-aws.lexIntent.LexIntent.resetRejectionStatement"></a>

```python
def reset_rejection_statement() -> None
```

##### `reset_sample_utterances` <a name="reset_sample_utterances" id="@cdktf/provider-aws.lexIntent.LexIntent.resetSampleUtterances"></a>

```python
def reset_sample_utterances() -> None
```

##### `reset_slot` <a name="reset_slot" id="@cdktf/provider-aws.lexIntent.LexIntent.resetSlot"></a>

```python
def reset_slot() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.lexIntent.LexIntent.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lexIntent.LexIntent.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexIntent.LexIntent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lexIntent.LexIntent.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexIntent.LexIntent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntent.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexIntent.LexIntent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.checksum">checksum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.conclusionStatement">conclusion_statement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference">LexIntentConclusionStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.confirmationPrompt">confirmation_prompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference">LexIntentConfirmationPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.dialogCodeHook">dialog_code_hook</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference">LexIntentDialogCodeHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.followUpPrompt">follow_up_prompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference">LexIntentFollowUpPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.fulfillmentActivity">fulfillment_activity</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference">LexIntentFulfillmentActivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.lastUpdatedDate">last_updated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.rejectionStatement">rejection_statement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference">LexIntentRejectionStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.slot">slot</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList">LexIntentSlotList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference">LexIntentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.conclusionStatementInput">conclusion_statement_input</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.confirmationPromptInput">confirmation_prompt_input</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.createVersionInput">create_version_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.dialogCodeHookInput">dialog_code_hook_input</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.followUpPromptInput">follow_up_prompt_input</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.fulfillmentActivityInput">fulfillment_activity_input</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.parentIntentSignatureInput">parent_intent_signature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.rejectionStatementInput">rejection_statement_input</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.sampleUtterancesInput">sample_utterances_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.slotInput">slot_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.createVersion">create_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.parentIntentSignature">parent_intent_signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.sampleUtterances">sample_utterances</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lexIntent.LexIntent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lexIntent.LexIntent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lexIntent.LexIntent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lexIntent.LexIntent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lexIntent.LexIntent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lexIntent.LexIntent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexIntent.LexIntent.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexIntent.LexIntent.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lexIntent.LexIntent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lexIntent.LexIntent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexIntent.LexIntent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexIntent.LexIntent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexIntent.LexIntent.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lexIntent.LexIntent.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@cdktf/provider-aws.lexIntent.LexIntent.property.checksum"></a>

```python
checksum: str
```

- *Type:* str

---

##### `conclusion_statement`<sup>Required</sup> <a name="conclusion_statement" id="@cdktf/provider-aws.lexIntent.LexIntent.property.conclusionStatement"></a>

```python
conclusion_statement: LexIntentConclusionStatementOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference">LexIntentConclusionStatementOutputReference</a>

---

##### `confirmation_prompt`<sup>Required</sup> <a name="confirmation_prompt" id="@cdktf/provider-aws.lexIntent.LexIntent.property.confirmationPrompt"></a>

```python
confirmation_prompt: LexIntentConfirmationPromptOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference">LexIntentConfirmationPromptOutputReference</a>

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-aws.lexIntent.LexIntent.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `dialog_code_hook`<sup>Required</sup> <a name="dialog_code_hook" id="@cdktf/provider-aws.lexIntent.LexIntent.property.dialogCodeHook"></a>

```python
dialog_code_hook: LexIntentDialogCodeHookOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference">LexIntentDialogCodeHookOutputReference</a>

---

##### `follow_up_prompt`<sup>Required</sup> <a name="follow_up_prompt" id="@cdktf/provider-aws.lexIntent.LexIntent.property.followUpPrompt"></a>

```python
follow_up_prompt: LexIntentFollowUpPromptOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference">LexIntentFollowUpPromptOutputReference</a>

---

##### `fulfillment_activity`<sup>Required</sup> <a name="fulfillment_activity" id="@cdktf/provider-aws.lexIntent.LexIntent.property.fulfillmentActivity"></a>

```python
fulfillment_activity: LexIntentFulfillmentActivityOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference">LexIntentFulfillmentActivityOutputReference</a>

---

##### `last_updated_date`<sup>Required</sup> <a name="last_updated_date" id="@cdktf/provider-aws.lexIntent.LexIntent.property.lastUpdatedDate"></a>

```python
last_updated_date: str
```

- *Type:* str

---

##### `rejection_statement`<sup>Required</sup> <a name="rejection_statement" id="@cdktf/provider-aws.lexIntent.LexIntent.property.rejectionStatement"></a>

```python
rejection_statement: LexIntentRejectionStatementOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference">LexIntentRejectionStatementOutputReference</a>

---

##### `slot`<sup>Required</sup> <a name="slot" id="@cdktf/provider-aws.lexIntent.LexIntent.property.slot"></a>

```python
slot: LexIntentSlotList
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList">LexIntentSlotList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lexIntent.LexIntent.property.timeouts"></a>

```python
timeouts: LexIntentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference">LexIntentTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.lexIntent.LexIntent.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `conclusion_statement_input`<sup>Optional</sup> <a name="conclusion_statement_input" id="@cdktf/provider-aws.lexIntent.LexIntent.property.conclusionStatementInput"></a>

```python
conclusion_statement_input: LexIntentConclusionStatement
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

---

##### `confirmation_prompt_input`<sup>Optional</sup> <a name="confirmation_prompt_input" id="@cdktf/provider-aws.lexIntent.LexIntent.property.confirmationPromptInput"></a>

```python
confirmation_prompt_input: LexIntentConfirmationPrompt
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

---

##### `create_version_input`<sup>Optional</sup> <a name="create_version_input" id="@cdktf/provider-aws.lexIntent.LexIntent.property.createVersionInput"></a>

```python
create_version_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.lexIntent.LexIntent.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dialog_code_hook_input`<sup>Optional</sup> <a name="dialog_code_hook_input" id="@cdktf/provider-aws.lexIntent.LexIntent.property.dialogCodeHookInput"></a>

```python
dialog_code_hook_input: LexIntentDialogCodeHook
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

---

##### `follow_up_prompt_input`<sup>Optional</sup> <a name="follow_up_prompt_input" id="@cdktf/provider-aws.lexIntent.LexIntent.property.followUpPromptInput"></a>

```python
follow_up_prompt_input: LexIntentFollowUpPrompt
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

---

##### `fulfillment_activity_input`<sup>Optional</sup> <a name="fulfillment_activity_input" id="@cdktf/provider-aws.lexIntent.LexIntent.property.fulfillmentActivityInput"></a>

```python
fulfillment_activity_input: LexIntentFulfillmentActivity
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lexIntent.LexIntent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lexIntent.LexIntent.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_intent_signature_input`<sup>Optional</sup> <a name="parent_intent_signature_input" id="@cdktf/provider-aws.lexIntent.LexIntent.property.parentIntentSignatureInput"></a>

```python
parent_intent_signature_input: str
```

- *Type:* str

---

##### `rejection_statement_input`<sup>Optional</sup> <a name="rejection_statement_input" id="@cdktf/provider-aws.lexIntent.LexIntent.property.rejectionStatementInput"></a>

```python
rejection_statement_input: LexIntentRejectionStatement
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

---

##### `sample_utterances_input`<sup>Optional</sup> <a name="sample_utterances_input" id="@cdktf/provider-aws.lexIntent.LexIntent.property.sampleUtterancesInput"></a>

```python
sample_utterances_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `slot_input`<sup>Optional</sup> <a name="slot_input" id="@cdktf/provider-aws.lexIntent.LexIntent.property.slotInput"></a>

```python
slot_input: typing.Union[IResolvable, typing.List[LexIntentSlot]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.lexIntent.LexIntent.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[LexIntentTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a>, cdktf.IResolvable]

---

##### `create_version`<sup>Required</sup> <a name="create_version" id="@cdktf/provider-aws.lexIntent.LexIntent.property.createVersion"></a>

```python
create_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lexIntent.LexIntent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexIntent.LexIntent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexIntent.LexIntent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_intent_signature`<sup>Required</sup> <a name="parent_intent_signature" id="@cdktf/provider-aws.lexIntent.LexIntent.property.parentIntentSignature"></a>

```python
parent_intent_signature: str
```

- *Type:* str

---

##### `sample_utterances`<sup>Required</sup> <a name="sample_utterances" id="@cdktf/provider-aws.lexIntent.LexIntent.property.sampleUtterances"></a>

```python
sample_utterances: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lexIntent.LexIntent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LexIntentConclusionStatement <a name="LexIntentConclusionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentConclusionStatement(
  message: typing.Union[IResolvable, typing.List[LexIntentConclusionStatementMessage]],
  response_card: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement.property.message">message</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>]]</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement.property.responseCard">response_card</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement.property.message"></a>

```python
message: typing.Union[IResolvable, typing.List[LexIntentConclusionStatementMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>]]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `response_card`<sup>Optional</sup> <a name="response_card" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement.property.responseCard"></a>

```python
response_card: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentConclusionStatementMessage <a name="LexIntentConclusionStatementMessage" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentConclusionStatementMessage(
  content: str,
  content_type: str,
  group_number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.groupNumber">group_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `group_number`<sup>Optional</sup> <a name="group_number" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.groupNumber"></a>

```python
group_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentConfig <a name="LexIntentConfig" id="@cdktf/provider-aws.lexIntent.LexIntentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fulfillment_activity: LexIntentFulfillmentActivity,
  name: str,
  conclusion_statement: LexIntentConclusionStatement = None,
  confirmation_prompt: LexIntentConfirmationPrompt = None,
  create_version: typing.Union[bool, IResolvable] = None,
  description: str = None,
  dialog_code_hook: LexIntentDialogCodeHook = None,
  follow_up_prompt: LexIntentFollowUpPrompt = None,
  id: str = None,
  parent_intent_signature: str = None,
  rejection_statement: LexIntentRejectionStatement = None,
  sample_utterances: typing.List[str] = None,
  slot: typing.Union[IResolvable, typing.List[LexIntentSlot]] = None,
  timeouts: LexIntentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.fulfillmentActivity">fulfillment_activity</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a></code> | fulfillment_activity block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.conclusionStatement">conclusion_statement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a></code> | conclusion_statement block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.confirmationPrompt">confirmation_prompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a></code> | confirmation_prompt block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.createVersion">create_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create_version LexIntent#create_version}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.dialogCodeHook">dialog_code_hook</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a></code> | dialog_code_hook block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.followUpPrompt">follow_up_prompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a></code> | follow_up_prompt block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#id LexIntent#id}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.parentIntentSignature">parent_intent_signature</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#parent_intent_signature LexIntent#parent_intent_signature}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.rejectionStatement">rejection_statement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a></code> | rejection_statement block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.sampleUtterances">sample_utterances</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.slot">slot</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>]]</code> | slot block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fulfillment_activity`<sup>Required</sup> <a name="fulfillment_activity" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.fulfillmentActivity"></a>

```python
fulfillment_activity: LexIntentFulfillmentActivity
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

fulfillment_activity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#fulfillment_activity LexIntent#fulfillment_activity}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}.

---

##### `conclusion_statement`<sup>Optional</sup> <a name="conclusion_statement" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.conclusionStatement"></a>

```python
conclusion_statement: LexIntentConclusionStatement
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

conclusion_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#conclusion_statement LexIntent#conclusion_statement}

---

##### `confirmation_prompt`<sup>Optional</sup> <a name="confirmation_prompt" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.confirmationPrompt"></a>

```python
confirmation_prompt: LexIntentConfirmationPrompt
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

confirmation_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#confirmation_prompt LexIntent#confirmation_prompt}

---

##### `create_version`<sup>Optional</sup> <a name="create_version" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.createVersion"></a>

```python
create_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create_version LexIntent#create_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}.

---

##### `dialog_code_hook`<sup>Optional</sup> <a name="dialog_code_hook" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.dialogCodeHook"></a>

```python
dialog_code_hook: LexIntentDialogCodeHook
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

dialog_code_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#dialog_code_hook LexIntent#dialog_code_hook}

---

##### `follow_up_prompt`<sup>Optional</sup> <a name="follow_up_prompt" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.followUpPrompt"></a>

```python
follow_up_prompt: LexIntentFollowUpPrompt
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

follow_up_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#follow_up_prompt LexIntent#follow_up_prompt}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#id LexIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent_intent_signature`<sup>Optional</sup> <a name="parent_intent_signature" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.parentIntentSignature"></a>

```python
parent_intent_signature: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#parent_intent_signature LexIntent#parent_intent_signature}.

---

##### `rejection_statement`<sup>Optional</sup> <a name="rejection_statement" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.rejectionStatement"></a>

```python
rejection_statement: LexIntentRejectionStatement
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

rejection_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#rejection_statement LexIntent#rejection_statement}

---

##### `sample_utterances`<sup>Optional</sup> <a name="sample_utterances" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.sampleUtterances"></a>

```python
sample_utterances: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}.

---

##### `slot`<sup>Optional</sup> <a name="slot" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.slot"></a>

```python
slot: typing.Union[IResolvable, typing.List[LexIntentSlot]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>]]

slot block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot LexIntent#slot}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.timeouts"></a>

```python
timeouts: LexIntentTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#timeouts LexIntent#timeouts}

---

### LexIntentConfirmationPrompt <a name="LexIntentConfirmationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentConfirmationPrompt(
  max_attempts: typing.Union[int, float],
  message: typing.Union[IResolvable, typing.List[LexIntentConfirmationPromptMessage]],
  response_card: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.message">message</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>]]</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.responseCard">response_card</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `max_attempts`<sup>Required</sup> <a name="max_attempts" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.maxAttempts"></a>

```python
max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}.

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.message"></a>

```python
message: typing.Union[IResolvable, typing.List[LexIntentConfirmationPromptMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>]]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `response_card`<sup>Optional</sup> <a name="response_card" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.responseCard"></a>

```python
response_card: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentConfirmationPromptMessage <a name="LexIntentConfirmationPromptMessage" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentConfirmationPromptMessage(
  content: str,
  content_type: str,
  group_number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.groupNumber">group_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `group_number`<sup>Optional</sup> <a name="group_number" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.groupNumber"></a>

```python
group_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentDialogCodeHook <a name="LexIntentDialogCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentDialogCodeHook(
  message_version: str,
  uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook.property.messageVersion">message_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message_version LexIntent#message_version}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#uri LexIntent#uri}. |

---

##### `message_version`<sup>Required</sup> <a name="message_version" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook.property.messageVersion"></a>

```python
message_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message_version LexIntent#message_version}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#uri LexIntent#uri}.

---

### LexIntentFollowUpPrompt <a name="LexIntentFollowUpPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentFollowUpPrompt(
  prompt: LexIntentFollowUpPromptPrompt,
  rejection_statement: LexIntentFollowUpPromptRejectionStatement
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt.property.prompt">prompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a></code> | prompt block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt.property.rejectionStatement">rejection_statement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a></code> | rejection_statement block. |

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt.property.prompt"></a>

```python
prompt: LexIntentFollowUpPromptPrompt
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a>

prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#prompt LexIntent#prompt}

---

##### `rejection_statement`<sup>Required</sup> <a name="rejection_statement" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt.property.rejectionStatement"></a>

```python
rejection_statement: LexIntentFollowUpPromptRejectionStatement
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a>

rejection_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#rejection_statement LexIntent#rejection_statement}

---

### LexIntentFollowUpPromptPrompt <a name="LexIntentFollowUpPromptPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentFollowUpPromptPrompt(
  max_attempts: typing.Union[int, float],
  message: typing.Union[IResolvable, typing.List[LexIntentFollowUpPromptPromptMessage]],
  response_card: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.message">message</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>]]</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.responseCard">response_card</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `max_attempts`<sup>Required</sup> <a name="max_attempts" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.maxAttempts"></a>

```python
max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}.

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.message"></a>

```python
message: typing.Union[IResolvable, typing.List[LexIntentFollowUpPromptPromptMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>]]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `response_card`<sup>Optional</sup> <a name="response_card" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.responseCard"></a>

```python
response_card: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentFollowUpPromptPromptMessage <a name="LexIntentFollowUpPromptPromptMessage" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentFollowUpPromptPromptMessage(
  content: str,
  content_type: str,
  group_number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.groupNumber">group_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `group_number`<sup>Optional</sup> <a name="group_number" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.groupNumber"></a>

```python
group_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentFollowUpPromptRejectionStatement <a name="LexIntentFollowUpPromptRejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentFollowUpPromptRejectionStatement(
  message: typing.Union[IResolvable, typing.List[LexIntentFollowUpPromptRejectionStatementMessage]],
  response_card: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement.property.message">message</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>]]</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement.property.responseCard">response_card</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement.property.message"></a>

```python
message: typing.Union[IResolvable, typing.List[LexIntentFollowUpPromptRejectionStatementMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>]]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `response_card`<sup>Optional</sup> <a name="response_card" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement.property.responseCard"></a>

```python
response_card: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentFollowUpPromptRejectionStatementMessage <a name="LexIntentFollowUpPromptRejectionStatementMessage" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentFollowUpPromptRejectionStatementMessage(
  content: str,
  content_type: str,
  group_number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.groupNumber">group_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `group_number`<sup>Optional</sup> <a name="group_number" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.groupNumber"></a>

```python
group_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentFulfillmentActivity <a name="LexIntentFulfillmentActivity" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentFulfillmentActivity(
  type: str,
  code_hook: LexIntentFulfillmentActivityCodeHook = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#type LexIntent#type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity.property.codeHook">code_hook</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a></code> | code_hook block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#type LexIntent#type}.

---

##### `code_hook`<sup>Optional</sup> <a name="code_hook" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity.property.codeHook"></a>

```python
code_hook: LexIntentFulfillmentActivityCodeHook
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a>

code_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#code_hook LexIntent#code_hook}

---

### LexIntentFulfillmentActivityCodeHook <a name="LexIntentFulfillmentActivityCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentFulfillmentActivityCodeHook(
  message_version: str,
  uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook.property.messageVersion">message_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message_version LexIntent#message_version}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#uri LexIntent#uri}. |

---

##### `message_version`<sup>Required</sup> <a name="message_version" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook.property.messageVersion"></a>

```python
message_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message_version LexIntent#message_version}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#uri LexIntent#uri}.

---

### LexIntentRejectionStatement <a name="LexIntentRejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentRejectionStatement(
  message: typing.Union[IResolvable, typing.List[LexIntentRejectionStatementMessage]],
  response_card: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement.property.message">message</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>]]</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement.property.responseCard">response_card</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement.property.message"></a>

```python
message: typing.Union[IResolvable, typing.List[LexIntentRejectionStatementMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>]]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `response_card`<sup>Optional</sup> <a name="response_card" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement.property.responseCard"></a>

```python
response_card: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentRejectionStatementMessage <a name="LexIntentRejectionStatementMessage" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentRejectionStatementMessage(
  content: str,
  content_type: str,
  group_number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.groupNumber">group_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `group_number`<sup>Optional</sup> <a name="group_number" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.groupNumber"></a>

```python
group_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentSlot <a name="LexIntentSlot" id="@cdktf/provider-aws.lexIntent.LexIntentSlot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentSlot(
  name: str,
  slot_constraint: str,
  slot_type: str,
  description: str = None,
  priority: typing.Union[int, float] = None,
  response_card: str = None,
  sample_utterances: typing.List[str] = None,
  slot_type_version: str = None,
  value_elicitation_prompt: LexIntentSlotValueElicitationPrompt = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotConstraint">slot_constraint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_constraint LexIntent#slot_constraint}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotType">slot_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_type LexIntent#slot_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#priority LexIntent#priority}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.responseCard">response_card</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.sampleUtterances">sample_utterances</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotTypeVersion">slot_type_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_type_version LexIntent#slot_type_version}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.valueElicitationPrompt">value_elicitation_prompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a></code> | value_elicitation_prompt block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}.

---

##### `slot_constraint`<sup>Required</sup> <a name="slot_constraint" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotConstraint"></a>

```python
slot_constraint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_constraint LexIntent#slot_constraint}.

---

##### `slot_type`<sup>Required</sup> <a name="slot_type" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotType"></a>

```python
slot_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_type LexIntent#slot_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#priority LexIntent#priority}.

---

##### `response_card`<sup>Optional</sup> <a name="response_card" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.responseCard"></a>

```python
response_card: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

##### `sample_utterances`<sup>Optional</sup> <a name="sample_utterances" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.sampleUtterances"></a>

```python
sample_utterances: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}.

---

##### `slot_type_version`<sup>Optional</sup> <a name="slot_type_version" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotTypeVersion"></a>

```python
slot_type_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_type_version LexIntent#slot_type_version}.

---

##### `value_elicitation_prompt`<sup>Optional</sup> <a name="value_elicitation_prompt" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.valueElicitationPrompt"></a>

```python
value_elicitation_prompt: LexIntentSlotValueElicitationPrompt
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a>

value_elicitation_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#value_elicitation_prompt LexIntent#value_elicitation_prompt}

---

### LexIntentSlotValueElicitationPrompt <a name="LexIntentSlotValueElicitationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentSlotValueElicitationPrompt(
  max_attempts: typing.Union[int, float],
  message: typing.Union[IResolvable, typing.List[LexIntentSlotValueElicitationPromptMessage]],
  response_card: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.message">message</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>]]</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.responseCard">response_card</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `max_attempts`<sup>Required</sup> <a name="max_attempts" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.maxAttempts"></a>

```python
max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}.

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.message"></a>

```python
message: typing.Union[IResolvable, typing.List[LexIntentSlotValueElicitationPromptMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>]]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `response_card`<sup>Optional</sup> <a name="response_card" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.responseCard"></a>

```python
response_card: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentSlotValueElicitationPromptMessage <a name="LexIntentSlotValueElicitationPromptMessage" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentSlotValueElicitationPromptMessage(
  content: str,
  content_type: str,
  group_number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.groupNumber">group_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `group_number`<sup>Optional</sup> <a name="group_number" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.groupNumber"></a>

```python
group_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentTimeouts <a name="LexIntentTimeouts" id="@cdktf/provider-aws.lexIntent.LexIntentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create LexIntent#create}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#delete LexIntent#delete}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#update LexIntent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create LexIntent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#delete LexIntent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#update LexIntent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LexIntentConclusionStatementMessageList <a name="LexIntentConclusionStatementMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentConclusionStatementMessageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LexIntentConclusionStatementMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LexIntentConclusionStatementMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>]]

---


### LexIntentConclusionStatementMessageOutputReference <a name="LexIntentConclusionStatementMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentConclusionStatementMessageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.resetGroupNumber">reset_group_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_number` <a name="reset_group_number" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.resetGroupNumber"></a>

```python
def reset_group_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.groupNumberInput">group_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.groupNumber">group_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `group_number_input`<sup>Optional</sup> <a name="group_number_input" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.groupNumberInput"></a>

```python
group_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `group_number`<sup>Required</sup> <a name="group_number" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.groupNumber"></a>

```python
group_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LexIntentConclusionStatementMessage, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>, cdktf.IResolvable]

---


### LexIntentConclusionStatementOutputReference <a name="LexIntentConclusionStatementOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentConclusionStatementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.putMessage">put_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.resetResponseCard">reset_response_card</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_message` <a name="put_message" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.putMessage"></a>

```python
def put_message(
  value: typing.Union[IResolvable, typing.List[LexIntentConclusionStatementMessage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.putMessage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>]]

---

##### `reset_response_card` <a name="reset_response_card" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.resetResponseCard"></a>

```python
def reset_response_card() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList">LexIntentConclusionStatementMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.messageInput">message_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.responseCardInput">response_card_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.responseCard">response_card</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.message"></a>

```python
message: LexIntentConclusionStatementMessageList
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList">LexIntentConclusionStatementMessageList</a>

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.messageInput"></a>

```python
message_input: typing.Union[IResolvable, typing.List[LexIntentConclusionStatementMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>]]

---

##### `response_card_input`<sup>Optional</sup> <a name="response_card_input" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.responseCardInput"></a>

```python
response_card_input: str
```

- *Type:* str

---

##### `response_card`<sup>Required</sup> <a name="response_card" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.responseCard"></a>

```python
response_card: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.internalValue"></a>

```python
internal_value: LexIntentConclusionStatement
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

---


### LexIntentConfirmationPromptMessageList <a name="LexIntentConfirmationPromptMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentConfirmationPromptMessageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LexIntentConfirmationPromptMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LexIntentConfirmationPromptMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>]]

---


### LexIntentConfirmationPromptMessageOutputReference <a name="LexIntentConfirmationPromptMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentConfirmationPromptMessageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resetGroupNumber">reset_group_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_number` <a name="reset_group_number" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resetGroupNumber"></a>

```python
def reset_group_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.groupNumberInput">group_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.groupNumber">group_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `group_number_input`<sup>Optional</sup> <a name="group_number_input" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.groupNumberInput"></a>

```python
group_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `group_number`<sup>Required</sup> <a name="group_number" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.groupNumber"></a>

```python
group_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LexIntentConfirmationPromptMessage, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>, cdktf.IResolvable]

---


### LexIntentConfirmationPromptOutputReference <a name="LexIntentConfirmationPromptOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentConfirmationPromptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.putMessage">put_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.resetResponseCard">reset_response_card</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_message` <a name="put_message" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.putMessage"></a>

```python
def put_message(
  value: typing.Union[IResolvable, typing.List[LexIntentConfirmationPromptMessage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.putMessage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>]]

---

##### `reset_response_card` <a name="reset_response_card" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.resetResponseCard"></a>

```python
def reset_response_card() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList">LexIntentConfirmationPromptMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.maxAttemptsInput">max_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.messageInput">message_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.responseCardInput">response_card_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.responseCard">response_card</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.message"></a>

```python
message: LexIntentConfirmationPromptMessageList
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList">LexIntentConfirmationPromptMessageList</a>

---

##### `max_attempts_input`<sup>Optional</sup> <a name="max_attempts_input" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.maxAttemptsInput"></a>

```python
max_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.messageInput"></a>

```python
message_input: typing.Union[IResolvable, typing.List[LexIntentConfirmationPromptMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>]]

---

##### `response_card_input`<sup>Optional</sup> <a name="response_card_input" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.responseCardInput"></a>

```python
response_card_input: str
```

- *Type:* str

---

##### `max_attempts`<sup>Required</sup> <a name="max_attempts" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.maxAttempts"></a>

```python
max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `response_card`<sup>Required</sup> <a name="response_card" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.responseCard"></a>

```python
response_card: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.internalValue"></a>

```python
internal_value: LexIntentConfirmationPrompt
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

---


### LexIntentDialogCodeHookOutputReference <a name="LexIntentDialogCodeHookOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentDialogCodeHookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.messageVersionInput">message_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.messageVersion">message_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_version_input`<sup>Optional</sup> <a name="message_version_input" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.messageVersionInput"></a>

```python
message_version_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `message_version`<sup>Required</sup> <a name="message_version" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.messageVersion"></a>

```python
message_version: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.internalValue"></a>

```python
internal_value: LexIntentDialogCodeHook
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

---


### LexIntentFollowUpPromptOutputReference <a name="LexIntentFollowUpPromptOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentFollowUpPromptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putPrompt">put_prompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putRejectionStatement">put_rejection_statement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_prompt` <a name="put_prompt" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putPrompt"></a>

```python
def put_prompt(
  max_attempts: typing.Union[int, float],
  message: typing.Union[IResolvable, typing.List[LexIntentFollowUpPromptPromptMessage]],
  response_card: str = None
) -> None
```

###### `max_attempts`<sup>Required</sup> <a name="max_attempts" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putPrompt.parameter.maxAttempts"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}.

---

###### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putPrompt.parameter.message"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>]]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

###### `response_card`<sup>Optional</sup> <a name="response_card" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putPrompt.parameter.responseCard"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

##### `put_rejection_statement` <a name="put_rejection_statement" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putRejectionStatement"></a>

```python
def put_rejection_statement(
  message: typing.Union[IResolvable, typing.List[LexIntentFollowUpPromptRejectionStatementMessage]],
  response_card: str = None
) -> None
```

###### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putRejectionStatement.parameter.message"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>]]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

###### `response_card`<sup>Optional</sup> <a name="response_card" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putRejectionStatement.parameter.responseCard"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.prompt">prompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference">LexIntentFollowUpPromptPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.rejectionStatement">rejection_statement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference">LexIntentFollowUpPromptRejectionStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.promptInput">prompt_input</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.rejectionStatementInput">rejection_statement_input</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.prompt"></a>

```python
prompt: LexIntentFollowUpPromptPromptOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference">LexIntentFollowUpPromptPromptOutputReference</a>

---

##### `rejection_statement`<sup>Required</sup> <a name="rejection_statement" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.rejectionStatement"></a>

```python
rejection_statement: LexIntentFollowUpPromptRejectionStatementOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference">LexIntentFollowUpPromptRejectionStatementOutputReference</a>

---

##### `prompt_input`<sup>Optional</sup> <a name="prompt_input" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.promptInput"></a>

```python
prompt_input: LexIntentFollowUpPromptPrompt
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a>

---

##### `rejection_statement_input`<sup>Optional</sup> <a name="rejection_statement_input" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.rejectionStatementInput"></a>

```python
rejection_statement_input: LexIntentFollowUpPromptRejectionStatement
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.internalValue"></a>

```python
internal_value: LexIntentFollowUpPrompt
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

---


### LexIntentFollowUpPromptPromptMessageList <a name="LexIntentFollowUpPromptPromptMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentFollowUpPromptPromptMessageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LexIntentFollowUpPromptPromptMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LexIntentFollowUpPromptPromptMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>]]

---


### LexIntentFollowUpPromptPromptMessageOutputReference <a name="LexIntentFollowUpPromptPromptMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resetGroupNumber">reset_group_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_number` <a name="reset_group_number" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resetGroupNumber"></a>

```python
def reset_group_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.groupNumberInput">group_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.groupNumber">group_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `group_number_input`<sup>Optional</sup> <a name="group_number_input" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.groupNumberInput"></a>

```python
group_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `group_number`<sup>Required</sup> <a name="group_number" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.groupNumber"></a>

```python
group_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LexIntentFollowUpPromptPromptMessage, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>, cdktf.IResolvable]

---


### LexIntentFollowUpPromptPromptOutputReference <a name="LexIntentFollowUpPromptPromptOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentFollowUpPromptPromptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.putMessage">put_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resetResponseCard">reset_response_card</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_message` <a name="put_message" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.putMessage"></a>

```python
def put_message(
  value: typing.Union[IResolvable, typing.List[LexIntentFollowUpPromptPromptMessage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.putMessage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>]]

---

##### `reset_response_card` <a name="reset_response_card" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resetResponseCard"></a>

```python
def reset_response_card() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList">LexIntentFollowUpPromptPromptMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.maxAttemptsInput">max_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.messageInput">message_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.responseCardInput">response_card_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.responseCard">response_card</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.message"></a>

```python
message: LexIntentFollowUpPromptPromptMessageList
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList">LexIntentFollowUpPromptPromptMessageList</a>

---

##### `max_attempts_input`<sup>Optional</sup> <a name="max_attempts_input" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.maxAttemptsInput"></a>

```python
max_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.messageInput"></a>

```python
message_input: typing.Union[IResolvable, typing.List[LexIntentFollowUpPromptPromptMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>]]

---

##### `response_card_input`<sup>Optional</sup> <a name="response_card_input" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.responseCardInput"></a>

```python
response_card_input: str
```

- *Type:* str

---

##### `max_attempts`<sup>Required</sup> <a name="max_attempts" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.maxAttempts"></a>

```python
max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `response_card`<sup>Required</sup> <a name="response_card" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.responseCard"></a>

```python
response_card: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.internalValue"></a>

```python
internal_value: LexIntentFollowUpPromptPrompt
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a>

---


### LexIntentFollowUpPromptRejectionStatementMessageList <a name="LexIntentFollowUpPromptRejectionStatementMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LexIntentFollowUpPromptRejectionStatementMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LexIntentFollowUpPromptRejectionStatementMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>]]

---


### LexIntentFollowUpPromptRejectionStatementMessageOutputReference <a name="LexIntentFollowUpPromptRejectionStatementMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resetGroupNumber">reset_group_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_number` <a name="reset_group_number" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resetGroupNumber"></a>

```python
def reset_group_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.groupNumberInput">group_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.groupNumber">group_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `group_number_input`<sup>Optional</sup> <a name="group_number_input" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.groupNumberInput"></a>

```python
group_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `group_number`<sup>Required</sup> <a name="group_number" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.groupNumber"></a>

```python
group_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LexIntentFollowUpPromptRejectionStatementMessage, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>, cdktf.IResolvable]

---


### LexIntentFollowUpPromptRejectionStatementOutputReference <a name="LexIntentFollowUpPromptRejectionStatementOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.putMessage">put_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resetResponseCard">reset_response_card</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_message` <a name="put_message" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.putMessage"></a>

```python
def put_message(
  value: typing.Union[IResolvable, typing.List[LexIntentFollowUpPromptRejectionStatementMessage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.putMessage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>]]

---

##### `reset_response_card` <a name="reset_response_card" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resetResponseCard"></a>

```python
def reset_response_card() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList">LexIntentFollowUpPromptRejectionStatementMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.messageInput">message_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.responseCardInput">response_card_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.responseCard">response_card</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.message"></a>

```python
message: LexIntentFollowUpPromptRejectionStatementMessageList
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList">LexIntentFollowUpPromptRejectionStatementMessageList</a>

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.messageInput"></a>

```python
message_input: typing.Union[IResolvable, typing.List[LexIntentFollowUpPromptRejectionStatementMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>]]

---

##### `response_card_input`<sup>Optional</sup> <a name="response_card_input" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.responseCardInput"></a>

```python
response_card_input: str
```

- *Type:* str

---

##### `response_card`<sup>Required</sup> <a name="response_card" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.responseCard"></a>

```python
response_card: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.internalValue"></a>

```python
internal_value: LexIntentFollowUpPromptRejectionStatement
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a>

---


### LexIntentFulfillmentActivityCodeHookOutputReference <a name="LexIntentFulfillmentActivityCodeHookOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.messageVersionInput">message_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.messageVersion">message_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_version_input`<sup>Optional</sup> <a name="message_version_input" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.messageVersionInput"></a>

```python
message_version_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `message_version`<sup>Required</sup> <a name="message_version" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.messageVersion"></a>

```python
message_version: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.internalValue"></a>

```python
internal_value: LexIntentFulfillmentActivityCodeHook
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a>

---


### LexIntentFulfillmentActivityOutputReference <a name="LexIntentFulfillmentActivityOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentFulfillmentActivityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.putCodeHook">put_code_hook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.resetCodeHook">reset_code_hook</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_code_hook` <a name="put_code_hook" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.putCodeHook"></a>

```python
def put_code_hook(
  message_version: str,
  uri: str
) -> None
```

###### `message_version`<sup>Required</sup> <a name="message_version" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.putCodeHook.parameter.messageVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message_version LexIntent#message_version}.

---

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.putCodeHook.parameter.uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#uri LexIntent#uri}.

---

##### `reset_code_hook` <a name="reset_code_hook" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.resetCodeHook"></a>

```python
def reset_code_hook() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.codeHook">code_hook</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference">LexIntentFulfillmentActivityCodeHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.codeHookInput">code_hook_input</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_hook`<sup>Required</sup> <a name="code_hook" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.codeHook"></a>

```python
code_hook: LexIntentFulfillmentActivityCodeHookOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference">LexIntentFulfillmentActivityCodeHookOutputReference</a>

---

##### `code_hook_input`<sup>Optional</sup> <a name="code_hook_input" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.codeHookInput"></a>

```python
code_hook_input: LexIntentFulfillmentActivityCodeHook
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.internalValue"></a>

```python
internal_value: LexIntentFulfillmentActivity
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

---


### LexIntentRejectionStatementMessageList <a name="LexIntentRejectionStatementMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentRejectionStatementMessageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LexIntentRejectionStatementMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LexIntentRejectionStatementMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>]]

---


### LexIntentRejectionStatementMessageOutputReference <a name="LexIntentRejectionStatementMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentRejectionStatementMessageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.resetGroupNumber">reset_group_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_number` <a name="reset_group_number" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.resetGroupNumber"></a>

```python
def reset_group_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.groupNumberInput">group_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.groupNumber">group_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `group_number_input`<sup>Optional</sup> <a name="group_number_input" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.groupNumberInput"></a>

```python
group_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `group_number`<sup>Required</sup> <a name="group_number" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.groupNumber"></a>

```python
group_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LexIntentRejectionStatementMessage, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>, cdktf.IResolvable]

---


### LexIntentRejectionStatementOutputReference <a name="LexIntentRejectionStatementOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentRejectionStatementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.putMessage">put_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.resetResponseCard">reset_response_card</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_message` <a name="put_message" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.putMessage"></a>

```python
def put_message(
  value: typing.Union[IResolvable, typing.List[LexIntentRejectionStatementMessage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.putMessage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>]]

---

##### `reset_response_card` <a name="reset_response_card" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.resetResponseCard"></a>

```python
def reset_response_card() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList">LexIntentRejectionStatementMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.messageInput">message_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.responseCardInput">response_card_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.responseCard">response_card</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.message"></a>

```python
message: LexIntentRejectionStatementMessageList
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList">LexIntentRejectionStatementMessageList</a>

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.messageInput"></a>

```python
message_input: typing.Union[IResolvable, typing.List[LexIntentRejectionStatementMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>]]

---

##### `response_card_input`<sup>Optional</sup> <a name="response_card_input" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.responseCardInput"></a>

```python
response_card_input: str
```

- *Type:* str

---

##### `response_card`<sup>Required</sup> <a name="response_card" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.responseCard"></a>

```python
response_card: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.internalValue"></a>

```python
internal_value: LexIntentRejectionStatement
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

---


### LexIntentSlotList <a name="LexIntentSlotList" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentSlotList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LexIntentSlotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LexIntentSlot]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>]]

---


### LexIntentSlotOutputReference <a name="LexIntentSlotOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentSlotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.putValueElicitationPrompt">put_value_elicitation_prompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetResponseCard">reset_response_card</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetSampleUtterances">reset_sample_utterances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetSlotTypeVersion">reset_slot_type_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetValueElicitationPrompt">reset_value_elicitation_prompt</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_elicitation_prompt` <a name="put_value_elicitation_prompt" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.putValueElicitationPrompt"></a>

```python
def put_value_elicitation_prompt(
  max_attempts: typing.Union[int, float],
  message: typing.Union[IResolvable, typing.List[LexIntentSlotValueElicitationPromptMessage]],
  response_card: str = None
) -> None
```

###### `max_attempts`<sup>Required</sup> <a name="max_attempts" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.putValueElicitationPrompt.parameter.maxAttempts"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}.

---

###### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.putValueElicitationPrompt.parameter.message"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>]]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

###### `response_card`<sup>Optional</sup> <a name="response_card" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.putValueElicitationPrompt.parameter.responseCard"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_response_card` <a name="reset_response_card" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetResponseCard"></a>

```python
def reset_response_card() -> None
```

##### `reset_sample_utterances` <a name="reset_sample_utterances" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetSampleUtterances"></a>

```python
def reset_sample_utterances() -> None
```

##### `reset_slot_type_version` <a name="reset_slot_type_version" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetSlotTypeVersion"></a>

```python
def reset_slot_type_version() -> None
```

##### `reset_value_elicitation_prompt` <a name="reset_value_elicitation_prompt" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetValueElicitationPrompt"></a>

```python
def reset_value_elicitation_prompt() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.valueElicitationPrompt">value_elicitation_prompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference">LexIntentSlotValueElicitationPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.responseCardInput">response_card_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.sampleUtterancesInput">sample_utterances_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotConstraintInput">slot_constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeInput">slot_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeVersionInput">slot_type_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.valueElicitationPromptInput">value_elicitation_prompt_input</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.responseCard">response_card</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.sampleUtterances">sample_utterances</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotConstraint">slot_constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotType">slot_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeVersion">slot_type_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_elicitation_prompt`<sup>Required</sup> <a name="value_elicitation_prompt" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.valueElicitationPrompt"></a>

```python
value_elicitation_prompt: LexIntentSlotValueElicitationPromptOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference">LexIntentSlotValueElicitationPromptOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `response_card_input`<sup>Optional</sup> <a name="response_card_input" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.responseCardInput"></a>

```python
response_card_input: str
```

- *Type:* str

---

##### `sample_utterances_input`<sup>Optional</sup> <a name="sample_utterances_input" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.sampleUtterancesInput"></a>

```python
sample_utterances_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `slot_constraint_input`<sup>Optional</sup> <a name="slot_constraint_input" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotConstraintInput"></a>

```python
slot_constraint_input: str
```

- *Type:* str

---

##### `slot_type_input`<sup>Optional</sup> <a name="slot_type_input" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeInput"></a>

```python
slot_type_input: str
```

- *Type:* str

---

##### `slot_type_version_input`<sup>Optional</sup> <a name="slot_type_version_input" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeVersionInput"></a>

```python
slot_type_version_input: str
```

- *Type:* str

---

##### `value_elicitation_prompt_input`<sup>Optional</sup> <a name="value_elicitation_prompt_input" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.valueElicitationPromptInput"></a>

```python
value_elicitation_prompt_input: LexIntentSlotValueElicitationPrompt
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `response_card`<sup>Required</sup> <a name="response_card" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.responseCard"></a>

```python
response_card: str
```

- *Type:* str

---

##### `sample_utterances`<sup>Required</sup> <a name="sample_utterances" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.sampleUtterances"></a>

```python
sample_utterances: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `slot_constraint`<sup>Required</sup> <a name="slot_constraint" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotConstraint"></a>

```python
slot_constraint: str
```

- *Type:* str

---

##### `slot_type`<sup>Required</sup> <a name="slot_type" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotType"></a>

```python
slot_type: str
```

- *Type:* str

---

##### `slot_type_version`<sup>Required</sup> <a name="slot_type_version" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeVersion"></a>

```python
slot_type_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LexIntentSlot, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>, cdktf.IResolvable]

---


### LexIntentSlotValueElicitationPromptMessageList <a name="LexIntentSlotValueElicitationPromptMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentSlotValueElicitationPromptMessageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LexIntentSlotValueElicitationPromptMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LexIntentSlotValueElicitationPromptMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>]]

---


### LexIntentSlotValueElicitationPromptMessageOutputReference <a name="LexIntentSlotValueElicitationPromptMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resetGroupNumber">reset_group_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_number` <a name="reset_group_number" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resetGroupNumber"></a>

```python
def reset_group_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.groupNumberInput">group_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.groupNumber">group_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `group_number_input`<sup>Optional</sup> <a name="group_number_input" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.groupNumberInput"></a>

```python
group_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `group_number`<sup>Required</sup> <a name="group_number" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.groupNumber"></a>

```python
group_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LexIntentSlotValueElicitationPromptMessage, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>, cdktf.IResolvable]

---


### LexIntentSlotValueElicitationPromptOutputReference <a name="LexIntentSlotValueElicitationPromptOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentSlotValueElicitationPromptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.putMessage">put_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resetResponseCard">reset_response_card</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_message` <a name="put_message" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.putMessage"></a>

```python
def put_message(
  value: typing.Union[IResolvable, typing.List[LexIntentSlotValueElicitationPromptMessage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.putMessage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>]]

---

##### `reset_response_card` <a name="reset_response_card" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resetResponseCard"></a>

```python
def reset_response_card() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList">LexIntentSlotValueElicitationPromptMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.maxAttemptsInput">max_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.messageInput">message_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.responseCardInput">response_card_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.responseCard">response_card</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.message"></a>

```python
message: LexIntentSlotValueElicitationPromptMessageList
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList">LexIntentSlotValueElicitationPromptMessageList</a>

---

##### `max_attempts_input`<sup>Optional</sup> <a name="max_attempts_input" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.maxAttemptsInput"></a>

```python
max_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.messageInput"></a>

```python
message_input: typing.Union[IResolvable, typing.List[LexIntentSlotValueElicitationPromptMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>]]

---

##### `response_card_input`<sup>Optional</sup> <a name="response_card_input" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.responseCardInput"></a>

```python
response_card_input: str
```

- *Type:* str

---

##### `max_attempts`<sup>Required</sup> <a name="max_attempts" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.maxAttempts"></a>

```python
max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `response_card`<sup>Required</sup> <a name="response_card" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.responseCard"></a>

```python
response_card: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.internalValue"></a>

```python
internal_value: LexIntentSlotValueElicitationPrompt
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a>

---


### LexIntentTimeoutsOutputReference <a name="LexIntentTimeoutsOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lex_intent

lexIntent.LexIntentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LexIntentTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a>, cdktf.IResolvable]

---



