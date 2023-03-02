# `connectRoutingProfile` Submodule <a name="`connectRoutingProfile` Submodule" id="@cdktf/provider-aws.connectRoutingProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectRoutingProfile <a name="ConnectRoutingProfile" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile aws_connect_routing_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_routing_profile.ConnectRoutingProfile;

ConnectRoutingProfile.Builder.create(Construct scope, java.lang.String id)
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
    .defaultOutboundQueueId(java.lang.String)
    .description(java.lang.String)
    .instanceId(java.lang.String)
    .mediaConcurrencies(IResolvable)
    .mediaConcurrencies(java.util.List<ConnectRoutingProfileMediaConcurrencies>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .queueConfigs(IResolvable)
//  .queueConfigs(java.util.List<ConnectRoutingProfileQueueConfigs>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.defaultOutboundQueueId">defaultOutboundQueueId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#default_outbound_queue_id ConnectRoutingProfile#default_outbound_queue_id}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#description ConnectRoutingProfile#description}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#instance_id ConnectRoutingProfile#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.mediaConcurrencies">mediaConcurrencies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>></code> | media_concurrencies block. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#name ConnectRoutingProfile#name}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#id ConnectRoutingProfile#id}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.queueConfigs">queueConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>></code> | queue_configs block. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags ConnectRoutingProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags_all ConnectRoutingProfile#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultOutboundQueueId`<sup>Required</sup> <a name="defaultOutboundQueueId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.defaultOutboundQueueId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#default_outbound_queue_id ConnectRoutingProfile#default_outbound_queue_id}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#description ConnectRoutingProfile#description}.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#instance_id ConnectRoutingProfile#instance_id}.

---

##### `mediaConcurrencies`<sup>Required</sup> <a name="mediaConcurrencies" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.mediaConcurrencies"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>>

media_concurrencies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#media_concurrencies ConnectRoutingProfile#media_concurrencies}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#name ConnectRoutingProfile#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#id ConnectRoutingProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queueConfigs`<sup>Optional</sup> <a name="queueConfigs" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.queueConfigs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>>

queue_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#queue_configs ConnectRoutingProfile#queue_configs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags ConnectRoutingProfile#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags_all ConnectRoutingProfile#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies">putMediaConcurrencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs">putQueueConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetQueueConfigs">resetQueueConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMediaConcurrencies` <a name="putMediaConcurrencies" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies"></a>

```java
public void putMediaConcurrencies(IResolvable OR java.util.List<ConnectRoutingProfileMediaConcurrencies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>>

---

##### `putQueueConfigs` <a name="putQueueConfigs" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs"></a>

```java
public void putQueueConfigs(IResolvable OR java.util.List<ConnectRoutingProfileQueueConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetId"></a>

```java
public void resetId()
```

##### `resetQueueConfigs` <a name="resetQueueConfigs" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetQueueConfigs"></a>

```java
public void resetQueueConfigs()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_routing_profile.ConnectRoutingProfile;

ConnectRoutingProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_routing_profile.ConnectRoutingProfile;

ConnectRoutingProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_routing_profile.ConnectRoutingProfile;

ConnectRoutingProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrencies">mediaConcurrencies</a></code> | <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList">ConnectRoutingProfileMediaConcurrenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigs">queueConfigs</a></code> | <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList">ConnectRoutingProfileQueueConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigsAssociated">queueConfigsAssociated</a></code> | <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList">ConnectRoutingProfileQueueConfigsAssociatedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.routingProfileId">routingProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueIdInput">defaultOutboundQueueIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrenciesInput">mediaConcurrenciesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigsInput">queueConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueId">defaultOutboundQueueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `mediaConcurrencies`<sup>Required</sup> <a name="mediaConcurrencies" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrencies"></a>

```java
public ConnectRoutingProfileMediaConcurrenciesList getMediaConcurrencies();
```

- *Type:* <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList">ConnectRoutingProfileMediaConcurrenciesList</a>

---

##### `queueConfigs`<sup>Required</sup> <a name="queueConfigs" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigs"></a>

```java
public ConnectRoutingProfileQueueConfigsList getQueueConfigs();
```

- *Type:* <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList">ConnectRoutingProfileQueueConfigsList</a>

---

##### `queueConfigsAssociated`<sup>Required</sup> <a name="queueConfigsAssociated" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigsAssociated"></a>

```java
public ConnectRoutingProfileQueueConfigsAssociatedList getQueueConfigsAssociated();
```

- *Type:* <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList">ConnectRoutingProfileQueueConfigsAssociatedList</a>

---

##### `routingProfileId`<sup>Required</sup> <a name="routingProfileId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.routingProfileId"></a>

```java
public java.lang.String getRoutingProfileId();
```

- *Type:* java.lang.String

---

##### `defaultOutboundQueueIdInput`<sup>Optional</sup> <a name="defaultOutboundQueueIdInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueIdInput"></a>

```java
public java.lang.String getDefaultOutboundQueueIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `mediaConcurrenciesInput`<sup>Optional</sup> <a name="mediaConcurrenciesInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrenciesInput"></a>

```java
public java.lang.Object getMediaConcurrenciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queueConfigsInput`<sup>Optional</sup> <a name="queueConfigsInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigsInput"></a>

```java
public java.lang.Object getQueueConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultOutboundQueueId`<sup>Required</sup> <a name="defaultOutboundQueueId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueId"></a>

```java
public java.lang.String getDefaultOutboundQueueId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectRoutingProfileConfig <a name="ConnectRoutingProfileConfig" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_routing_profile.ConnectRoutingProfileConfig;

ConnectRoutingProfileConfig.builder()
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
    .defaultOutboundQueueId(java.lang.String)
    .description(java.lang.String)
    .instanceId(java.lang.String)
    .mediaConcurrencies(IResolvable)
    .mediaConcurrencies(java.util.List<ConnectRoutingProfileMediaConcurrencies>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .queueConfigs(IResolvable)
//  .queueConfigs(java.util.List<ConnectRoutingProfileQueueConfigs>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.defaultOutboundQueueId">defaultOutboundQueueId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#default_outbound_queue_id ConnectRoutingProfile#default_outbound_queue_id}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#description ConnectRoutingProfile#description}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#instance_id ConnectRoutingProfile#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.mediaConcurrencies">mediaConcurrencies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>></code> | media_concurrencies block. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#name ConnectRoutingProfile#name}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#id ConnectRoutingProfile#id}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.queueConfigs">queueConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>></code> | queue_configs block. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags ConnectRoutingProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags_all ConnectRoutingProfile#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultOutboundQueueId`<sup>Required</sup> <a name="defaultOutboundQueueId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.defaultOutboundQueueId"></a>

```java
public java.lang.String getDefaultOutboundQueueId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#default_outbound_queue_id ConnectRoutingProfile#default_outbound_queue_id}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#description ConnectRoutingProfile#description}.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#instance_id ConnectRoutingProfile#instance_id}.

---

##### `mediaConcurrencies`<sup>Required</sup> <a name="mediaConcurrencies" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.mediaConcurrencies"></a>

```java
public java.lang.Object getMediaConcurrencies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>>

media_concurrencies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#media_concurrencies ConnectRoutingProfile#media_concurrencies}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#name ConnectRoutingProfile#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#id ConnectRoutingProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queueConfigs`<sup>Optional</sup> <a name="queueConfigs" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.queueConfigs"></a>

```java
public java.lang.Object getQueueConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>>

queue_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#queue_configs ConnectRoutingProfile#queue_configs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags ConnectRoutingProfile#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags_all ConnectRoutingProfile#tags_all}.

---

### ConnectRoutingProfileMediaConcurrencies <a name="ConnectRoutingProfileMediaConcurrencies" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_routing_profile.ConnectRoutingProfileMediaConcurrencies;

ConnectRoutingProfileMediaConcurrencies.builder()
    .channel(java.lang.String)
    .concurrency(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.channel">channel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#channel ConnectRoutingProfile#channel}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.concurrency">concurrency</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#concurrency ConnectRoutingProfile#concurrency}. |

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#channel ConnectRoutingProfile#channel}.

---

##### `concurrency`<sup>Required</sup> <a name="concurrency" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.concurrency"></a>

```java
public java.lang.Number getConcurrency();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#concurrency ConnectRoutingProfile#concurrency}.

---

### ConnectRoutingProfileQueueConfigs <a name="ConnectRoutingProfileQueueConfigs" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_routing_profile.ConnectRoutingProfileQueueConfigs;

ConnectRoutingProfileQueueConfigs.builder()
    .channel(java.lang.String)
    .delay(java.lang.Number)
    .priority(java.lang.Number)
    .queueId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.channel">channel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#channel ConnectRoutingProfile#channel}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.delay">delay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#delay ConnectRoutingProfile#delay}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#priority ConnectRoutingProfile#priority}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.queueId">queueId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#queue_id ConnectRoutingProfile#queue_id}. |

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#channel ConnectRoutingProfile#channel}.

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.delay"></a>

```java
public java.lang.Number getDelay();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#delay ConnectRoutingProfile#delay}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#priority ConnectRoutingProfile#priority}.

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.queueId"></a>

```java
public java.lang.String getQueueId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#queue_id ConnectRoutingProfile#queue_id}.

---

### ConnectRoutingProfileQueueConfigsAssociated <a name="ConnectRoutingProfileQueueConfigsAssociated" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociated.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_routing_profile.ConnectRoutingProfileQueueConfigsAssociated;

ConnectRoutingProfileQueueConfigsAssociated.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### ConnectRoutingProfileMediaConcurrenciesList <a name="ConnectRoutingProfileMediaConcurrenciesList" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_routing_profile.ConnectRoutingProfileMediaConcurrenciesList;

new ConnectRoutingProfileMediaConcurrenciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get"></a>

```java
public ConnectRoutingProfileMediaConcurrenciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>>

---


### ConnectRoutingProfileMediaConcurrenciesOutputReference <a name="ConnectRoutingProfileMediaConcurrenciesOutputReference" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_routing_profile.ConnectRoutingProfileMediaConcurrenciesOutputReference;

new ConnectRoutingProfileMediaConcurrenciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channelInput">channelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrencyInput">concurrencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency">concurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channelInput"></a>

```java
public java.lang.String getChannelInput();
```

- *Type:* java.lang.String

---

##### `concurrencyInput`<sup>Optional</sup> <a name="concurrencyInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrencyInput"></a>

```java
public java.lang.Number getConcurrencyInput();
```

- *Type:* java.lang.Number

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `concurrency`<sup>Required</sup> <a name="concurrency" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency"></a>

```java
public java.lang.Number getConcurrency();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a> OR com.hashicorp.cdktf.IResolvable

---


### ConnectRoutingProfileQueueConfigsAssociatedList <a name="ConnectRoutingProfileQueueConfigsAssociatedList" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_routing_profile.ConnectRoutingProfileQueueConfigsAssociatedList;

new ConnectRoutingProfileQueueConfigsAssociatedList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.get"></a>

```java
public ConnectRoutingProfileQueueConfigsAssociatedOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ConnectRoutingProfileQueueConfigsAssociatedOutputReference <a name="ConnectRoutingProfileQueueConfigsAssociatedOutputReference" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_routing_profile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference;

new ConnectRoutingProfileQueueConfigsAssociatedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.delay">delay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.queueArn">queueArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.queueId">queueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.queueName">queueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociated">ConnectRoutingProfileQueueConfigsAssociated</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.delay"></a>

```java
public java.lang.Number getDelay();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.queueArn"></a>

```java
public java.lang.String getQueueArn();
```

- *Type:* java.lang.String

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.queueId"></a>

```java
public java.lang.String getQueueId();
```

- *Type:* java.lang.String

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.queueName"></a>

```java
public java.lang.String getQueueName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.internalValue"></a>

```java
public ConnectRoutingProfileQueueConfigsAssociated getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociated">ConnectRoutingProfileQueueConfigsAssociated</a>

---


### ConnectRoutingProfileQueueConfigsList <a name="ConnectRoutingProfileQueueConfigsList" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_routing_profile.ConnectRoutingProfileQueueConfigsList;

new ConnectRoutingProfileQueueConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get"></a>

```java
public ConnectRoutingProfileQueueConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>>

---


### ConnectRoutingProfileQueueConfigsOutputReference <a name="ConnectRoutingProfileQueueConfigsOutputReference" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_routing_profile.ConnectRoutingProfileQueueConfigsOutputReference;

new ConnectRoutingProfileQueueConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueArn">queueArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueName">queueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.channelInput">channelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delayInput">delayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueIdInput">queueIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delay">delay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueId">queueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueArn"></a>

```java
public java.lang.String getQueueArn();
```

- *Type:* java.lang.String

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueName"></a>

```java
public java.lang.String getQueueName();
```

- *Type:* java.lang.String

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.channelInput"></a>

```java
public java.lang.String getChannelInput();
```

- *Type:* java.lang.String

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delayInput"></a>

```java
public java.lang.Number getDelayInput();
```

- *Type:* java.lang.Number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `queueIdInput`<sup>Optional</sup> <a name="queueIdInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueIdInput"></a>

```java
public java.lang.String getQueueIdInput();
```

- *Type:* java.lang.String

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delay"></a>

```java
public java.lang.Number getDelay();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueId"></a>

```java
public java.lang.String getQueueId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a> OR com.hashicorp.cdktf.IResolvable

---



