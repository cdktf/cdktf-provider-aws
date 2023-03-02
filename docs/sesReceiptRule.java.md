# `sesReceiptRule` Submodule <a name="`sesReceiptRule` Submodule" id="@cdktf/provider-aws.sesReceiptRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesReceiptRule <a name="SesReceiptRule" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule aws_ses_receipt_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRule;

SesReceiptRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .ruleSetName(java.lang.String)
//  .addHeaderAction(IResolvable)
//  .addHeaderAction(java.util.List<SesReceiptRuleAddHeaderAction>)
//  .after(java.lang.String)
//  .bounceAction(IResolvable)
//  .bounceAction(java.util.List<SesReceiptRuleBounceAction>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .lambdaAction(IResolvable)
//  .lambdaAction(java.util.List<SesReceiptRuleLambdaAction>)
//  .recipients(java.util.List<java.lang.String>)
//  .s3Action(IResolvable)
//  .s3Action(java.util.List<SesReceiptRuleS3Action>)
//  .scanEnabled(java.lang.Boolean)
//  .scanEnabled(IResolvable)
//  .snsAction(IResolvable)
//  .snsAction(java.util.List<SesReceiptRuleSnsAction>)
//  .stopAction(IResolvable)
//  .stopAction(java.util.List<SesReceiptRuleStopAction>)
//  .tlsPolicy(java.lang.String)
//  .workmailAction(IResolvable)
//  .workmailAction(java.util.List<SesReceiptRuleWorkmailAction>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#name SesReceiptRule#name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.ruleSetName">ruleSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#rule_set_name SesReceiptRule#rule_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.addHeaderAction">addHeaderAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>></code> | add_header_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.after">after</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#after SesReceiptRule#after}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.bounceAction">bounceAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>></code> | bounce_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#enabled SesReceiptRule#enabled}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#id SesReceiptRule#id}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.lambdaAction">lambdaAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>></code> | lambda_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.recipients">recipients</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#recipients SesReceiptRule#recipients}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.s3Action">s3Action</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>></code> | s3_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.scanEnabled">scanEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scan_enabled SesReceiptRule#scan_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.snsAction">snsAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>></code> | sns_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.stopAction">stopAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>></code> | stop_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.tlsPolicy">tlsPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#tls_policy SesReceiptRule#tls_policy}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.workmailAction">workmailAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>></code> | workmail_action block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#name SesReceiptRule#name}.

---

##### `ruleSetName`<sup>Required</sup> <a name="ruleSetName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.ruleSetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#rule_set_name SesReceiptRule#rule_set_name}.

---

##### `addHeaderAction`<sup>Optional</sup> <a name="addHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.addHeaderAction"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>>

add_header_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#add_header_action SesReceiptRule#add_header_action}

---

##### `after`<sup>Optional</sup> <a name="after" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.after"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#after SesReceiptRule#after}.

---

##### `bounceAction`<sup>Optional</sup> <a name="bounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.bounceAction"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>>

bounce_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#bounce_action SesReceiptRule#bounce_action}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#enabled SesReceiptRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#id SesReceiptRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambdaAction`<sup>Optional</sup> <a name="lambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.lambdaAction"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>>

lambda_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#lambda_action SesReceiptRule#lambda_action}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.recipients"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#recipients SesReceiptRule#recipients}.

---

##### `s3Action`<sup>Optional</sup> <a name="s3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.s3Action"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>>

s3_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#s3_action SesReceiptRule#s3_action}

---

##### `scanEnabled`<sup>Optional</sup> <a name="scanEnabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.scanEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scan_enabled SesReceiptRule#scan_enabled}.

---

##### `snsAction`<sup>Optional</sup> <a name="snsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.snsAction"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>>

sns_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#sns_action SesReceiptRule#sns_action}

---

##### `stopAction`<sup>Optional</sup> <a name="stopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.stopAction"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>>

stop_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#stop_action SesReceiptRule#stop_action}

---

##### `tlsPolicy`<sup>Optional</sup> <a name="tlsPolicy" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.tlsPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#tls_policy SesReceiptRule#tls_policy}.

---

##### `workmailAction`<sup>Optional</sup> <a name="workmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.workmailAction"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>>

workmail_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#workmail_action SesReceiptRule#workmail_action}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putAddHeaderAction">putAddHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putBounceAction">putBounceAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putLambdaAction">putLambdaAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putS3Action">putS3Action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putSnsAction">putSnsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putStopAction">putStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putWorkmailAction">putWorkmailAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetAddHeaderAction">resetAddHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetAfter">resetAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetBounceAction">resetBounceAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetLambdaAction">resetLambdaAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetRecipients">resetRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetS3Action">resetS3Action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetScanEnabled">resetScanEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetSnsAction">resetSnsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetStopAction">resetStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetTlsPolicy">resetTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetWorkmailAction">resetWorkmailAction</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAddHeaderAction` <a name="putAddHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putAddHeaderAction"></a>

```java
public void putAddHeaderAction(IResolvable OR java.util.List<SesReceiptRuleAddHeaderAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putAddHeaderAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>>

---

##### `putBounceAction` <a name="putBounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putBounceAction"></a>

```java
public void putBounceAction(IResolvable OR java.util.List<SesReceiptRuleBounceAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putBounceAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>>

---

##### `putLambdaAction` <a name="putLambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putLambdaAction"></a>

```java
public void putLambdaAction(IResolvable OR java.util.List<SesReceiptRuleLambdaAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putLambdaAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>>

---

##### `putS3Action` <a name="putS3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putS3Action"></a>

```java
public void putS3Action(IResolvable OR java.util.List<SesReceiptRuleS3Action> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putS3Action.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>>

---

##### `putSnsAction` <a name="putSnsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putSnsAction"></a>

```java
public void putSnsAction(IResolvable OR java.util.List<SesReceiptRuleSnsAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putSnsAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>>

---

##### `putStopAction` <a name="putStopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putStopAction"></a>

```java
public void putStopAction(IResolvable OR java.util.List<SesReceiptRuleStopAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putStopAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>>

---

##### `putWorkmailAction` <a name="putWorkmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putWorkmailAction"></a>

```java
public void putWorkmailAction(IResolvable OR java.util.List<SesReceiptRuleWorkmailAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putWorkmailAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>>

---

##### `resetAddHeaderAction` <a name="resetAddHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetAddHeaderAction"></a>

```java
public void resetAddHeaderAction()
```

##### `resetAfter` <a name="resetAfter" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetAfter"></a>

```java
public void resetAfter()
```

##### `resetBounceAction` <a name="resetBounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetBounceAction"></a>

```java
public void resetBounceAction()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetId"></a>

```java
public void resetId()
```

##### `resetLambdaAction` <a name="resetLambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetLambdaAction"></a>

```java
public void resetLambdaAction()
```

##### `resetRecipients` <a name="resetRecipients" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetRecipients"></a>

```java
public void resetRecipients()
```

##### `resetS3Action` <a name="resetS3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetS3Action"></a>

```java
public void resetS3Action()
```

##### `resetScanEnabled` <a name="resetScanEnabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetScanEnabled"></a>

```java
public void resetScanEnabled()
```

##### `resetSnsAction` <a name="resetSnsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetSnsAction"></a>

```java
public void resetSnsAction()
```

##### `resetStopAction` <a name="resetStopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetStopAction"></a>

```java
public void resetStopAction()
```

##### `resetTlsPolicy` <a name="resetTlsPolicy" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetTlsPolicy"></a>

```java
public void resetTlsPolicy()
```

##### `resetWorkmailAction` <a name="resetWorkmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetWorkmailAction"></a>

```java
public void resetWorkmailAction()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRule;

SesReceiptRule.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRule;

SesReceiptRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRule;

SesReceiptRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.addHeaderAction">addHeaderAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList">SesReceiptRuleAddHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.bounceAction">bounceAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList">SesReceiptRuleBounceActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lambdaAction">lambdaAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList">SesReceiptRuleLambdaActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.s3Action">s3Action</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList">SesReceiptRuleS3ActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.snsAction">snsAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList">SesReceiptRuleSnsActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.stopAction">stopAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList">SesReceiptRuleStopActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.workmailAction">workmailAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList">SesReceiptRuleWorkmailActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.addHeaderActionInput">addHeaderActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.afterInput">afterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.bounceActionInput">bounceActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lambdaActionInput">lambdaActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.recipientsInput">recipientsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.ruleSetNameInput">ruleSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.s3ActionInput">s3ActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.scanEnabledInput">scanEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.snsActionInput">snsActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.stopActionInput">stopActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tlsPolicyInput">tlsPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.workmailActionInput">workmailActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.after">after</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.recipients">recipients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.ruleSetName">ruleSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.scanEnabled">scanEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tlsPolicy">tlsPolicy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addHeaderAction`<sup>Required</sup> <a name="addHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.addHeaderAction"></a>

```java
public SesReceiptRuleAddHeaderActionList getAddHeaderAction();
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList">SesReceiptRuleAddHeaderActionList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `bounceAction`<sup>Required</sup> <a name="bounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.bounceAction"></a>

```java
public SesReceiptRuleBounceActionList getBounceAction();
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList">SesReceiptRuleBounceActionList</a>

---

##### `lambdaAction`<sup>Required</sup> <a name="lambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lambdaAction"></a>

```java
public SesReceiptRuleLambdaActionList getLambdaAction();
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList">SesReceiptRuleLambdaActionList</a>

---

##### `s3Action`<sup>Required</sup> <a name="s3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.s3Action"></a>

```java
public SesReceiptRuleS3ActionList getS3Action();
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList">SesReceiptRuleS3ActionList</a>

---

##### `snsAction`<sup>Required</sup> <a name="snsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.snsAction"></a>

```java
public SesReceiptRuleSnsActionList getSnsAction();
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList">SesReceiptRuleSnsActionList</a>

---

##### `stopAction`<sup>Required</sup> <a name="stopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.stopAction"></a>

```java
public SesReceiptRuleStopActionList getStopAction();
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList">SesReceiptRuleStopActionList</a>

---

##### `workmailAction`<sup>Required</sup> <a name="workmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.workmailAction"></a>

```java
public SesReceiptRuleWorkmailActionList getWorkmailAction();
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList">SesReceiptRuleWorkmailActionList</a>

---

##### `addHeaderActionInput`<sup>Optional</sup> <a name="addHeaderActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.addHeaderActionInput"></a>

```java
public java.lang.Object getAddHeaderActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>>

---

##### `afterInput`<sup>Optional</sup> <a name="afterInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.afterInput"></a>

```java
public java.lang.String getAfterInput();
```

- *Type:* java.lang.String

---

##### `bounceActionInput`<sup>Optional</sup> <a name="bounceActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.bounceActionInput"></a>

```java
public java.lang.Object getBounceActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lambdaActionInput`<sup>Optional</sup> <a name="lambdaActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lambdaActionInput"></a>

```java
public java.lang.Object getLambdaActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recipientsInput`<sup>Optional</sup> <a name="recipientsInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.recipientsInput"></a>

```java
public java.util.List<java.lang.String> getRecipientsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ruleSetNameInput`<sup>Optional</sup> <a name="ruleSetNameInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.ruleSetNameInput"></a>

```java
public java.lang.String getRuleSetNameInput();
```

- *Type:* java.lang.String

---

##### `s3ActionInput`<sup>Optional</sup> <a name="s3ActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.s3ActionInput"></a>

```java
public java.lang.Object getS3ActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>>

---

##### `scanEnabledInput`<sup>Optional</sup> <a name="scanEnabledInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.scanEnabledInput"></a>

```java
public java.lang.Object getScanEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snsActionInput`<sup>Optional</sup> <a name="snsActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.snsActionInput"></a>

```java
public java.lang.Object getSnsActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>>

---

##### `stopActionInput`<sup>Optional</sup> <a name="stopActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.stopActionInput"></a>

```java
public java.lang.Object getStopActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>>

---

##### `tlsPolicyInput`<sup>Optional</sup> <a name="tlsPolicyInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tlsPolicyInput"></a>

```java
public java.lang.String getTlsPolicyInput();
```

- *Type:* java.lang.String

---

##### `workmailActionInput`<sup>Optional</sup> <a name="workmailActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.workmailActionInput"></a>

```java
public java.lang.Object getWorkmailActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>>

---

##### `after`<sup>Required</sup> <a name="after" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.after"></a>

```java
public java.lang.String getAfter();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.recipients"></a>

```java
public java.util.List<java.lang.String> getRecipients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ruleSetName`<sup>Required</sup> <a name="ruleSetName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.ruleSetName"></a>

```java
public java.lang.String getRuleSetName();
```

- *Type:* java.lang.String

---

##### `scanEnabled`<sup>Required</sup> <a name="scanEnabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.scanEnabled"></a>

```java
public java.lang.Object getScanEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsPolicy`<sup>Required</sup> <a name="tlsPolicy" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tlsPolicy"></a>

```java
public java.lang.String getTlsPolicy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SesReceiptRuleAddHeaderAction <a name="SesReceiptRuleAddHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleAddHeaderAction;

SesReceiptRuleAddHeaderAction.builder()
    .headerName(java.lang.String)
    .headerValue(java.lang.String)
    .position(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.headerName">headerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_name SesReceiptRule#header_name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.headerValue">headerValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_value SesReceiptRule#header_value}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_name SesReceiptRule#header_name}.

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.headerValue"></a>

```java
public java.lang.String getHeaderValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_value SesReceiptRule#header_value}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

### SesReceiptRuleBounceAction <a name="SesReceiptRuleBounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleBounceAction;

SesReceiptRuleBounceAction.builder()
    .message(java.lang.String)
    .position(java.lang.Number)
    .sender(java.lang.String)
    .smtpReplyCode(java.lang.String)
//  .statusCode(java.lang.String)
//  .topicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#message SesReceiptRule#message}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.sender">sender</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#sender SesReceiptRule#sender}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.smtpReplyCode">smtpReplyCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#smtp_reply_code SesReceiptRule#smtp_reply_code}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#status_code SesReceiptRule#status_code}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#message SesReceiptRule#message}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `sender`<sup>Required</sup> <a name="sender" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.sender"></a>

```java
public java.lang.String getSender();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#sender SesReceiptRule#sender}.

---

##### `smtpReplyCode`<sup>Required</sup> <a name="smtpReplyCode" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.smtpReplyCode"></a>

```java
public java.lang.String getSmtpReplyCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#smtp_reply_code SesReceiptRule#smtp_reply_code}.

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#status_code SesReceiptRule#status_code}.

---

##### `topicArn`<sup>Optional</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

### SesReceiptRuleConfig <a name="SesReceiptRuleConfig" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleConfig;

SesReceiptRuleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .ruleSetName(java.lang.String)
//  .addHeaderAction(IResolvable)
//  .addHeaderAction(java.util.List<SesReceiptRuleAddHeaderAction>)
//  .after(java.lang.String)
//  .bounceAction(IResolvable)
//  .bounceAction(java.util.List<SesReceiptRuleBounceAction>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .lambdaAction(IResolvable)
//  .lambdaAction(java.util.List<SesReceiptRuleLambdaAction>)
//  .recipients(java.util.List<java.lang.String>)
//  .s3Action(IResolvable)
//  .s3Action(java.util.List<SesReceiptRuleS3Action>)
//  .scanEnabled(java.lang.Boolean)
//  .scanEnabled(IResolvable)
//  .snsAction(IResolvable)
//  .snsAction(java.util.List<SesReceiptRuleSnsAction>)
//  .stopAction(IResolvable)
//  .stopAction(java.util.List<SesReceiptRuleStopAction>)
//  .tlsPolicy(java.lang.String)
//  .workmailAction(IResolvable)
//  .workmailAction(java.util.List<SesReceiptRuleWorkmailAction>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#name SesReceiptRule#name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.ruleSetName">ruleSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#rule_set_name SesReceiptRule#rule_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.addHeaderAction">addHeaderAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>></code> | add_header_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.after">after</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#after SesReceiptRule#after}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.bounceAction">bounceAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>></code> | bounce_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#enabled SesReceiptRule#enabled}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#id SesReceiptRule#id}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.lambdaAction">lambdaAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>></code> | lambda_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.recipients">recipients</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#recipients SesReceiptRule#recipients}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.s3Action">s3Action</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>></code> | s3_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.scanEnabled">scanEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scan_enabled SesReceiptRule#scan_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.snsAction">snsAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>></code> | sns_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.stopAction">stopAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>></code> | stop_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.tlsPolicy">tlsPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#tls_policy SesReceiptRule#tls_policy}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.workmailAction">workmailAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>></code> | workmail_action block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#name SesReceiptRule#name}.

---

##### `ruleSetName`<sup>Required</sup> <a name="ruleSetName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.ruleSetName"></a>

```java
public java.lang.String getRuleSetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#rule_set_name SesReceiptRule#rule_set_name}.

---

##### `addHeaderAction`<sup>Optional</sup> <a name="addHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.addHeaderAction"></a>

```java
public java.lang.Object getAddHeaderAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>>

add_header_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#add_header_action SesReceiptRule#add_header_action}

---

##### `after`<sup>Optional</sup> <a name="after" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.after"></a>

```java
public java.lang.String getAfter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#after SesReceiptRule#after}.

---

##### `bounceAction`<sup>Optional</sup> <a name="bounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.bounceAction"></a>

```java
public java.lang.Object getBounceAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>>

bounce_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#bounce_action SesReceiptRule#bounce_action}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#enabled SesReceiptRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#id SesReceiptRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambdaAction`<sup>Optional</sup> <a name="lambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.lambdaAction"></a>

```java
public java.lang.Object getLambdaAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>>

lambda_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#lambda_action SesReceiptRule#lambda_action}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.recipients"></a>

```java
public java.util.List<java.lang.String> getRecipients();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#recipients SesReceiptRule#recipients}.

---

##### `s3Action`<sup>Optional</sup> <a name="s3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.s3Action"></a>

```java
public java.lang.Object getS3Action();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>>

s3_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#s3_action SesReceiptRule#s3_action}

---

##### `scanEnabled`<sup>Optional</sup> <a name="scanEnabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.scanEnabled"></a>

```java
public java.lang.Object getScanEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scan_enabled SesReceiptRule#scan_enabled}.

---

##### `snsAction`<sup>Optional</sup> <a name="snsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.snsAction"></a>

```java
public java.lang.Object getSnsAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>>

sns_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#sns_action SesReceiptRule#sns_action}

---

##### `stopAction`<sup>Optional</sup> <a name="stopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.stopAction"></a>

```java
public java.lang.Object getStopAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>>

stop_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#stop_action SesReceiptRule#stop_action}

---

##### `tlsPolicy`<sup>Optional</sup> <a name="tlsPolicy" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.tlsPolicy"></a>

```java
public java.lang.String getTlsPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#tls_policy SesReceiptRule#tls_policy}.

---

##### `workmailAction`<sup>Optional</sup> <a name="workmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.workmailAction"></a>

```java
public java.lang.Object getWorkmailAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>>

workmail_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#workmail_action SesReceiptRule#workmail_action}

---

### SesReceiptRuleLambdaAction <a name="SesReceiptRuleLambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleLambdaAction;

SesReceiptRuleLambdaAction.builder()
    .functionArn(java.lang.String)
    .position(java.lang.Number)
//  .invocationType(java.lang.String)
//  .topicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.functionArn">functionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#function_arn SesReceiptRule#function_arn}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.invocationType">invocationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#invocation_type SesReceiptRule#invocation_type}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.functionArn"></a>

```java
public java.lang.String getFunctionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#function_arn SesReceiptRule#function_arn}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `invocationType`<sup>Optional</sup> <a name="invocationType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.invocationType"></a>

```java
public java.lang.String getInvocationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#invocation_type SesReceiptRule#invocation_type}.

---

##### `topicArn`<sup>Optional</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

### SesReceiptRuleS3Action <a name="SesReceiptRuleS3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleS3Action;

SesReceiptRuleS3Action.builder()
    .bucketName(java.lang.String)
    .position(java.lang.Number)
//  .kmsKeyArn(java.lang.String)
//  .objectKeyPrefix(java.lang.String)
//  .topicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#bucket_name SesReceiptRule#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#kms_key_arn SesReceiptRule#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.objectKeyPrefix">objectKeyPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#object_key_prefix SesReceiptRule#object_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#bucket_name SesReceiptRule#bucket_name}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#kms_key_arn SesReceiptRule#kms_key_arn}.

---

##### `objectKeyPrefix`<sup>Optional</sup> <a name="objectKeyPrefix" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.objectKeyPrefix"></a>

```java
public java.lang.String getObjectKeyPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#object_key_prefix SesReceiptRule#object_key_prefix}.

---

##### `topicArn`<sup>Optional</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

### SesReceiptRuleSnsAction <a name="SesReceiptRuleSnsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleSnsAction;

SesReceiptRuleSnsAction.builder()
    .position(java.lang.Number)
    .topicArn(java.lang.String)
//  .encoding(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.encoding">encoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#encoding SesReceiptRule#encoding}. |

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#encoding SesReceiptRule#encoding}.

---

### SesReceiptRuleStopAction <a name="SesReceiptRuleStopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleStopAction;

SesReceiptRuleStopAction.builder()
    .position(java.lang.Number)
    .scope(java.lang.String)
//  .topicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scope SesReceiptRule#scope}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scope SesReceiptRule#scope}.

---

##### `topicArn`<sup>Optional</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

### SesReceiptRuleWorkmailAction <a name="SesReceiptRuleWorkmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleWorkmailAction;

SesReceiptRuleWorkmailAction.builder()
    .organizationArn(java.lang.String)
    .position(java.lang.Number)
//  .topicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.organizationArn">organizationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#organization_arn SesReceiptRule#organization_arn}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `organizationArn`<sup>Required</sup> <a name="organizationArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.organizationArn"></a>

```java
public java.lang.String getOrganizationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#organization_arn SesReceiptRule#organization_arn}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `topicArn`<sup>Optional</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesReceiptRuleAddHeaderActionList <a name="SesReceiptRuleAddHeaderActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleAddHeaderActionList;

new SesReceiptRuleAddHeaderActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.get"></a>

```java
public SesReceiptRuleAddHeaderActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>>

---


### SesReceiptRuleAddHeaderActionOutputReference <a name="SesReceiptRuleAddHeaderActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleAddHeaderActionOutputReference;

new SesReceiptRuleAddHeaderActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerValueInput">headerValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerValue">headerValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `headerValueInput`<sup>Optional</sup> <a name="headerValueInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerValueInput"></a>

```java
public java.lang.String getHeaderValueInput();
```

- *Type:* java.lang.String

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerValue"></a>

```java
public java.lang.String getHeaderValue();
```

- *Type:* java.lang.String

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a> OR com.hashicorp.cdktf.IResolvable

---


### SesReceiptRuleBounceActionList <a name="SesReceiptRuleBounceActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleBounceActionList;

new SesReceiptRuleBounceActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.get"></a>

```java
public SesReceiptRuleBounceActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>>

---


### SesReceiptRuleBounceActionOutputReference <a name="SesReceiptRuleBounceActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleBounceActionOutputReference;

new SesReceiptRuleBounceActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resetTopicArn">resetTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resetStatusCode"></a>

```java
public void resetStatusCode()
```

##### `resetTopicArn` <a name="resetTopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resetTopicArn"></a>

```java
public void resetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.senderInput">senderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.smtpReplyCodeInput">smtpReplyCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.sender">sender</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.smtpReplyCode">smtpReplyCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `senderInput`<sup>Optional</sup> <a name="senderInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.senderInput"></a>

```java
public java.lang.String getSenderInput();
```

- *Type:* java.lang.String

---

##### `smtpReplyCodeInput`<sup>Optional</sup> <a name="smtpReplyCodeInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.smtpReplyCodeInput"></a>

```java
public java.lang.String getSmtpReplyCodeInput();
```

- *Type:* java.lang.String

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.statusCodeInput"></a>

```java
public java.lang.String getStatusCodeInput();
```

- *Type:* java.lang.String

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.topicArnInput"></a>

```java
public java.lang.String getTopicArnInput();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `sender`<sup>Required</sup> <a name="sender" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.sender"></a>

```java
public java.lang.String getSender();
```

- *Type:* java.lang.String

---

##### `smtpReplyCode`<sup>Required</sup> <a name="smtpReplyCode" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.smtpReplyCode"></a>

```java
public java.lang.String getSmtpReplyCode();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a> OR com.hashicorp.cdktf.IResolvable

---


### SesReceiptRuleLambdaActionList <a name="SesReceiptRuleLambdaActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleLambdaActionList;

new SesReceiptRuleLambdaActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.get"></a>

```java
public SesReceiptRuleLambdaActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>>

---


### SesReceiptRuleLambdaActionOutputReference <a name="SesReceiptRuleLambdaActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleLambdaActionOutputReference;

new SesReceiptRuleLambdaActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resetInvocationType">resetInvocationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resetTopicArn">resetTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInvocationType` <a name="resetInvocationType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resetInvocationType"></a>

```java
public void resetInvocationType()
```

##### `resetTopicArn` <a name="resetTopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resetTopicArn"></a>

```java
public void resetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.functionArnInput">functionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.invocationTypeInput">invocationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.functionArn">functionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.invocationType">invocationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionArnInput`<sup>Optional</sup> <a name="functionArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.functionArnInput"></a>

```java
public java.lang.String getFunctionArnInput();
```

- *Type:* java.lang.String

---

##### `invocationTypeInput`<sup>Optional</sup> <a name="invocationTypeInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.invocationTypeInput"></a>

```java
public java.lang.String getInvocationTypeInput();
```

- *Type:* java.lang.String

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.topicArnInput"></a>

```java
public java.lang.String getTopicArnInput();
```

- *Type:* java.lang.String

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.functionArn"></a>

```java
public java.lang.String getFunctionArn();
```

- *Type:* java.lang.String

---

##### `invocationType`<sup>Required</sup> <a name="invocationType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.invocationType"></a>

```java
public java.lang.String getInvocationType();
```

- *Type:* java.lang.String

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a> OR com.hashicorp.cdktf.IResolvable

---


### SesReceiptRuleS3ActionList <a name="SesReceiptRuleS3ActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleS3ActionList;

new SesReceiptRuleS3ActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.get"></a>

```java
public SesReceiptRuleS3ActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>>

---


### SesReceiptRuleS3ActionOutputReference <a name="SesReceiptRuleS3ActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleS3ActionOutputReference;

new SesReceiptRuleS3ActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetObjectKeyPrefix">resetObjectKeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetTopicArn">resetTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetObjectKeyPrefix` <a name="resetObjectKeyPrefix" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetObjectKeyPrefix"></a>

```java
public void resetObjectKeyPrefix()
```

##### `resetTopicArn` <a name="resetTopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetTopicArn"></a>

```java
public void resetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.objectKeyPrefixInput">objectKeyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.objectKeyPrefix">objectKeyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `objectKeyPrefixInput`<sup>Optional</sup> <a name="objectKeyPrefixInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.objectKeyPrefixInput"></a>

```java
public java.lang.String getObjectKeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.topicArnInput"></a>

```java
public java.lang.String getTopicArnInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `objectKeyPrefix`<sup>Required</sup> <a name="objectKeyPrefix" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.objectKeyPrefix"></a>

```java
public java.lang.String getObjectKeyPrefix();
```

- *Type:* java.lang.String

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a> OR com.hashicorp.cdktf.IResolvable

---


### SesReceiptRuleSnsActionList <a name="SesReceiptRuleSnsActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleSnsActionList;

new SesReceiptRuleSnsActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.get"></a>

```java
public SesReceiptRuleSnsActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>>

---


### SesReceiptRuleSnsActionOutputReference <a name="SesReceiptRuleSnsActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleSnsActionOutputReference;

new SesReceiptRuleSnsActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resetEncoding"></a>

```java
public void resetEncoding()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.encodingInput">encodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.encodingInput"></a>

```java
public java.lang.String getEncodingInput();
```

- *Type:* java.lang.String

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.topicArnInput"></a>

```java
public java.lang.String getTopicArnInput();
```

- *Type:* java.lang.String

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a> OR com.hashicorp.cdktf.IResolvable

---


### SesReceiptRuleStopActionList <a name="SesReceiptRuleStopActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleStopActionList;

new SesReceiptRuleStopActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.get"></a>

```java
public SesReceiptRuleStopActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>>

---


### SesReceiptRuleStopActionOutputReference <a name="SesReceiptRuleStopActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleStopActionOutputReference;

new SesReceiptRuleStopActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resetTopicArn">resetTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTopicArn` <a name="resetTopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resetTopicArn"></a>

```java
public void resetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.topicArnInput"></a>

```java
public java.lang.String getTopicArnInput();
```

- *Type:* java.lang.String

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a> OR com.hashicorp.cdktf.IResolvable

---


### SesReceiptRuleWorkmailActionList <a name="SesReceiptRuleWorkmailActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleWorkmailActionList;

new SesReceiptRuleWorkmailActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.get"></a>

```java
public SesReceiptRuleWorkmailActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>>

---


### SesReceiptRuleWorkmailActionOutputReference <a name="SesReceiptRuleWorkmailActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_receipt_rule.SesReceiptRuleWorkmailActionOutputReference;

new SesReceiptRuleWorkmailActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resetTopicArn">resetTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTopicArn` <a name="resetTopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resetTopicArn"></a>

```java
public void resetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.organizationArnInput">organizationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.organizationArn">organizationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `organizationArnInput`<sup>Optional</sup> <a name="organizationArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.organizationArnInput"></a>

```java
public java.lang.String getOrganizationArnInput();
```

- *Type:* java.lang.String

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.topicArnInput"></a>

```java
public java.lang.String getTopicArnInput();
```

- *Type:* java.lang.String

---

##### `organizationArn`<sup>Required</sup> <a name="organizationArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.organizationArn"></a>

```java
public java.lang.String getOrganizationArn();
```

- *Type:* java.lang.String

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a> OR com.hashicorp.cdktf.IResolvable

---



