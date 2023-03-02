# `route53RecoverycontrolconfigSafetyRule` Submodule <a name="`route53RecoverycontrolconfigSafetyRule` Submodule" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoverycontrolconfigSafetyRule <a name="Route53RecoverycontrolconfigSafetyRule" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule aws_route53recoverycontrolconfig_safety_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_recoverycontrolconfig_safety_rule.Route53RecoverycontrolconfigSafetyRule;

Route53RecoverycontrolconfigSafetyRule.Builder.create(Construct scope, java.lang.String id)
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
    .controlPanelArn(java.lang.String)
    .name(java.lang.String)
    .ruleConfig(Route53RecoverycontrolconfigSafetyRuleRuleConfig)
    .waitPeriodMs(java.lang.Number)
//  .assertedControls(java.util.List<java.lang.String>)
//  .gatingControls(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .targetControls(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.controlPanelArn">controlPanelArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#control_panel_arn Route53RecoverycontrolconfigSafetyRule#control_panel_arn}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#name Route53RecoverycontrolconfigSafetyRule#name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.ruleConfig">ruleConfig</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a></code> | rule_config block. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.waitPeriodMs">waitPeriodMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#wait_period_ms Route53RecoverycontrolconfigSafetyRule#wait_period_ms}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.assertedControls">assertedControls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#asserted_controls Route53RecoverycontrolconfigSafetyRule#asserted_controls}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.gatingControls">gatingControls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#gating_controls Route53RecoverycontrolconfigSafetyRule#gating_controls}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#id Route53RecoverycontrolconfigSafetyRule#id}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.targetControls">targetControls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#target_controls Route53RecoverycontrolconfigSafetyRule#target_controls}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `controlPanelArn`<sup>Required</sup> <a name="controlPanelArn" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.controlPanelArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#control_panel_arn Route53RecoverycontrolconfigSafetyRule#control_panel_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#name Route53RecoverycontrolconfigSafetyRule#name}.

---

##### `ruleConfig`<sup>Required</sup> <a name="ruleConfig" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.ruleConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a>

rule_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#rule_config Route53RecoverycontrolconfigSafetyRule#rule_config}

---

##### `waitPeriodMs`<sup>Required</sup> <a name="waitPeriodMs" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.waitPeriodMs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#wait_period_ms Route53RecoverycontrolconfigSafetyRule#wait_period_ms}.

---

##### `assertedControls`<sup>Optional</sup> <a name="assertedControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.assertedControls"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#asserted_controls Route53RecoverycontrolconfigSafetyRule#asserted_controls}.

---

##### `gatingControls`<sup>Optional</sup> <a name="gatingControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.gatingControls"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#gating_controls Route53RecoverycontrolconfigSafetyRule#gating_controls}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#id Route53RecoverycontrolconfigSafetyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `targetControls`<sup>Optional</sup> <a name="targetControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.targetControls"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#target_controls Route53RecoverycontrolconfigSafetyRule#target_controls}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.putRuleConfig">putRuleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetAssertedControls">resetAssertedControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetGatingControls">resetGatingControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetTargetControls">resetTargetControls</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRuleConfig` <a name="putRuleConfig" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.putRuleConfig"></a>

```java
public void putRuleConfig(Route53RecoverycontrolconfigSafetyRuleRuleConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.putRuleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a>

---

##### `resetAssertedControls` <a name="resetAssertedControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetAssertedControls"></a>

```java
public void resetAssertedControls()
```

##### `resetGatingControls` <a name="resetGatingControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetGatingControls"></a>

```java
public void resetGatingControls()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetId"></a>

```java
public void resetId()
```

##### `resetTargetControls` <a name="resetTargetControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetTargetControls"></a>

```java
public void resetTargetControls()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_recoverycontrolconfig_safety_rule.Route53RecoverycontrolconfigSafetyRule;

Route53RecoverycontrolconfigSafetyRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_recoverycontrolconfig_safety_rule.Route53RecoverycontrolconfigSafetyRule;

Route53RecoverycontrolconfigSafetyRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_recoverycontrolconfig_safety_rule.Route53RecoverycontrolconfigSafetyRule;

Route53RecoverycontrolconfigSafetyRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.ruleConfig">ruleConfig</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference">Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.assertedControlsInput">assertedControlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.controlPanelArnInput">controlPanelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.gatingControlsInput">gatingControlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.ruleConfigInput">ruleConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.targetControlsInput">targetControlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.waitPeriodMsInput">waitPeriodMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.assertedControls">assertedControls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.controlPanelArn">controlPanelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.gatingControls">gatingControls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.targetControls">targetControls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.waitPeriodMs">waitPeriodMs</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `ruleConfig`<sup>Required</sup> <a name="ruleConfig" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.ruleConfig"></a>

```java
public Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference getRuleConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference">Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `assertedControlsInput`<sup>Optional</sup> <a name="assertedControlsInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.assertedControlsInput"></a>

```java
public java.util.List<java.lang.String> getAssertedControlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `controlPanelArnInput`<sup>Optional</sup> <a name="controlPanelArnInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.controlPanelArnInput"></a>

```java
public java.lang.String getControlPanelArnInput();
```

- *Type:* java.lang.String

---

##### `gatingControlsInput`<sup>Optional</sup> <a name="gatingControlsInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.gatingControlsInput"></a>

```java
public java.util.List<java.lang.String> getGatingControlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ruleConfigInput`<sup>Optional</sup> <a name="ruleConfigInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.ruleConfigInput"></a>

```java
public Route53RecoverycontrolconfigSafetyRuleRuleConfig getRuleConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a>

---

##### `targetControlsInput`<sup>Optional</sup> <a name="targetControlsInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.targetControlsInput"></a>

```java
public java.util.List<java.lang.String> getTargetControlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `waitPeriodMsInput`<sup>Optional</sup> <a name="waitPeriodMsInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.waitPeriodMsInput"></a>

```java
public java.lang.Number getWaitPeriodMsInput();
```

- *Type:* java.lang.Number

---

##### `assertedControls`<sup>Required</sup> <a name="assertedControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.assertedControls"></a>

```java
public java.util.List<java.lang.String> getAssertedControls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `controlPanelArn`<sup>Required</sup> <a name="controlPanelArn" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.controlPanelArn"></a>

```java
public java.lang.String getControlPanelArn();
```

- *Type:* java.lang.String

---

##### `gatingControls`<sup>Required</sup> <a name="gatingControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.gatingControls"></a>

```java
public java.util.List<java.lang.String> getGatingControls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `targetControls`<sup>Required</sup> <a name="targetControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.targetControls"></a>

```java
public java.util.List<java.lang.String> getTargetControls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `waitPeriodMs`<sup>Required</sup> <a name="waitPeriodMs" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.waitPeriodMs"></a>

```java
public java.lang.Number getWaitPeriodMs();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoverycontrolconfigSafetyRuleConfig <a name="Route53RecoverycontrolconfigSafetyRuleConfig" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_recoverycontrolconfig_safety_rule.Route53RecoverycontrolconfigSafetyRuleConfig;

Route53RecoverycontrolconfigSafetyRuleConfig.builder()
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
    .controlPanelArn(java.lang.String)
    .name(java.lang.String)
    .ruleConfig(Route53RecoverycontrolconfigSafetyRuleRuleConfig)
    .waitPeriodMs(java.lang.Number)
//  .assertedControls(java.util.List<java.lang.String>)
//  .gatingControls(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .targetControls(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.controlPanelArn">controlPanelArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#control_panel_arn Route53RecoverycontrolconfigSafetyRule#control_panel_arn}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#name Route53RecoverycontrolconfigSafetyRule#name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.ruleConfig">ruleConfig</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a></code> | rule_config block. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.waitPeriodMs">waitPeriodMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#wait_period_ms Route53RecoverycontrolconfigSafetyRule#wait_period_ms}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.assertedControls">assertedControls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#asserted_controls Route53RecoverycontrolconfigSafetyRule#asserted_controls}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.gatingControls">gatingControls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#gating_controls Route53RecoverycontrolconfigSafetyRule#gating_controls}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#id Route53RecoverycontrolconfigSafetyRule#id}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.targetControls">targetControls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#target_controls Route53RecoverycontrolconfigSafetyRule#target_controls}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `controlPanelArn`<sup>Required</sup> <a name="controlPanelArn" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.controlPanelArn"></a>

```java
public java.lang.String getControlPanelArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#control_panel_arn Route53RecoverycontrolconfigSafetyRule#control_panel_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#name Route53RecoverycontrolconfigSafetyRule#name}.

---

##### `ruleConfig`<sup>Required</sup> <a name="ruleConfig" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.ruleConfig"></a>

```java
public Route53RecoverycontrolconfigSafetyRuleRuleConfig getRuleConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a>

rule_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#rule_config Route53RecoverycontrolconfigSafetyRule#rule_config}

---

##### `waitPeriodMs`<sup>Required</sup> <a name="waitPeriodMs" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.waitPeriodMs"></a>

```java
public java.lang.Number getWaitPeriodMs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#wait_period_ms Route53RecoverycontrolconfigSafetyRule#wait_period_ms}.

---

##### `assertedControls`<sup>Optional</sup> <a name="assertedControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.assertedControls"></a>

```java
public java.util.List<java.lang.String> getAssertedControls();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#asserted_controls Route53RecoverycontrolconfigSafetyRule#asserted_controls}.

---

##### `gatingControls`<sup>Optional</sup> <a name="gatingControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.gatingControls"></a>

```java
public java.util.List<java.lang.String> getGatingControls();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#gating_controls Route53RecoverycontrolconfigSafetyRule#gating_controls}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#id Route53RecoverycontrolconfigSafetyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `targetControls`<sup>Optional</sup> <a name="targetControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.targetControls"></a>

```java
public java.util.List<java.lang.String> getTargetControls();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#target_controls Route53RecoverycontrolconfigSafetyRule#target_controls}.

---

### Route53RecoverycontrolconfigSafetyRuleRuleConfig <a name="Route53RecoverycontrolconfigSafetyRuleRuleConfig" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_recoverycontrolconfig_safety_rule.Route53RecoverycontrolconfigSafetyRuleRuleConfig;

Route53RecoverycontrolconfigSafetyRuleRuleConfig.builder()
    .inverted(java.lang.Boolean)
    .inverted(IResolvable)
    .threshold(java.lang.Number)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.property.inverted">inverted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#inverted Route53RecoverycontrolconfigSafetyRule#inverted}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#threshold Route53RecoverycontrolconfigSafetyRule#threshold}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#type Route53RecoverycontrolconfigSafetyRule#type}. |

---

##### `inverted`<sup>Required</sup> <a name="inverted" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.property.inverted"></a>

```java
public java.lang.Object getInverted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#inverted Route53RecoverycontrolconfigSafetyRule#inverted}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#threshold Route53RecoverycontrolconfigSafetyRule#threshold}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#type Route53RecoverycontrolconfigSafetyRule#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference <a name="Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_recoverycontrolconfig_safety_rule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference;

new Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.invertedInput">invertedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.inverted">inverted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `invertedInput`<sup>Optional</sup> <a name="invertedInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.invertedInput"></a>

```java
public java.lang.Object getInvertedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `inverted`<sup>Required</sup> <a name="inverted" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.inverted"></a>

```java
public java.lang.Object getInverted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.internalValue"></a>

```java
public Route53RecoverycontrolconfigSafetyRuleRuleConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a>

---



