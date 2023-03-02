# `codestarnotificationsNotificationRule` Submodule <a name="`codestarnotificationsNotificationRule` Submodule" id="@cdktf/provider-aws.codestarnotificationsNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodestarnotificationsNotificationRule <a name="CodestarnotificationsNotificationRule" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule aws_codestarnotifications_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codestarnotifications_notification_rule.CodestarnotificationsNotificationRule;

CodestarnotificationsNotificationRule.Builder.create(Construct scope, java.lang.String id)
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
    .detailType(java.lang.String)
    .eventTypeIds(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .resource(java.lang.String)
//  .id(java.lang.String)
//  .status(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .target(IResolvable)
//  .target(java.util.List<CodestarnotificationsNotificationRuleTarget>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.detailType">detailType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#detail_type CodestarnotificationsNotificationRule#detail_type}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.eventTypeIds">eventTypeIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#name CodestarnotificationsNotificationRule#name}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.resource">resource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#resource CodestarnotificationsNotificationRule#resource}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#id CodestarnotificationsNotificationRule#id}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#status CodestarnotificationsNotificationRule#status}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#tags CodestarnotificationsNotificationRule#tags}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#tags_all CodestarnotificationsNotificationRule#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.target">target</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget">CodestarnotificationsNotificationRuleTarget</a>></code> | target block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `detailType`<sup>Required</sup> <a name="detailType" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.detailType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#detail_type CodestarnotificationsNotificationRule#detail_type}.

---

##### `eventTypeIds`<sup>Required</sup> <a name="eventTypeIds" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.eventTypeIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#name CodestarnotificationsNotificationRule#name}.

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.resource"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#resource CodestarnotificationsNotificationRule#resource}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#id CodestarnotificationsNotificationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#status CodestarnotificationsNotificationRule#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#tags CodestarnotificationsNotificationRule#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#tags_all CodestarnotificationsNotificationRule#tags_all}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.target"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget">CodestarnotificationsNotificationRuleTarget</a>>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#target CodestarnotificationsNotificationRule#target}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.putTarget"></a>

```java
public void putTarget(IResolvable OR java.util.List<CodestarnotificationsNotificationRuleTarget> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.putTarget.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget">CodestarnotificationsNotificationRuleTarget</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetId"></a>

```java
public void resetId()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTarget"></a>

```java
public void resetTarget()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.codestarnotifications_notification_rule.CodestarnotificationsNotificationRule;

CodestarnotificationsNotificationRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.codestarnotifications_notification_rule.CodestarnotificationsNotificationRule;

CodestarnotificationsNotificationRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.codestarnotifications_notification_rule.CodestarnotificationsNotificationRule;

CodestarnotificationsNotificationRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList">CodestarnotificationsNotificationRuleTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.detailTypeInput">detailTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIdsInput">eventTypeIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.resourceInput">resourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targetInput">targetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget">CodestarnotificationsNotificationRuleTarget</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.detailType">detailType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIds">eventTypeIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.target"></a>

```java
public CodestarnotificationsNotificationRuleTargetList getTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList">CodestarnotificationsNotificationRuleTargetList</a>

---

##### `detailTypeInput`<sup>Optional</sup> <a name="detailTypeInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.detailTypeInput"></a>

```java
public java.lang.String getDetailTypeInput();
```

- *Type:* java.lang.String

---

##### `eventTypeIdsInput`<sup>Optional</sup> <a name="eventTypeIdsInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIdsInput"></a>

```java
public java.util.List<java.lang.String> getEventTypeIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.resourceInput"></a>

```java
public java.lang.String getResourceInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targetInput"></a>

```java
public java.lang.Object getTargetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget">CodestarnotificationsNotificationRuleTarget</a>>

---

##### `detailType`<sup>Required</sup> <a name="detailType" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.detailType"></a>

```java
public java.lang.String getDetailType();
```

- *Type:* java.lang.String

---

##### `eventTypeIds`<sup>Required</sup> <a name="eventTypeIds" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIds"></a>

```java
public java.util.List<java.lang.String> getEventTypeIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodestarnotificationsNotificationRuleConfig <a name="CodestarnotificationsNotificationRuleConfig" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codestarnotifications_notification_rule.CodestarnotificationsNotificationRuleConfig;

CodestarnotificationsNotificationRuleConfig.builder()
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
    .detailType(java.lang.String)
    .eventTypeIds(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .resource(java.lang.String)
//  .id(java.lang.String)
//  .status(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .target(IResolvable)
//  .target(java.util.List<CodestarnotificationsNotificationRuleTarget>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.detailType">detailType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#detail_type CodestarnotificationsNotificationRule#detail_type}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.eventTypeIds">eventTypeIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#name CodestarnotificationsNotificationRule#name}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.resource">resource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#resource CodestarnotificationsNotificationRule#resource}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#id CodestarnotificationsNotificationRule#id}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#status CodestarnotificationsNotificationRule#status}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#tags CodestarnotificationsNotificationRule#tags}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#tags_all CodestarnotificationsNotificationRule#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.target">target</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget">CodestarnotificationsNotificationRuleTarget</a>></code> | target block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `detailType`<sup>Required</sup> <a name="detailType" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.detailType"></a>

```java
public java.lang.String getDetailType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#detail_type CodestarnotificationsNotificationRule#detail_type}.

---

##### `eventTypeIds`<sup>Required</sup> <a name="eventTypeIds" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.eventTypeIds"></a>

```java
public java.util.List<java.lang.String> getEventTypeIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#name CodestarnotificationsNotificationRule#name}.

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#resource CodestarnotificationsNotificationRule#resource}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#id CodestarnotificationsNotificationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#status CodestarnotificationsNotificationRule#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#tags CodestarnotificationsNotificationRule#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#tags_all CodestarnotificationsNotificationRule#tags_all}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.target"></a>

```java
public java.lang.Object getTarget();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget">CodestarnotificationsNotificationRuleTarget</a>>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#target CodestarnotificationsNotificationRule#target}

---

### CodestarnotificationsNotificationRuleTarget <a name="CodestarnotificationsNotificationRuleTarget" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codestarnotifications_notification_rule.CodestarnotificationsNotificationRuleTarget;

CodestarnotificationsNotificationRuleTarget.builder()
    .address(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget.property.address">address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#address CodestarnotificationsNotificationRule#address}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#type CodestarnotificationsNotificationRule#type}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#address CodestarnotificationsNotificationRule#address}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#type CodestarnotificationsNotificationRule#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodestarnotificationsNotificationRuleTargetList <a name="CodestarnotificationsNotificationRuleTargetList" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codestarnotifications_notification_rule.CodestarnotificationsNotificationRuleTargetList;

new CodestarnotificationsNotificationRuleTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.get"></a>

```java
public CodestarnotificationsNotificationRuleTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget">CodestarnotificationsNotificationRuleTarget</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget">CodestarnotificationsNotificationRuleTarget</a>>

---


### CodestarnotificationsNotificationRuleTargetOutputReference <a name="CodestarnotificationsNotificationRuleTargetOutputReference" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codestarnotifications_notification_rule.CodestarnotificationsNotificationRuleTargetOutputReference;

new CodestarnotificationsNotificationRuleTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget">CodestarnotificationsNotificationRuleTarget</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget">CodestarnotificationsNotificationRuleTarget</a> OR com.hashicorp.cdktf.IResolvable

---



