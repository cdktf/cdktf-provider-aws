# `lexv2ModelsBot` Submodule <a name="`lexv2ModelsBot` Submodule" id="@cdktf/provider-aws.lexv2ModelsBot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Lexv2ModelsBot <a name="Lexv2ModelsBot" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot aws_lexv2models_bot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_bot.Lexv2ModelsBot;

Lexv2ModelsBot.Builder.create(Construct scope, java.lang.String id)
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
    .idleSessionTtlInSeconds(java.lang.Number)
    .name(java.lang.String)
    .roleArn(java.lang.String)
//  .dataPrivacy(IResolvable)
//  .dataPrivacy(java.util.List<Lexv2ModelsBotDataPrivacy>)
//  .description(java.lang.String)
//  .members(IResolvable)
//  .members(java.util.List<Lexv2ModelsBotMembers>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .testBotAliasTags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Lexv2ModelsBotTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.idleSessionTtlInSeconds">idleSessionTtlInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#idle_session_ttl_in_seconds Lexv2ModelsBot#idle_session_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#name Lexv2ModelsBot#name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#role_arn Lexv2ModelsBot#role_arn}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.dataPrivacy">dataPrivacy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>></code> | data_privacy block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#description Lexv2ModelsBot#description}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.members">members</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>></code> | members block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#tags Lexv2ModelsBot#tags}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.testBotAliasTags">testBotAliasTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#test_bot_alias_tags Lexv2ModelsBot#test_bot_alias_tags}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#type Lexv2ModelsBot#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idleSessionTtlInSeconds`<sup>Required</sup> <a name="idleSessionTtlInSeconds" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.idleSessionTtlInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#idle_session_ttl_in_seconds Lexv2ModelsBot#idle_session_ttl_in_seconds}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#name Lexv2ModelsBot#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#role_arn Lexv2ModelsBot#role_arn}.

---

##### `dataPrivacy`<sup>Optional</sup> <a name="dataPrivacy" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.dataPrivacy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>>

data_privacy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#data_privacy Lexv2ModelsBot#data_privacy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#description Lexv2ModelsBot#description}.

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.members"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>>

members block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#members Lexv2ModelsBot#members}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#tags Lexv2ModelsBot#tags}.

---

##### `testBotAliasTags`<sup>Optional</sup> <a name="testBotAliasTags" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.testBotAliasTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#test_bot_alias_tags Lexv2ModelsBot#test_bot_alias_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#timeouts Lexv2ModelsBot#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#type Lexv2ModelsBot#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putDataPrivacy">putDataPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putMembers">putMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetDataPrivacy">resetDataPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetMembers">resetMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetTestBotAliasTags">resetTestBotAliasTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataPrivacy` <a name="putDataPrivacy" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putDataPrivacy"></a>

```java
public void putDataPrivacy(IResolvable OR java.util.List<Lexv2ModelsBotDataPrivacy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putDataPrivacy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>>

---

##### `putMembers` <a name="putMembers" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putMembers"></a>

```java
public void putMembers(IResolvable OR java.util.List<Lexv2ModelsBotMembers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putMembers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putTimeouts"></a>

```java
public void putTimeouts(Lexv2ModelsBotTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a>

---

##### `resetDataPrivacy` <a name="resetDataPrivacy" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetDataPrivacy"></a>

```java
public void resetDataPrivacy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetMembers` <a name="resetMembers" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetMembers"></a>

```java
public void resetMembers()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetTags"></a>

```java
public void resetTags()
```

##### `resetTestBotAliasTags` <a name="resetTestBotAliasTags" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetTestBotAliasTags"></a>

```java
public void resetTestBotAliasTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Lexv2ModelsBot resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_bot.Lexv2ModelsBot;

Lexv2ModelsBot.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_bot.Lexv2ModelsBot;

Lexv2ModelsBot.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_bot.Lexv2ModelsBot;

Lexv2ModelsBot.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_bot.Lexv2ModelsBot;

Lexv2ModelsBot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Lexv2ModelsBot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Lexv2ModelsBot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Lexv2ModelsBot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Lexv2ModelsBot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Lexv2ModelsBot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.dataPrivacy">dataPrivacy</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList">Lexv2ModelsBotDataPrivacyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.members">members</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList">Lexv2ModelsBotMembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference">Lexv2ModelsBotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.dataPrivacyInput">dataPrivacyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.idleSessionTtlInSecondsInput">idleSessionTtlInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.membersInput">membersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.testBotAliasTagsInput">testBotAliasTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.idleSessionTtlInSeconds">idleSessionTtlInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.testBotAliasTags">testBotAliasTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `dataPrivacy`<sup>Required</sup> <a name="dataPrivacy" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.dataPrivacy"></a>

```java
public Lexv2ModelsBotDataPrivacyList getDataPrivacy();
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList">Lexv2ModelsBotDataPrivacyList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.members"></a>

```java
public Lexv2ModelsBotMembersList getMembers();
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList">Lexv2ModelsBotMembersList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.timeouts"></a>

```java
public Lexv2ModelsBotTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference">Lexv2ModelsBotTimeoutsOutputReference</a>

---

##### `dataPrivacyInput`<sup>Optional</sup> <a name="dataPrivacyInput" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.dataPrivacyInput"></a>

```java
public java.lang.Object getDataPrivacyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idleSessionTtlInSecondsInput`<sup>Optional</sup> <a name="idleSessionTtlInSecondsInput" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.idleSessionTtlInSecondsInput"></a>

```java
public java.lang.Number getIdleSessionTtlInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.membersInput"></a>

```java
public java.lang.Object getMembersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `testBotAliasTagsInput`<sup>Optional</sup> <a name="testBotAliasTagsInput" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.testBotAliasTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTestBotAliasTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `idleSessionTtlInSeconds`<sup>Required</sup> <a name="idleSessionTtlInSeconds" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.idleSessionTtlInSeconds"></a>

```java
public java.lang.Number getIdleSessionTtlInSeconds();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `testBotAliasTags`<sup>Required</sup> <a name="testBotAliasTags" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.testBotAliasTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTestBotAliasTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Lexv2ModelsBotConfig <a name="Lexv2ModelsBotConfig" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_bot.Lexv2ModelsBotConfig;

Lexv2ModelsBotConfig.builder()
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
    .idleSessionTtlInSeconds(java.lang.Number)
    .name(java.lang.String)
    .roleArn(java.lang.String)
//  .dataPrivacy(IResolvable)
//  .dataPrivacy(java.util.List<Lexv2ModelsBotDataPrivacy>)
//  .description(java.lang.String)
//  .members(IResolvable)
//  .members(java.util.List<Lexv2ModelsBotMembers>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .testBotAliasTags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Lexv2ModelsBotTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.idleSessionTtlInSeconds">idleSessionTtlInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#idle_session_ttl_in_seconds Lexv2ModelsBot#idle_session_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#name Lexv2ModelsBot#name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#role_arn Lexv2ModelsBot#role_arn}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.dataPrivacy">dataPrivacy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>></code> | data_privacy block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#description Lexv2ModelsBot#description}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.members">members</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>></code> | members block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#tags Lexv2ModelsBot#tags}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.testBotAliasTags">testBotAliasTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#test_bot_alias_tags Lexv2ModelsBot#test_bot_alias_tags}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#type Lexv2ModelsBot#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idleSessionTtlInSeconds`<sup>Required</sup> <a name="idleSessionTtlInSeconds" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.idleSessionTtlInSeconds"></a>

```java
public java.lang.Number getIdleSessionTtlInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#idle_session_ttl_in_seconds Lexv2ModelsBot#idle_session_ttl_in_seconds}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#name Lexv2ModelsBot#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#role_arn Lexv2ModelsBot#role_arn}.

---

##### `dataPrivacy`<sup>Optional</sup> <a name="dataPrivacy" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.dataPrivacy"></a>

```java
public java.lang.Object getDataPrivacy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>>

data_privacy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#data_privacy Lexv2ModelsBot#data_privacy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#description Lexv2ModelsBot#description}.

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.members"></a>

```java
public java.lang.Object getMembers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>>

members block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#members Lexv2ModelsBot#members}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#tags Lexv2ModelsBot#tags}.

---

##### `testBotAliasTags`<sup>Optional</sup> <a name="testBotAliasTags" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.testBotAliasTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTestBotAliasTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#test_bot_alias_tags Lexv2ModelsBot#test_bot_alias_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.timeouts"></a>

```java
public Lexv2ModelsBotTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#timeouts Lexv2ModelsBot#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#type Lexv2ModelsBot#type}.

---

### Lexv2ModelsBotDataPrivacy <a name="Lexv2ModelsBotDataPrivacy" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_bot.Lexv2ModelsBotDataPrivacy;

Lexv2ModelsBotDataPrivacy.builder()
    .childDirected(java.lang.Boolean)
    .childDirected(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy.property.childDirected">childDirected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#child_directed Lexv2ModelsBot#child_directed}. |

---

##### `childDirected`<sup>Required</sup> <a name="childDirected" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy.property.childDirected"></a>

```java
public java.lang.Object getChildDirected();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#child_directed Lexv2ModelsBot#child_directed}.

---

### Lexv2ModelsBotMembers <a name="Lexv2ModelsBotMembers" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_bot.Lexv2ModelsBotMembers;

Lexv2ModelsBotMembers.builder()
    .aliasId(java.lang.String)
    .aliasName(java.lang.String)
    .id(java.lang.String)
    .name(java.lang.String)
    .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.aliasId">aliasId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#alias_id Lexv2ModelsBot#alias_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.aliasName">aliasName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#alias_name Lexv2ModelsBot#alias_name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#id Lexv2ModelsBot#id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#name Lexv2ModelsBot#name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#version Lexv2ModelsBot#version}. |

---

##### `aliasId`<sup>Required</sup> <a name="aliasId" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.aliasId"></a>

```java
public java.lang.String getAliasId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#alias_id Lexv2ModelsBot#alias_id}.

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.aliasName"></a>

```java
public java.lang.String getAliasName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#alias_name Lexv2ModelsBot#alias_name}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#id Lexv2ModelsBot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#name Lexv2ModelsBot#name}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#version Lexv2ModelsBot#version}.

---

### Lexv2ModelsBotTimeouts <a name="Lexv2ModelsBotTimeouts" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_bot.Lexv2ModelsBotTimeouts;

Lexv2ModelsBotTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#create Lexv2ModelsBot#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#delete Lexv2ModelsBot#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/lexv2models_bot#update Lexv2ModelsBot#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Lexv2ModelsBotDataPrivacyList <a name="Lexv2ModelsBotDataPrivacyList" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_bot.Lexv2ModelsBotDataPrivacyList;

new Lexv2ModelsBotDataPrivacyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.get"></a>

```java
public Lexv2ModelsBotDataPrivacyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>>

---


### Lexv2ModelsBotDataPrivacyOutputReference <a name="Lexv2ModelsBotDataPrivacyOutputReference" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_bot.Lexv2ModelsBotDataPrivacyOutputReference;

new Lexv2ModelsBotDataPrivacyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.childDirectedInput">childDirectedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.childDirected">childDirected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `childDirectedInput`<sup>Optional</sup> <a name="childDirectedInput" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.childDirectedInput"></a>

```java
public java.lang.Object getChildDirectedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `childDirected`<sup>Required</sup> <a name="childDirected" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.childDirected"></a>

```java
public java.lang.Object getChildDirected();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>

---


### Lexv2ModelsBotMembersList <a name="Lexv2ModelsBotMembersList" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_bot.Lexv2ModelsBotMembersList;

new Lexv2ModelsBotMembersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.get"></a>

```java
public Lexv2ModelsBotMembersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>>

---


### Lexv2ModelsBotMembersOutputReference <a name="Lexv2ModelsBotMembersOutputReference" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_bot.Lexv2ModelsBotMembersOutputReference;

new Lexv2ModelsBotMembersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasIdInput">aliasIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasNameInput">aliasNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasId">aliasId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasName">aliasName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliasIdInput`<sup>Optional</sup> <a name="aliasIdInput" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasIdInput"></a>

```java
public java.lang.String getAliasIdInput();
```

- *Type:* java.lang.String

---

##### `aliasNameInput`<sup>Optional</sup> <a name="aliasNameInput" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasNameInput"></a>

```java
public java.lang.String getAliasNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `aliasId`<sup>Required</sup> <a name="aliasId" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasId"></a>

```java
public java.lang.String getAliasId();
```

- *Type:* java.lang.String

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasName"></a>

```java
public java.lang.String getAliasName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>

---


### Lexv2ModelsBotTimeoutsOutputReference <a name="Lexv2ModelsBotTimeoutsOutputReference" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_bot.Lexv2ModelsBotTimeoutsOutputReference;

new Lexv2ModelsBotTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a>

---



