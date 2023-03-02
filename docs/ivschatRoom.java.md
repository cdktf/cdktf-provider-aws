# `ivschatRoom` Submodule <a name="`ivschatRoom` Submodule" id="@cdktf/provider-aws.ivschatRoom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvschatRoom <a name="IvschatRoom" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room aws_ivschat_room}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ivschat_room.IvschatRoom;

IvschatRoom.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .loggingConfigurationIdentifiers(java.util.List<java.lang.String>)
//  .maximumMessageLength(java.lang.Number)
//  .maximumMessageRatePerSecond(java.lang.Number)
//  .messageReviewHandler(IvschatRoomMessageReviewHandler)
//  .name(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(IvschatRoomTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#id IvschatRoom#id}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.loggingConfigurationIdentifiers">loggingConfigurationIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#logging_configuration_identifiers IvschatRoom#logging_configuration_identifiers}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.maximumMessageLength">maximumMessageLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_length IvschatRoom#maximum_message_length}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.maximumMessageRatePerSecond">maximumMessageRatePerSecond</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_rate_per_second IvschatRoom#maximum_message_rate_per_second}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.messageReviewHandler">messageReviewHandler</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a></code> | message_review_handler block. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#name IvschatRoom#name}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags IvschatRoom#tags}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags_all IvschatRoom#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#id IvschatRoom#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingConfigurationIdentifiers`<sup>Optional</sup> <a name="loggingConfigurationIdentifiers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.loggingConfigurationIdentifiers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#logging_configuration_identifiers IvschatRoom#logging_configuration_identifiers}.

---

##### `maximumMessageLength`<sup>Optional</sup> <a name="maximumMessageLength" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.maximumMessageLength"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_length IvschatRoom#maximum_message_length}.

---

##### `maximumMessageRatePerSecond`<sup>Optional</sup> <a name="maximumMessageRatePerSecond" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.maximumMessageRatePerSecond"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_rate_per_second IvschatRoom#maximum_message_rate_per_second}.

---

##### `messageReviewHandler`<sup>Optional</sup> <a name="messageReviewHandler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.messageReviewHandler"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

message_review_handler block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#message_review_handler IvschatRoom#message_review_handler}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#name IvschatRoom#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags IvschatRoom#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

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
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.putMessageReviewHandler">putMessageReviewHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetLoggingConfigurationIdentifiers">resetLoggingConfigurationIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMaximumMessageLength">resetMaximumMessageLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMaximumMessageRatePerSecond">resetMaximumMessageRatePerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMessageReviewHandler">resetMessageReviewHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMessageReviewHandler` <a name="putMessageReviewHandler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.putMessageReviewHandler"></a>

```java
public void putMessageReviewHandler(IvschatRoomMessageReviewHandler value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.putMessageReviewHandler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.putTimeouts"></a>

```java
public void putTimeouts(IvschatRoomTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetId"></a>

```java
public void resetId()
```

##### `resetLoggingConfigurationIdentifiers` <a name="resetLoggingConfigurationIdentifiers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetLoggingConfigurationIdentifiers"></a>

```java
public void resetLoggingConfigurationIdentifiers()
```

##### `resetMaximumMessageLength` <a name="resetMaximumMessageLength" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMaximumMessageLength"></a>

```java
public void resetMaximumMessageLength()
```

##### `resetMaximumMessageRatePerSecond` <a name="resetMaximumMessageRatePerSecond" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMaximumMessageRatePerSecond"></a>

```java
public void resetMaximumMessageRatePerSecond()
```

##### `resetMessageReviewHandler` <a name="resetMessageReviewHandler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMessageReviewHandler"></a>

```java
public void resetMessageReviewHandler()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ivschat_room.IvschatRoom;

IvschatRoom.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ivschat_room.IvschatRoom;

IvschatRoom.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ivschat_room.IvschatRoom;

IvschatRoom.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.messageReviewHandler">messageReviewHandler</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference">IvschatRoomMessageReviewHandlerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference">IvschatRoomTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.loggingConfigurationIdentifiersInput">loggingConfigurationIdentifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageLengthInput">maximumMessageLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageRatePerSecondInput">maximumMessageRatePerSecondInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.messageReviewHandlerInput">messageReviewHandlerInput</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.loggingConfigurationIdentifiers">loggingConfigurationIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageLength">maximumMessageLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageRatePerSecond">maximumMessageRatePerSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `messageReviewHandler`<sup>Required</sup> <a name="messageReviewHandler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.messageReviewHandler"></a>

```java
public IvschatRoomMessageReviewHandlerOutputReference getMessageReviewHandler();
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference">IvschatRoomMessageReviewHandlerOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.timeouts"></a>

```java
public IvschatRoomTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference">IvschatRoomTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loggingConfigurationIdentifiersInput`<sup>Optional</sup> <a name="loggingConfigurationIdentifiersInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.loggingConfigurationIdentifiersInput"></a>

```java
public java.util.List<java.lang.String> getLoggingConfigurationIdentifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maximumMessageLengthInput`<sup>Optional</sup> <a name="maximumMessageLengthInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageLengthInput"></a>

```java
public java.lang.Number getMaximumMessageLengthInput();
```

- *Type:* java.lang.Number

---

##### `maximumMessageRatePerSecondInput`<sup>Optional</sup> <a name="maximumMessageRatePerSecondInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageRatePerSecondInput"></a>

```java
public java.lang.Number getMaximumMessageRatePerSecondInput();
```

- *Type:* java.lang.Number

---

##### `messageReviewHandlerInput`<sup>Optional</sup> <a name="messageReviewHandlerInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.messageReviewHandlerInput"></a>

```java
public IvschatRoomMessageReviewHandler getMessageReviewHandlerInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loggingConfigurationIdentifiers`<sup>Required</sup> <a name="loggingConfigurationIdentifiers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.loggingConfigurationIdentifiers"></a>

```java
public java.util.List<java.lang.String> getLoggingConfigurationIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maximumMessageLength`<sup>Required</sup> <a name="maximumMessageLength" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageLength"></a>

```java
public java.lang.Number getMaximumMessageLength();
```

- *Type:* java.lang.Number

---

##### `maximumMessageRatePerSecond`<sup>Required</sup> <a name="maximumMessageRatePerSecond" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageRatePerSecond"></a>

```java
public java.lang.Number getMaximumMessageRatePerSecond();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IvschatRoomConfig <a name="IvschatRoomConfig" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ivschat_room.IvschatRoomConfig;

IvschatRoomConfig.builder()
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
//  .id(java.lang.String)
//  .loggingConfigurationIdentifiers(java.util.List<java.lang.String>)
//  .maximumMessageLength(java.lang.Number)
//  .maximumMessageRatePerSecond(java.lang.Number)
//  .messageReviewHandler(IvschatRoomMessageReviewHandler)
//  .name(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(IvschatRoomTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#id IvschatRoom#id}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.loggingConfigurationIdentifiers">loggingConfigurationIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#logging_configuration_identifiers IvschatRoom#logging_configuration_identifiers}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.maximumMessageLength">maximumMessageLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_length IvschatRoom#maximum_message_length}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.maximumMessageRatePerSecond">maximumMessageRatePerSecond</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_rate_per_second IvschatRoom#maximum_message_rate_per_second}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.messageReviewHandler">messageReviewHandler</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a></code> | message_review_handler block. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#name IvschatRoom#name}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags IvschatRoom#tags}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags_all IvschatRoom#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#id IvschatRoom#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingConfigurationIdentifiers`<sup>Optional</sup> <a name="loggingConfigurationIdentifiers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.loggingConfigurationIdentifiers"></a>

```java
public java.util.List<java.lang.String> getLoggingConfigurationIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#logging_configuration_identifiers IvschatRoom#logging_configuration_identifiers}.

---

##### `maximumMessageLength`<sup>Optional</sup> <a name="maximumMessageLength" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.maximumMessageLength"></a>

```java
public java.lang.Number getMaximumMessageLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_length IvschatRoom#maximum_message_length}.

---

##### `maximumMessageRatePerSecond`<sup>Optional</sup> <a name="maximumMessageRatePerSecond" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.maximumMessageRatePerSecond"></a>

```java
public java.lang.Number getMaximumMessageRatePerSecond();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_rate_per_second IvschatRoom#maximum_message_rate_per_second}.

---

##### `messageReviewHandler`<sup>Optional</sup> <a name="messageReviewHandler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.messageReviewHandler"></a>

```java
public IvschatRoomMessageReviewHandler getMessageReviewHandler();
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

message_review_handler block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#message_review_handler IvschatRoom#message_review_handler}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#name IvschatRoom#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags IvschatRoom#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags_all IvschatRoom#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.timeouts"></a>

```java
public IvschatRoomTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#timeouts IvschatRoom#timeouts}

---

### IvschatRoomMessageReviewHandler <a name="IvschatRoomMessageReviewHandler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ivschat_room.IvschatRoomMessageReviewHandler;

IvschatRoomMessageReviewHandler.builder()
//  .fallbackResult(java.lang.String)
//  .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler.property.fallbackResult">fallbackResult</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#fallback_result IvschatRoom#fallback_result}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#uri IvschatRoom#uri}. |

---

##### `fallbackResult`<sup>Optional</sup> <a name="fallbackResult" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler.property.fallbackResult"></a>

```java
public java.lang.String getFallbackResult();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#fallback_result IvschatRoom#fallback_result}.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#uri IvschatRoom#uri}.

---

### IvschatRoomTimeouts <a name="IvschatRoomTimeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ivschat_room.IvschatRoomTimeouts;

IvschatRoomTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#create IvschatRoom#create}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#delete IvschatRoom#delete}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#update IvschatRoom#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#create IvschatRoom#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#delete IvschatRoom#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#update IvschatRoom#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IvschatRoomMessageReviewHandlerOutputReference <a name="IvschatRoomMessageReviewHandlerOutputReference" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ivschat_room.IvschatRoomMessageReviewHandlerOutputReference;

new IvschatRoomMessageReviewHandlerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resetFallbackResult">resetFallbackResult</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFallbackResult` <a name="resetFallbackResult" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resetFallbackResult"></a>

```java
public void resetFallbackResult()
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resetUri"></a>

```java
public void resetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fallbackResultInput">fallbackResultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fallbackResult">fallbackResult</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fallbackResultInput`<sup>Optional</sup> <a name="fallbackResultInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fallbackResultInput"></a>

```java
public java.lang.String getFallbackResultInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `fallbackResult`<sup>Required</sup> <a name="fallbackResult" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fallbackResult"></a>

```java
public java.lang.String getFallbackResult();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.internalValue"></a>

```java
public IvschatRoomMessageReviewHandler getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

---


### IvschatRoomTimeoutsOutputReference <a name="IvschatRoomTimeoutsOutputReference" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ivschat_room.IvschatRoomTimeoutsOutputReference;

new IvschatRoomTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



