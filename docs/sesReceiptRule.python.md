# `sesReceiptRule` Submodule <a name="`sesReceiptRule` Submodule" id="@cdktf/provider-aws.sesReceiptRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesReceiptRule <a name="SesReceiptRule" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule aws_ses_receipt_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  rule_set_name: str,
  add_header_action: typing.Union[IResolvable, typing.List[SesReceiptRuleAddHeaderAction]] = None,
  after: str = None,
  bounce_action: typing.Union[IResolvable, typing.List[SesReceiptRuleBounceAction]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  lambda_action: typing.Union[IResolvable, typing.List[SesReceiptRuleLambdaAction]] = None,
  recipients: typing.List[str] = None,
  s3_action: typing.Union[IResolvable, typing.List[SesReceiptRuleS3Action]] = None,
  scan_enabled: typing.Union[bool, IResolvable] = None,
  sns_action: typing.Union[IResolvable, typing.List[SesReceiptRuleSnsAction]] = None,
  stop_action: typing.Union[IResolvable, typing.List[SesReceiptRuleStopAction]] = None,
  tls_policy: str = None,
  workmail_action: typing.Union[IResolvable, typing.List[SesReceiptRuleWorkmailAction]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#name SesReceiptRule#name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.ruleSetName">rule_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#rule_set_name SesReceiptRule#rule_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.addHeaderAction">add_header_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>]]</code> | add_header_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.after">after</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#after SesReceiptRule#after}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.bounceAction">bounce_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>]]</code> | bounce_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#enabled SesReceiptRule#enabled}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#id SesReceiptRule#id}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.lambdaAction">lambda_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>]]</code> | lambda_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.recipients">recipients</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#recipients SesReceiptRule#recipients}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.s3Action">s3_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>]]</code> | s3_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.scanEnabled">scan_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scan_enabled SesReceiptRule#scan_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.snsAction">sns_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>]]</code> | sns_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.stopAction">stop_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>]]</code> | stop_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.tlsPolicy">tls_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#tls_policy SesReceiptRule#tls_policy}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.workmailAction">workmail_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>]]</code> | workmail_action block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#name SesReceiptRule#name}.

---

##### `rule_set_name`<sup>Required</sup> <a name="rule_set_name" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.ruleSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#rule_set_name SesReceiptRule#rule_set_name}.

---

##### `add_header_action`<sup>Optional</sup> <a name="add_header_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.addHeaderAction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>]]

add_header_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#add_header_action SesReceiptRule#add_header_action}

---

##### `after`<sup>Optional</sup> <a name="after" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.after"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#after SesReceiptRule#after}.

---

##### `bounce_action`<sup>Optional</sup> <a name="bounce_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.bounceAction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>]]

bounce_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#bounce_action SesReceiptRule#bounce_action}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#enabled SesReceiptRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#id SesReceiptRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambda_action`<sup>Optional</sup> <a name="lambda_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.lambdaAction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>]]

lambda_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#lambda_action SesReceiptRule#lambda_action}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.recipients"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#recipients SesReceiptRule#recipients}.

---

##### `s3_action`<sup>Optional</sup> <a name="s3_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.s3Action"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>]]

s3_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#s3_action SesReceiptRule#s3_action}

---

##### `scan_enabled`<sup>Optional</sup> <a name="scan_enabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.scanEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scan_enabled SesReceiptRule#scan_enabled}.

---

##### `sns_action`<sup>Optional</sup> <a name="sns_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.snsAction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>]]

sns_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#sns_action SesReceiptRule#sns_action}

---

##### `stop_action`<sup>Optional</sup> <a name="stop_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.stopAction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>]]

stop_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#stop_action SesReceiptRule#stop_action}

---

##### `tls_policy`<sup>Optional</sup> <a name="tls_policy" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.tlsPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#tls_policy SesReceiptRule#tls_policy}.

---

##### `workmail_action`<sup>Optional</sup> <a name="workmail_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.workmailAction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>]]

workmail_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#workmail_action SesReceiptRule#workmail_action}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putAddHeaderAction">put_add_header_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putBounceAction">put_bounce_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putLambdaAction">put_lambda_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putS3Action">put_s3_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putSnsAction">put_sns_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putStopAction">put_stop_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putWorkmailAction">put_workmail_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetAddHeaderAction">reset_add_header_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetAfter">reset_after</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetBounceAction">reset_bounce_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetLambdaAction">reset_lambda_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetRecipients">reset_recipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetS3Action">reset_s3_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetScanEnabled">reset_scan_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetSnsAction">reset_sns_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetStopAction">reset_stop_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetTlsPolicy">reset_tls_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetWorkmailAction">reset_workmail_action</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_add_header_action` <a name="put_add_header_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putAddHeaderAction"></a>

```python
def put_add_header_action(
  value: typing.Union[IResolvable, typing.List[SesReceiptRuleAddHeaderAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putAddHeaderAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>]]

---

##### `put_bounce_action` <a name="put_bounce_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putBounceAction"></a>

```python
def put_bounce_action(
  value: typing.Union[IResolvable, typing.List[SesReceiptRuleBounceAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putBounceAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>]]

---

##### `put_lambda_action` <a name="put_lambda_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putLambdaAction"></a>

```python
def put_lambda_action(
  value: typing.Union[IResolvable, typing.List[SesReceiptRuleLambdaAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putLambdaAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>]]

---

##### `put_s3_action` <a name="put_s3_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putS3Action"></a>

```python
def put_s3_action(
  value: typing.Union[IResolvable, typing.List[SesReceiptRuleS3Action]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putS3Action.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>]]

---

##### `put_sns_action` <a name="put_sns_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putSnsAction"></a>

```python
def put_sns_action(
  value: typing.Union[IResolvable, typing.List[SesReceiptRuleSnsAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putSnsAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>]]

---

##### `put_stop_action` <a name="put_stop_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putStopAction"></a>

```python
def put_stop_action(
  value: typing.Union[IResolvable, typing.List[SesReceiptRuleStopAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putStopAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>]]

---

##### `put_workmail_action` <a name="put_workmail_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putWorkmailAction"></a>

```python
def put_workmail_action(
  value: typing.Union[IResolvable, typing.List[SesReceiptRuleWorkmailAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putWorkmailAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>]]

---

##### `reset_add_header_action` <a name="reset_add_header_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetAddHeaderAction"></a>

```python
def reset_add_header_action() -> None
```

##### `reset_after` <a name="reset_after" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetAfter"></a>

```python
def reset_after() -> None
```

##### `reset_bounce_action` <a name="reset_bounce_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetBounceAction"></a>

```python
def reset_bounce_action() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lambda_action` <a name="reset_lambda_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetLambdaAction"></a>

```python
def reset_lambda_action() -> None
```

##### `reset_recipients` <a name="reset_recipients" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetRecipients"></a>

```python
def reset_recipients() -> None
```

##### `reset_s3_action` <a name="reset_s3_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetS3Action"></a>

```python
def reset_s3_action() -> None
```

##### `reset_scan_enabled` <a name="reset_scan_enabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetScanEnabled"></a>

```python
def reset_scan_enabled() -> None
```

##### `reset_sns_action` <a name="reset_sns_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetSnsAction"></a>

```python
def reset_sns_action() -> None
```

##### `reset_stop_action` <a name="reset_stop_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetStopAction"></a>

```python
def reset_stop_action() -> None
```

##### `reset_tls_policy` <a name="reset_tls_policy" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetTlsPolicy"></a>

```python
def reset_tls_policy() -> None
```

##### `reset_workmail_action` <a name="reset_workmail_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetWorkmailAction"></a>

```python
def reset_workmail_action() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.addHeaderAction">add_header_action</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList">SesReceiptRuleAddHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.bounceAction">bounce_action</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList">SesReceiptRuleBounceActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lambdaAction">lambda_action</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList">SesReceiptRuleLambdaActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.s3Action">s3_action</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList">SesReceiptRuleS3ActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.snsAction">sns_action</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList">SesReceiptRuleSnsActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.stopAction">stop_action</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList">SesReceiptRuleStopActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.workmailAction">workmail_action</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList">SesReceiptRuleWorkmailActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.addHeaderActionInput">add_header_action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.afterInput">after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.bounceActionInput">bounce_action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lambdaActionInput">lambda_action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.recipientsInput">recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.ruleSetNameInput">rule_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.s3ActionInput">s3_action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.scanEnabledInput">scan_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.snsActionInput">sns_action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.stopActionInput">stop_action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tlsPolicyInput">tls_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.workmailActionInput">workmail_action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.after">after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.recipients">recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.ruleSetName">rule_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.scanEnabled">scan_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tlsPolicy">tls_policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `add_header_action`<sup>Required</sup> <a name="add_header_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.addHeaderAction"></a>

```python
add_header_action: SesReceiptRuleAddHeaderActionList
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList">SesReceiptRuleAddHeaderActionList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `bounce_action`<sup>Required</sup> <a name="bounce_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.bounceAction"></a>

```python
bounce_action: SesReceiptRuleBounceActionList
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList">SesReceiptRuleBounceActionList</a>

---

##### `lambda_action`<sup>Required</sup> <a name="lambda_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lambdaAction"></a>

```python
lambda_action: SesReceiptRuleLambdaActionList
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList">SesReceiptRuleLambdaActionList</a>

---

##### `s3_action`<sup>Required</sup> <a name="s3_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.s3Action"></a>

```python
s3_action: SesReceiptRuleS3ActionList
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList">SesReceiptRuleS3ActionList</a>

---

##### `sns_action`<sup>Required</sup> <a name="sns_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.snsAction"></a>

```python
sns_action: SesReceiptRuleSnsActionList
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList">SesReceiptRuleSnsActionList</a>

---

##### `stop_action`<sup>Required</sup> <a name="stop_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.stopAction"></a>

```python
stop_action: SesReceiptRuleStopActionList
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList">SesReceiptRuleStopActionList</a>

---

##### `workmail_action`<sup>Required</sup> <a name="workmail_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.workmailAction"></a>

```python
workmail_action: SesReceiptRuleWorkmailActionList
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList">SesReceiptRuleWorkmailActionList</a>

---

##### `add_header_action_input`<sup>Optional</sup> <a name="add_header_action_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.addHeaderActionInput"></a>

```python
add_header_action_input: typing.Union[IResolvable, typing.List[SesReceiptRuleAddHeaderAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>]]

---

##### `after_input`<sup>Optional</sup> <a name="after_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.afterInput"></a>

```python
after_input: str
```

- *Type:* str

---

##### `bounce_action_input`<sup>Optional</sup> <a name="bounce_action_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.bounceActionInput"></a>

```python
bounce_action_input: typing.Union[IResolvable, typing.List[SesReceiptRuleBounceAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>]]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lambda_action_input`<sup>Optional</sup> <a name="lambda_action_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lambdaActionInput"></a>

```python
lambda_action_input: typing.Union[IResolvable, typing.List[SesReceiptRuleLambdaAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recipients_input`<sup>Optional</sup> <a name="recipients_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.recipientsInput"></a>

```python
recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_set_name_input`<sup>Optional</sup> <a name="rule_set_name_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.ruleSetNameInput"></a>

```python
rule_set_name_input: str
```

- *Type:* str

---

##### `s3_action_input`<sup>Optional</sup> <a name="s3_action_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.s3ActionInput"></a>

```python
s3_action_input: typing.Union[IResolvable, typing.List[SesReceiptRuleS3Action]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>]]

---

##### `scan_enabled_input`<sup>Optional</sup> <a name="scan_enabled_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.scanEnabledInput"></a>

```python
scan_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sns_action_input`<sup>Optional</sup> <a name="sns_action_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.snsActionInput"></a>

```python
sns_action_input: typing.Union[IResolvable, typing.List[SesReceiptRuleSnsAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>]]

---

##### `stop_action_input`<sup>Optional</sup> <a name="stop_action_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.stopActionInput"></a>

```python
stop_action_input: typing.Union[IResolvable, typing.List[SesReceiptRuleStopAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>]]

---

##### `tls_policy_input`<sup>Optional</sup> <a name="tls_policy_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tlsPolicyInput"></a>

```python
tls_policy_input: str
```

- *Type:* str

---

##### `workmail_action_input`<sup>Optional</sup> <a name="workmail_action_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.workmailActionInput"></a>

```python
workmail_action_input: typing.Union[IResolvable, typing.List[SesReceiptRuleWorkmailAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>]]

---

##### `after`<sup>Required</sup> <a name="after" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.after"></a>

```python
after: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.recipients"></a>

```python
recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_set_name`<sup>Required</sup> <a name="rule_set_name" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.ruleSetName"></a>

```python
rule_set_name: str
```

- *Type:* str

---

##### `scan_enabled`<sup>Required</sup> <a name="scan_enabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.scanEnabled"></a>

```python
scan_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_policy`<sup>Required</sup> <a name="tls_policy" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tlsPolicy"></a>

```python
tls_policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SesReceiptRuleAddHeaderAction <a name="SesReceiptRuleAddHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleAddHeaderAction(
  header_name: str,
  header_value: str,
  position: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.headerName">header_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_name SesReceiptRule#header_name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.headerValue">header_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_value SesReceiptRule#header_value}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_name SesReceiptRule#header_name}.

---

##### `header_value`<sup>Required</sup> <a name="header_value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.headerValue"></a>

```python
header_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_value SesReceiptRule#header_value}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

### SesReceiptRuleBounceAction <a name="SesReceiptRuleBounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleBounceAction(
  message: str,
  position: typing.Union[int, float],
  sender: str,
  smtp_reply_code: str,
  status_code: str = None,
  topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#message SesReceiptRule#message}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.sender">sender</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#sender SesReceiptRule#sender}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.smtpReplyCode">smtp_reply_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#smtp_reply_code SesReceiptRule#smtp_reply_code}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.statusCode">status_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#status_code SesReceiptRule#status_code}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.topicArn">topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#message SesReceiptRule#message}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `sender`<sup>Required</sup> <a name="sender" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.sender"></a>

```python
sender: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#sender SesReceiptRule#sender}.

---

##### `smtp_reply_code`<sup>Required</sup> <a name="smtp_reply_code" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.smtpReplyCode"></a>

```python
smtp_reply_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#smtp_reply_code SesReceiptRule#smtp_reply_code}.

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#status_code SesReceiptRule#status_code}.

---

##### `topic_arn`<sup>Optional</sup> <a name="topic_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

### SesReceiptRuleConfig <a name="SesReceiptRuleConfig" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  rule_set_name: str,
  add_header_action: typing.Union[IResolvable, typing.List[SesReceiptRuleAddHeaderAction]] = None,
  after: str = None,
  bounce_action: typing.Union[IResolvable, typing.List[SesReceiptRuleBounceAction]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  lambda_action: typing.Union[IResolvable, typing.List[SesReceiptRuleLambdaAction]] = None,
  recipients: typing.List[str] = None,
  s3_action: typing.Union[IResolvable, typing.List[SesReceiptRuleS3Action]] = None,
  scan_enabled: typing.Union[bool, IResolvable] = None,
  sns_action: typing.Union[IResolvable, typing.List[SesReceiptRuleSnsAction]] = None,
  stop_action: typing.Union[IResolvable, typing.List[SesReceiptRuleStopAction]] = None,
  tls_policy: str = None,
  workmail_action: typing.Union[IResolvable, typing.List[SesReceiptRuleWorkmailAction]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#name SesReceiptRule#name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.ruleSetName">rule_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#rule_set_name SesReceiptRule#rule_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.addHeaderAction">add_header_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>]]</code> | add_header_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.after">after</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#after SesReceiptRule#after}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.bounceAction">bounce_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>]]</code> | bounce_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#enabled SesReceiptRule#enabled}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#id SesReceiptRule#id}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.lambdaAction">lambda_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>]]</code> | lambda_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.recipients">recipients</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#recipients SesReceiptRule#recipients}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.s3Action">s3_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>]]</code> | s3_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.scanEnabled">scan_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scan_enabled SesReceiptRule#scan_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.snsAction">sns_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>]]</code> | sns_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.stopAction">stop_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>]]</code> | stop_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.tlsPolicy">tls_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#tls_policy SesReceiptRule#tls_policy}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.workmailAction">workmail_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>]]</code> | workmail_action block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#name SesReceiptRule#name}.

---

##### `rule_set_name`<sup>Required</sup> <a name="rule_set_name" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.ruleSetName"></a>

```python
rule_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#rule_set_name SesReceiptRule#rule_set_name}.

---

##### `add_header_action`<sup>Optional</sup> <a name="add_header_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.addHeaderAction"></a>

```python
add_header_action: typing.Union[IResolvable, typing.List[SesReceiptRuleAddHeaderAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>]]

add_header_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#add_header_action SesReceiptRule#add_header_action}

---

##### `after`<sup>Optional</sup> <a name="after" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.after"></a>

```python
after: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#after SesReceiptRule#after}.

---

##### `bounce_action`<sup>Optional</sup> <a name="bounce_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.bounceAction"></a>

```python
bounce_action: typing.Union[IResolvable, typing.List[SesReceiptRuleBounceAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>]]

bounce_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#bounce_action SesReceiptRule#bounce_action}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#enabled SesReceiptRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#id SesReceiptRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambda_action`<sup>Optional</sup> <a name="lambda_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.lambdaAction"></a>

```python
lambda_action: typing.Union[IResolvable, typing.List[SesReceiptRuleLambdaAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>]]

lambda_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#lambda_action SesReceiptRule#lambda_action}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.recipients"></a>

```python
recipients: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#recipients SesReceiptRule#recipients}.

---

##### `s3_action`<sup>Optional</sup> <a name="s3_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.s3Action"></a>

```python
s3_action: typing.Union[IResolvable, typing.List[SesReceiptRuleS3Action]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>]]

s3_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#s3_action SesReceiptRule#s3_action}

---

##### `scan_enabled`<sup>Optional</sup> <a name="scan_enabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.scanEnabled"></a>

```python
scan_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scan_enabled SesReceiptRule#scan_enabled}.

---

##### `sns_action`<sup>Optional</sup> <a name="sns_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.snsAction"></a>

```python
sns_action: typing.Union[IResolvable, typing.List[SesReceiptRuleSnsAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>]]

sns_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#sns_action SesReceiptRule#sns_action}

---

##### `stop_action`<sup>Optional</sup> <a name="stop_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.stopAction"></a>

```python
stop_action: typing.Union[IResolvable, typing.List[SesReceiptRuleStopAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>]]

stop_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#stop_action SesReceiptRule#stop_action}

---

##### `tls_policy`<sup>Optional</sup> <a name="tls_policy" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.tlsPolicy"></a>

```python
tls_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#tls_policy SesReceiptRule#tls_policy}.

---

##### `workmail_action`<sup>Optional</sup> <a name="workmail_action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.workmailAction"></a>

```python
workmail_action: typing.Union[IResolvable, typing.List[SesReceiptRuleWorkmailAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>]]

workmail_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#workmail_action SesReceiptRule#workmail_action}

---

### SesReceiptRuleLambdaAction <a name="SesReceiptRuleLambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleLambdaAction(
  function_arn: str,
  position: typing.Union[int, float],
  invocation_type: str = None,
  topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.functionArn">function_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#function_arn SesReceiptRule#function_arn}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.invocationType">invocation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#invocation_type SesReceiptRule#invocation_type}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.topicArn">topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#function_arn SesReceiptRule#function_arn}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `invocation_type`<sup>Optional</sup> <a name="invocation_type" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.invocationType"></a>

```python
invocation_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#invocation_type SesReceiptRule#invocation_type}.

---

##### `topic_arn`<sup>Optional</sup> <a name="topic_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

### SesReceiptRuleS3Action <a name="SesReceiptRuleS3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleS3Action(
  bucket_name: str,
  position: typing.Union[int, float],
  kms_key_arn: str = None,
  object_key_prefix: str = None,
  topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#bucket_name SesReceiptRule#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#kms_key_arn SesReceiptRule#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.objectKeyPrefix">object_key_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#object_key_prefix SesReceiptRule#object_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.topicArn">topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#bucket_name SesReceiptRule#bucket_name}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#kms_key_arn SesReceiptRule#kms_key_arn}.

---

##### `object_key_prefix`<sup>Optional</sup> <a name="object_key_prefix" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.objectKeyPrefix"></a>

```python
object_key_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#object_key_prefix SesReceiptRule#object_key_prefix}.

---

##### `topic_arn`<sup>Optional</sup> <a name="topic_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

### SesReceiptRuleSnsAction <a name="SesReceiptRuleSnsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleSnsAction(
  position: typing.Union[int, float],
  topic_arn: str,
  encoding: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.topicArn">topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.encoding">encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#encoding SesReceiptRule#encoding}. |

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#encoding SesReceiptRule#encoding}.

---

### SesReceiptRuleStopAction <a name="SesReceiptRuleStopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleStopAction(
  position: typing.Union[int, float],
  scope: str,
  topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scope SesReceiptRule#scope}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.topicArn">topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scope SesReceiptRule#scope}.

---

##### `topic_arn`<sup>Optional</sup> <a name="topic_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

### SesReceiptRuleWorkmailAction <a name="SesReceiptRuleWorkmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleWorkmailAction(
  organization_arn: str,
  position: typing.Union[int, float],
  topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.organizationArn">organization_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#organization_arn SesReceiptRule#organization_arn}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.topicArn">topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `organization_arn`<sup>Required</sup> <a name="organization_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.organizationArn"></a>

```python
organization_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#organization_arn SesReceiptRule#organization_arn}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `topic_arn`<sup>Optional</sup> <a name="topic_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesReceiptRuleAddHeaderActionList <a name="SesReceiptRuleAddHeaderActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleAddHeaderActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SesReceiptRuleAddHeaderActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SesReceiptRuleAddHeaderAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>]]

---


### SesReceiptRuleAddHeaderActionOutputReference <a name="SesReceiptRuleAddHeaderActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerNameInput">header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerValueInput">header_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerValue">header_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_name_input`<sup>Optional</sup> <a name="header_name_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerNameInput"></a>

```python
header_name_input: str
```

- *Type:* str

---

##### `header_value_input`<sup>Optional</sup> <a name="header_value_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerValueInput"></a>

```python
header_value_input: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `header_value`<sup>Required</sup> <a name="header_value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerValue"></a>

```python
header_value: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SesReceiptRuleAddHeaderAction, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>, cdktf.IResolvable]

---


### SesReceiptRuleBounceActionList <a name="SesReceiptRuleBounceActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleBounceActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SesReceiptRuleBounceActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SesReceiptRuleBounceAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>]]

---


### SesReceiptRuleBounceActionOutputReference <a name="SesReceiptRuleBounceActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleBounceActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resetStatusCode">reset_status_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resetTopicArn">reset_topic_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_status_code` <a name="reset_status_code" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resetStatusCode"></a>

```python
def reset_status_code() -> None
```

##### `reset_topic_arn` <a name="reset_topic_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resetTopicArn"></a>

```python
def reset_topic_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.senderInput">sender_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.smtpReplyCodeInput">smtp_reply_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.topicArnInput">topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.sender">sender</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.smtpReplyCode">smtp_reply_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sender_input`<sup>Optional</sup> <a name="sender_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.senderInput"></a>

```python
sender_input: str
```

- *Type:* str

---

##### `smtp_reply_code_input`<sup>Optional</sup> <a name="smtp_reply_code_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.smtpReplyCodeInput"></a>

```python
smtp_reply_code_input: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.statusCodeInput"></a>

```python
status_code_input: str
```

- *Type:* str

---

##### `topic_arn_input`<sup>Optional</sup> <a name="topic_arn_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.topicArnInput"></a>

```python
topic_arn_input: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sender`<sup>Required</sup> <a name="sender" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.sender"></a>

```python
sender: str
```

- *Type:* str

---

##### `smtp_reply_code`<sup>Required</sup> <a name="smtp_reply_code" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.smtpReplyCode"></a>

```python
smtp_reply_code: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SesReceiptRuleBounceAction, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>, cdktf.IResolvable]

---


### SesReceiptRuleLambdaActionList <a name="SesReceiptRuleLambdaActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleLambdaActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SesReceiptRuleLambdaActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SesReceiptRuleLambdaAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>]]

---


### SesReceiptRuleLambdaActionOutputReference <a name="SesReceiptRuleLambdaActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleLambdaActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resetInvocationType">reset_invocation_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resetTopicArn">reset_topic_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_invocation_type` <a name="reset_invocation_type" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resetInvocationType"></a>

```python
def reset_invocation_type() -> None
```

##### `reset_topic_arn` <a name="reset_topic_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resetTopicArn"></a>

```python
def reset_topic_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.functionArnInput">function_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.invocationTypeInput">invocation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.topicArnInput">topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.functionArn">function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.invocationType">invocation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_arn_input`<sup>Optional</sup> <a name="function_arn_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.functionArnInput"></a>

```python
function_arn_input: str
```

- *Type:* str

---

##### `invocation_type_input`<sup>Optional</sup> <a name="invocation_type_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.invocationTypeInput"></a>

```python
invocation_type_input: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `topic_arn_input`<sup>Optional</sup> <a name="topic_arn_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.topicArnInput"></a>

```python
topic_arn_input: str
```

- *Type:* str

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

---

##### `invocation_type`<sup>Required</sup> <a name="invocation_type" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.invocationType"></a>

```python
invocation_type: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SesReceiptRuleLambdaAction, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>, cdktf.IResolvable]

---


### SesReceiptRuleS3ActionList <a name="SesReceiptRuleS3ActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleS3ActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SesReceiptRuleS3ActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SesReceiptRuleS3Action]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>]]

---


### SesReceiptRuleS3ActionOutputReference <a name="SesReceiptRuleS3ActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleS3ActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetObjectKeyPrefix">reset_object_key_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetTopicArn">reset_topic_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_object_key_prefix` <a name="reset_object_key_prefix" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetObjectKeyPrefix"></a>

```python
def reset_object_key_prefix() -> None
```

##### `reset_topic_arn` <a name="reset_topic_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetTopicArn"></a>

```python
def reset_topic_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.objectKeyPrefixInput">object_key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.topicArnInput">topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.objectKeyPrefix">object_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `object_key_prefix_input`<sup>Optional</sup> <a name="object_key_prefix_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.objectKeyPrefixInput"></a>

```python
object_key_prefix_input: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `topic_arn_input`<sup>Optional</sup> <a name="topic_arn_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.topicArnInput"></a>

```python
topic_arn_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `object_key_prefix`<sup>Required</sup> <a name="object_key_prefix" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.objectKeyPrefix"></a>

```python
object_key_prefix: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SesReceiptRuleS3Action, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>, cdktf.IResolvable]

---


### SesReceiptRuleSnsActionList <a name="SesReceiptRuleSnsActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleSnsActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SesReceiptRuleSnsActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SesReceiptRuleSnsAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>]]

---


### SesReceiptRuleSnsActionOutputReference <a name="SesReceiptRuleSnsActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleSnsActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.topicArnInput">topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `topic_arn_input`<sup>Optional</sup> <a name="topic_arn_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.topicArnInput"></a>

```python
topic_arn_input: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SesReceiptRuleSnsAction, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>, cdktf.IResolvable]

---


### SesReceiptRuleStopActionList <a name="SesReceiptRuleStopActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleStopActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SesReceiptRuleStopActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SesReceiptRuleStopAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>]]

---


### SesReceiptRuleStopActionOutputReference <a name="SesReceiptRuleStopActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleStopActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resetTopicArn">reset_topic_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_topic_arn` <a name="reset_topic_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resetTopicArn"></a>

```python
def reset_topic_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.topicArnInput">topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `topic_arn_input`<sup>Optional</sup> <a name="topic_arn_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.topicArnInput"></a>

```python
topic_arn_input: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SesReceiptRuleStopAction, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>, cdktf.IResolvable]

---


### SesReceiptRuleWorkmailActionList <a name="SesReceiptRuleWorkmailActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleWorkmailActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SesReceiptRuleWorkmailActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SesReceiptRuleWorkmailAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>]]

---


### SesReceiptRuleWorkmailActionOutputReference <a name="SesReceiptRuleWorkmailActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ses_receipt_rule

sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resetTopicArn">reset_topic_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_topic_arn` <a name="reset_topic_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resetTopicArn"></a>

```python
def reset_topic_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.organizationArnInput">organization_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.topicArnInput">topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.organizationArn">organization_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `organization_arn_input`<sup>Optional</sup> <a name="organization_arn_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.organizationArnInput"></a>

```python
organization_arn_input: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `topic_arn_input`<sup>Optional</sup> <a name="topic_arn_input" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.topicArnInput"></a>

```python
topic_arn_input: str
```

- *Type:* str

---

##### `organization_arn`<sup>Required</sup> <a name="organization_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.organizationArn"></a>

```python
organization_arn: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SesReceiptRuleWorkmailAction, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>, cdktf.IResolvable]

---



