# `dataAwsLbListenerRule` Submodule <a name="`dataAwsLbListenerRule` Submodule" id="@cdktf/provider-aws.dataAwsLbListenerRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLbListenerRule <a name="DataAwsLbListenerRule" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule aws_lb_listener_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRule;

DataAwsLbListenerRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .action(IResolvable)
//  .action(java.util.List<DataAwsLbListenerRuleAction>)
//  .arn(java.lang.String)
//  .condition(IResolvable)
//  .condition(java.util.List<DataAwsLbListenerRuleCondition>)
//  .listenerArn(java.lang.String)
//  .priority(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.action">action</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>></code> | action block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#arn DataAwsLbListenerRule#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.condition">condition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>></code> | condition block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.listenerArn">listenerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#listener_arn DataAwsLbListenerRule#listener_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#priority DataAwsLbListenerRule#priority}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.action"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#action DataAwsLbListenerRule#action}

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.arn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#arn DataAwsLbListenerRule#arn}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.condition"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#condition DataAwsLbListenerRule#condition}

---

##### `listenerArn`<sup>Optional</sup> <a name="listenerArn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.listenerArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#listener_arn DataAwsLbListenerRule#listener_arn}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#priority DataAwsLbListenerRule#priority}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetListenerArn">resetListenerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetPriority">resetPriority</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.putAction"></a>

```java
public void putAction(IResolvable OR java.util.List<DataAwsLbListenerRuleAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.putAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>>

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.putCondition"></a>

```java
public void putCondition(IResolvable OR java.util.List<DataAwsLbListenerRuleCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.putCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetAction"></a>

```java
public void resetAction()
```

##### `resetArn` <a name="resetArn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetArn"></a>

```java
public void resetArn()
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetListenerArn` <a name="resetListenerArn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetListenerArn"></a>

```java
public void resetListenerArn()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.resetPriority"></a>

```java
public void resetPriority()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsLbListenerRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRule;

DataAwsLbListenerRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRule;

DataAwsLbListenerRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRule;

DataAwsLbListenerRule.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRule;

DataAwsLbListenerRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsLbListenerRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsLbListenerRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsLbListenerRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsLbListenerRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsLbListenerRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList">DataAwsLbListenerRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList">DataAwsLbListenerRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.actionInput">actionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.conditionInput">conditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.listenerArnInput">listenerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.listenerArn">listenerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.action"></a>

```java
public DataAwsLbListenerRuleActionList getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList">DataAwsLbListenerRuleActionList</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.condition"></a>

```java
public DataAwsLbListenerRuleConditionList getCondition();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList">DataAwsLbListenerRuleConditionList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.actionInput"></a>

```java
public java.lang.Object getActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.conditionInput"></a>

```java
public java.lang.Object getConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>>

---

##### `listenerArnInput`<sup>Optional</sup> <a name="listenerArnInput" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.listenerArnInput"></a>

```java
public java.lang.String getListenerArnInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.listenerArn"></a>

```java
public java.lang.String getListenerArn();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLbListenerRuleAction <a name="DataAwsLbListenerRuleAction" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleAction;

DataAwsLbListenerRuleAction.builder()
//  .forward(DataAwsLbListenerRuleActionForward)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction.property.forward">forward</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward">DataAwsLbListenerRuleActionForward</a></code> | forward block. |

---

##### `forward`<sup>Optional</sup> <a name="forward" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction.property.forward"></a>

```java
public DataAwsLbListenerRuleActionForward getForward();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward">DataAwsLbListenerRuleActionForward</a>

forward block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#forward DataAwsLbListenerRule#forward}

---

### DataAwsLbListenerRuleActionAuthenticateCognito <a name="DataAwsLbListenerRuleActionAuthenticateCognito" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognito"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognito.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleActionAuthenticateCognito;

DataAwsLbListenerRuleActionAuthenticateCognito.builder()
    .build();
```


### DataAwsLbListenerRuleActionAuthenticateOidc <a name="DataAwsLbListenerRuleActionAuthenticateOidc" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleActionAuthenticateOidc;

DataAwsLbListenerRuleActionAuthenticateOidc.builder()
    .build();
```


### DataAwsLbListenerRuleActionFixedResponse <a name="DataAwsLbListenerRuleActionFixedResponse" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponse.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleActionFixedResponse;

DataAwsLbListenerRuleActionFixedResponse.builder()
    .build();
```


### DataAwsLbListenerRuleActionForward <a name="DataAwsLbListenerRuleActionForward" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleActionForward;

DataAwsLbListenerRuleActionForward.builder()
//  .targetGroup(IResolvable)
//  .targetGroup(java.util.List<DataAwsLbListenerRuleActionForwardTargetGroup>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward.property.targetGroup">targetGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup">DataAwsLbListenerRuleActionForwardTargetGroup</a>></code> | target_group block. |

---

##### `targetGroup`<sup>Optional</sup> <a name="targetGroup" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward.property.targetGroup"></a>

```java
public java.lang.Object getTargetGroup();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup">DataAwsLbListenerRuleActionForwardTargetGroup</a>>

target_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#target_group DataAwsLbListenerRule#target_group}

---

### DataAwsLbListenerRuleActionForwardStickiness <a name="DataAwsLbListenerRuleActionForwardStickiness" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickiness.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleActionForwardStickiness;

DataAwsLbListenerRuleActionForwardStickiness.builder()
    .build();
```


### DataAwsLbListenerRuleActionForwardTargetGroup <a name="DataAwsLbListenerRuleActionForwardTargetGroup" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleActionForwardTargetGroup;

DataAwsLbListenerRuleActionForwardTargetGroup.builder()
    .build();
```


### DataAwsLbListenerRuleActionRedirect <a name="DataAwsLbListenerRuleActionRedirect" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleActionRedirect;

DataAwsLbListenerRuleActionRedirect.builder()
    .build();
```


### DataAwsLbListenerRuleCondition <a name="DataAwsLbListenerRuleCondition" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleCondition;

DataAwsLbListenerRuleCondition.builder()
//  .queryString(DataAwsLbListenerRuleConditionQueryString)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition.property.queryString">queryString</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString">DataAwsLbListenerRuleConditionQueryString</a></code> | query_string block. |

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition.property.queryString"></a>

```java
public DataAwsLbListenerRuleConditionQueryString getQueryString();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString">DataAwsLbListenerRuleConditionQueryString</a>

query_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#query_string DataAwsLbListenerRule#query_string}

---

### DataAwsLbListenerRuleConditionHostHeader <a name="DataAwsLbListenerRuleConditionHostHeader" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleConditionHostHeader;

DataAwsLbListenerRuleConditionHostHeader.builder()
    .build();
```


### DataAwsLbListenerRuleConditionHttpHeader <a name="DataAwsLbListenerRuleConditionHttpHeader" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleConditionHttpHeader;

DataAwsLbListenerRuleConditionHttpHeader.builder()
    .build();
```


### DataAwsLbListenerRuleConditionHttpRequestMethod <a name="DataAwsLbListenerRuleConditionHttpRequestMethod" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleConditionHttpRequestMethod;

DataAwsLbListenerRuleConditionHttpRequestMethod.builder()
    .build();
```


### DataAwsLbListenerRuleConditionPathPattern <a name="DataAwsLbListenerRuleConditionPathPattern" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPattern.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleConditionPathPattern;

DataAwsLbListenerRuleConditionPathPattern.builder()
    .build();
```


### DataAwsLbListenerRuleConditionQueryString <a name="DataAwsLbListenerRuleConditionQueryString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleConditionQueryString;

DataAwsLbListenerRuleConditionQueryString.builder()
//  .values(IResolvable)
//  .values(java.util.List<DataAwsLbListenerRuleConditionQueryStringValues>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString.property.values">values</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues">DataAwsLbListenerRuleConditionQueryStringValues</a>></code> | values block. |

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString.property.values"></a>

```java
public java.lang.Object getValues();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues">DataAwsLbListenerRuleConditionQueryStringValues</a>>

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#values DataAwsLbListenerRule#values}

---

### DataAwsLbListenerRuleConditionQueryStringValues <a name="DataAwsLbListenerRuleConditionQueryStringValues" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleConditionQueryStringValues;

DataAwsLbListenerRuleConditionQueryStringValues.builder()
    .build();
```


### DataAwsLbListenerRuleConditionSourceIp <a name="DataAwsLbListenerRuleConditionSourceIp" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleConditionSourceIp;

DataAwsLbListenerRuleConditionSourceIp.builder()
    .build();
```


### DataAwsLbListenerRuleConfig <a name="DataAwsLbListenerRuleConfig" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleConfig;

DataAwsLbListenerRuleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .action(IResolvable)
//  .action(java.util.List<DataAwsLbListenerRuleAction>)
//  .arn(java.lang.String)
//  .condition(IResolvable)
//  .condition(java.util.List<DataAwsLbListenerRuleCondition>)
//  .listenerArn(java.lang.String)
//  .priority(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.action">action</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>></code> | action block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#arn DataAwsLbListenerRule#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.condition">condition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>></code> | condition block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.listenerArn">listenerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#listener_arn DataAwsLbListenerRule#listener_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#priority DataAwsLbListenerRule#priority}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.action"></a>

```java
public java.lang.Object getAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#action DataAwsLbListenerRule#action}

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#arn DataAwsLbListenerRule#arn}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.condition"></a>

```java
public java.lang.Object getCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#condition DataAwsLbListenerRule#condition}

---

##### `listenerArn`<sup>Optional</sup> <a name="listenerArn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.listenerArn"></a>

```java
public java.lang.String getListenerArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#listener_arn DataAwsLbListenerRule#listener_arn}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/lb_listener_rule#priority DataAwsLbListenerRule#priority}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference <a name="DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference;

new DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieName">sessionCookieName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeout">sessionTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArn">userPoolArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientId">userPoolClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomain">userPoolDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognito">DataAwsLbListenerRuleActionAuthenticateCognito</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationRequestExtraParams`<sup>Required</sup> <a name="authenticationRequestExtraParams" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams"></a>

```java
public StringMap getAuthenticationRequestExtraParams();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `onUnauthenticatedRequest`<sup>Required</sup> <a name="onUnauthenticatedRequest" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest"></a>

```java
public java.lang.String getOnUnauthenticatedRequest();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `sessionCookieName`<sup>Required</sup> <a name="sessionCookieName" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieName"></a>

```java
public java.lang.String getSessionCookieName();
```

- *Type:* java.lang.String

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeout"></a>

```java
public java.lang.Number getSessionTimeout();
```

- *Type:* java.lang.Number

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArn"></a>

```java
public java.lang.String getUserPoolArn();
```

- *Type:* java.lang.String

---

##### `userPoolClientId`<sup>Required</sup> <a name="userPoolClientId" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientId"></a>

```java
public java.lang.String getUserPoolClientId();
```

- *Type:* java.lang.String

---

##### `userPoolDomain`<sup>Required</sup> <a name="userPoolDomain" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomain"></a>

```java
public java.lang.String getUserPoolDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognito">DataAwsLbListenerRuleActionAuthenticateCognito</a>

---


### DataAwsLbListenerRuleActionAuthenticateOidcOutputReference <a name="DataAwsLbListenerRuleActionAuthenticateOidcOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference;

new DataAwsLbListenerRuleActionAuthenticateOidcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieName">sessionCookieName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeout">sessionTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidc">DataAwsLbListenerRuleActionAuthenticateOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationRequestExtraParams`<sup>Required</sup> <a name="authenticationRequestExtraParams" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams"></a>

```java
public StringMap getAuthenticationRequestExtraParams();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `onUnauthenticatedRequest`<sup>Required</sup> <a name="onUnauthenticatedRequest" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest"></a>

```java
public java.lang.String getOnUnauthenticatedRequest();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `sessionCookieName`<sup>Required</sup> <a name="sessionCookieName" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieName"></a>

```java
public java.lang.String getSessionCookieName();
```

- *Type:* java.lang.String

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeout"></a>

```java
public java.lang.Number getSessionTimeout();
```

- *Type:* java.lang.Number

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpoint"></a>

```java
public java.lang.String getUserInfoEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidc">DataAwsLbListenerRuleActionAuthenticateOidc</a>

---


### DataAwsLbListenerRuleActionFixedResponseOutputReference <a name="DataAwsLbListenerRuleActionFixedResponseOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleActionFixedResponseOutputReference;

new DataAwsLbListenerRuleActionFixedResponseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.messageBody">messageBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponse">DataAwsLbListenerRuleActionFixedResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `messageBody`<sup>Required</sup> <a name="messageBody" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.messageBody"></a>

```java
public java.lang.String getMessageBody();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponse">DataAwsLbListenerRuleActionFixedResponse</a>

---


### DataAwsLbListenerRuleActionForwardOutputReference <a name="DataAwsLbListenerRuleActionForwardOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleActionForwardOutputReference;

new DataAwsLbListenerRuleActionForwardOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.putTargetGroup">putTargetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.resetTargetGroup">resetTargetGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetGroup` <a name="putTargetGroup" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.putTargetGroup"></a>

```java
public void putTargetGroup(IResolvable OR java.util.List<DataAwsLbListenerRuleActionForwardTargetGroup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.putTargetGroup.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup">DataAwsLbListenerRuleActionForwardTargetGroup</a>>

---

##### `resetTargetGroup` <a name="resetTargetGroup" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.resetTargetGroup"></a>

```java
public void resetTargetGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference">DataAwsLbListenerRuleActionForwardStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.targetGroup">targetGroup</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList">DataAwsLbListenerRuleActionForwardTargetGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.targetGroupInput">targetGroupInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup">DataAwsLbListenerRuleActionForwardTargetGroup</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward">DataAwsLbListenerRuleActionForward</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stickiness`<sup>Required</sup> <a name="stickiness" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.stickiness"></a>

```java
public DataAwsLbListenerRuleActionForwardStickinessOutputReference getStickiness();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference">DataAwsLbListenerRuleActionForwardStickinessOutputReference</a>

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.targetGroup"></a>

```java
public DataAwsLbListenerRuleActionForwardTargetGroupList getTargetGroup();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList">DataAwsLbListenerRuleActionForwardTargetGroupList</a>

---

##### `targetGroupInput`<sup>Optional</sup> <a name="targetGroupInput" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.targetGroupInput"></a>

```java
public java.lang.Object getTargetGroupInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup">DataAwsLbListenerRuleActionForwardTargetGroup</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward">DataAwsLbListenerRuleActionForward</a>

---


### DataAwsLbListenerRuleActionForwardStickinessOutputReference <a name="DataAwsLbListenerRuleActionForwardStickinessOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleActionForwardStickinessOutputReference;

new DataAwsLbListenerRuleActionForwardStickinessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.property.duration">duration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickiness">DataAwsLbListenerRuleActionForwardStickiness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickinessOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardStickiness">DataAwsLbListenerRuleActionForwardStickiness</a>

---


### DataAwsLbListenerRuleActionForwardTargetGroupList <a name="DataAwsLbListenerRuleActionForwardTargetGroupList" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleActionForwardTargetGroupList;

new DataAwsLbListenerRuleActionForwardTargetGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.get"></a>

```java
public DataAwsLbListenerRuleActionForwardTargetGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup">DataAwsLbListenerRuleActionForwardTargetGroup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup">DataAwsLbListenerRuleActionForwardTargetGroup</a>>

---


### DataAwsLbListenerRuleActionForwardTargetGroupOutputReference <a name="DataAwsLbListenerRuleActionForwardTargetGroupOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference;

new DataAwsLbListenerRuleActionForwardTargetGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup">DataAwsLbListenerRuleActionForwardTargetGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroupOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardTargetGroup">DataAwsLbListenerRuleActionForwardTargetGroup</a>

---


### DataAwsLbListenerRuleActionList <a name="DataAwsLbListenerRuleActionList" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleActionList;

new DataAwsLbListenerRuleActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.get"></a>

```java
public DataAwsLbListenerRuleActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>>

---


### DataAwsLbListenerRuleActionOutputReference <a name="DataAwsLbListenerRuleActionOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleActionOutputReference;

new DataAwsLbListenerRuleActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.putForward">putForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.resetForward">resetForward</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putForward` <a name="putForward" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.putForward"></a>

```java
public void putForward(DataAwsLbListenerRuleActionForward value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.putForward.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward">DataAwsLbListenerRuleActionForward</a>

---

##### `resetForward` <a name="resetForward" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.resetForward"></a>

```java
public void resetForward()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.authenticateCognito">authenticateCognito</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference">DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.authenticateOidc">authenticateOidc</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference">DataAwsLbListenerRuleActionAuthenticateOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference">DataAwsLbListenerRuleActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.forward">forward</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference">DataAwsLbListenerRuleActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference">DataAwsLbListenerRuleActionRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.forwardInput">forwardInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward">DataAwsLbListenerRuleActionForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticateCognito`<sup>Required</sup> <a name="authenticateCognito" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.authenticateCognito"></a>

```java
public DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference getAuthenticateCognito();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference">DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference</a>

---

##### `authenticateOidc`<sup>Required</sup> <a name="authenticateOidc" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.authenticateOidc"></a>

```java
public DataAwsLbListenerRuleActionAuthenticateOidcOutputReference getAuthenticateOidc();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionAuthenticateOidcOutputReference">DataAwsLbListenerRuleActionAuthenticateOidcOutputReference</a>

---

##### `fixedResponse`<sup>Required</sup> <a name="fixedResponse" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.fixedResponse"></a>

```java
public DataAwsLbListenerRuleActionFixedResponseOutputReference getFixedResponse();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionFixedResponseOutputReference">DataAwsLbListenerRuleActionFixedResponseOutputReference</a>

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.forward"></a>

```java
public DataAwsLbListenerRuleActionForwardOutputReference getForward();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForwardOutputReference">DataAwsLbListenerRuleActionForwardOutputReference</a>

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.redirect"></a>

```java
public DataAwsLbListenerRuleActionRedirectOutputReference getRedirect();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference">DataAwsLbListenerRuleActionRedirectOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `forwardInput`<sup>Optional</sup> <a name="forwardInput" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.forwardInput"></a>

```java
public java.lang.Object getForwardInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionForward">DataAwsLbListenerRuleActionForward</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleAction">DataAwsLbListenerRuleAction</a>

---


### DataAwsLbListenerRuleActionRedirectOutputReference <a name="DataAwsLbListenerRuleActionRedirectOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleActionRedirectOutputReference;

new DataAwsLbListenerRuleActionRedirectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirect">DataAwsLbListenerRuleActionRedirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirectOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleActionRedirect">DataAwsLbListenerRuleActionRedirect</a>

---


### DataAwsLbListenerRuleConditionHostHeaderOutputReference <a name="DataAwsLbListenerRuleConditionHostHeaderOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleConditionHostHeaderOutputReference;

new DataAwsLbListenerRuleConditionHostHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeader">DataAwsLbListenerRuleConditionHostHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeader">DataAwsLbListenerRuleConditionHostHeader</a>

---


### DataAwsLbListenerRuleConditionHttpHeaderOutputReference <a name="DataAwsLbListenerRuleConditionHttpHeaderOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference;

new DataAwsLbListenerRuleConditionHttpHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderName">httpHeaderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeader">DataAwsLbListenerRuleConditionHttpHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpHeaderName`<sup>Required</sup> <a name="httpHeaderName" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderName"></a>

```java
public java.lang.String getHttpHeaderName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeader">DataAwsLbListenerRuleConditionHttpHeader</a>

---


### DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference <a name="DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference;

new DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethod">DataAwsLbListenerRuleConditionHttpRequestMethod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethod">DataAwsLbListenerRuleConditionHttpRequestMethod</a>

---


### DataAwsLbListenerRuleConditionList <a name="DataAwsLbListenerRuleConditionList" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleConditionList;

new DataAwsLbListenerRuleConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.get"></a>

```java
public DataAwsLbListenerRuleConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>>

---


### DataAwsLbListenerRuleConditionOutputReference <a name="DataAwsLbListenerRuleConditionOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleConditionOutputReference;

new DataAwsLbListenerRuleConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.putQueryString">putQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQueryString` <a name="putQueryString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.putQueryString"></a>

```java
public void putQueryString(DataAwsLbListenerRuleConditionQueryString value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.putQueryString.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString">DataAwsLbListenerRuleConditionQueryString</a>

---

##### `resetQueryString` <a name="resetQueryString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.resetQueryString"></a>

```java
public void resetQueryString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.hostHeader">hostHeader</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference">DataAwsLbListenerRuleConditionHostHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.httpHeader">httpHeader</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference">DataAwsLbListenerRuleConditionHttpHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.httpRequestMethod">httpRequestMethod</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference">DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.pathPattern">pathPattern</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference">DataAwsLbListenerRuleConditionPathPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.queryString">queryString</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference">DataAwsLbListenerRuleConditionQueryStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.sourceIp">sourceIp</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference">DataAwsLbListenerRuleConditionSourceIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString">DataAwsLbListenerRuleConditionQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostHeader`<sup>Required</sup> <a name="hostHeader" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.hostHeader"></a>

```java
public DataAwsLbListenerRuleConditionHostHeaderOutputReference getHostHeader();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHostHeaderOutputReference">DataAwsLbListenerRuleConditionHostHeaderOutputReference</a>

---

##### `httpHeader`<sup>Required</sup> <a name="httpHeader" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.httpHeader"></a>

```java
public DataAwsLbListenerRuleConditionHttpHeaderOutputReference getHttpHeader();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpHeaderOutputReference">DataAwsLbListenerRuleConditionHttpHeaderOutputReference</a>

---

##### `httpRequestMethod`<sup>Required</sup> <a name="httpRequestMethod" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.httpRequestMethod"></a>

```java
public DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference getHttpRequestMethod();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference">DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference</a>

---

##### `pathPattern`<sup>Required</sup> <a name="pathPattern" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.pathPattern"></a>

```java
public DataAwsLbListenerRuleConditionPathPatternOutputReference getPathPattern();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference">DataAwsLbListenerRuleConditionPathPatternOutputReference</a>

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.queryString"></a>

```java
public DataAwsLbListenerRuleConditionQueryStringOutputReference getQueryString();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference">DataAwsLbListenerRuleConditionQueryStringOutputReference</a>

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.sourceIp"></a>

```java
public DataAwsLbListenerRuleConditionSourceIpOutputReference getSourceIp();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference">DataAwsLbListenerRuleConditionSourceIpOutputReference</a>

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.queryStringInput"></a>

```java
public java.lang.Object getQueryStringInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString">DataAwsLbListenerRuleConditionQueryString</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleCondition">DataAwsLbListenerRuleCondition</a>

---


### DataAwsLbListenerRuleConditionPathPatternOutputReference <a name="DataAwsLbListenerRuleConditionPathPatternOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleConditionPathPatternOutputReference;

new DataAwsLbListenerRuleConditionPathPatternOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPattern">DataAwsLbListenerRuleConditionPathPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPatternOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionPathPattern">DataAwsLbListenerRuleConditionPathPattern</a>

---


### DataAwsLbListenerRuleConditionQueryStringOutputReference <a name="DataAwsLbListenerRuleConditionQueryStringOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleConditionQueryStringOutputReference;

new DataAwsLbListenerRuleConditionQueryStringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.putValues">putValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValues` <a name="putValues" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.putValues"></a>

```java
public void putValues(IResolvable OR java.util.List<DataAwsLbListenerRuleConditionQueryStringValues> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.putValues.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues">DataAwsLbListenerRuleConditionQueryStringValues</a>>

---

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.property.values">values</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList">DataAwsLbListenerRuleConditionQueryStringValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.property.valuesInput">valuesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues">DataAwsLbListenerRuleConditionQueryStringValues</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString">DataAwsLbListenerRuleConditionQueryString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.property.values"></a>

```java
public DataAwsLbListenerRuleConditionQueryStringValuesList getValues();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList">DataAwsLbListenerRuleConditionQueryStringValuesList</a>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.property.valuesInput"></a>

```java
public java.lang.Object getValuesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues">DataAwsLbListenerRuleConditionQueryStringValues</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryString">DataAwsLbListenerRuleConditionQueryString</a>

---


### DataAwsLbListenerRuleConditionQueryStringValuesList <a name="DataAwsLbListenerRuleConditionQueryStringValuesList" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleConditionQueryStringValuesList;

new DataAwsLbListenerRuleConditionQueryStringValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.get"></a>

```java
public DataAwsLbListenerRuleConditionQueryStringValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues">DataAwsLbListenerRuleConditionQueryStringValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues">DataAwsLbListenerRuleConditionQueryStringValues</a>>

---


### DataAwsLbListenerRuleConditionQueryStringValuesOutputReference <a name="DataAwsLbListenerRuleConditionQueryStringValuesOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference;

new DataAwsLbListenerRuleConditionQueryStringValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues">DataAwsLbListenerRuleConditionQueryStringValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValuesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionQueryStringValues">DataAwsLbListenerRuleConditionQueryStringValues</a>

---


### DataAwsLbListenerRuleConditionSourceIpOutputReference <a name="DataAwsLbListenerRuleConditionSourceIpOutputReference" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lb_listener_rule.DataAwsLbListenerRuleConditionSourceIpOutputReference;

new DataAwsLbListenerRuleConditionSourceIpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIp">DataAwsLbListenerRuleConditionSourceIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIpOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsLbListenerRule.DataAwsLbListenerRuleConditionSourceIp">DataAwsLbListenerRuleConditionSourceIp</a>

---



