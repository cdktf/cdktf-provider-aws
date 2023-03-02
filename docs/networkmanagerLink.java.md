# `networkmanagerLink` Submodule <a name="`networkmanagerLink` Submodule" id="@cdktf/provider-aws.networkmanagerLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerLink <a name="NetworkmanagerLink" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link aws_networkmanager_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_link.NetworkmanagerLink;

NetworkmanagerLink.Builder.create(Construct scope, java.lang.String id)
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
    .bandwidth(NetworkmanagerLinkBandwidth)
    .globalNetworkId(java.lang.String)
    .siteId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .providerName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(NetworkmanagerLinkTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.bandwidth">bandwidth</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a></code> | bandwidth block. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.globalNetworkId">globalNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#global_network_id NetworkmanagerLink#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.siteId">siteId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#site_id NetworkmanagerLink#site_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#description NetworkmanagerLink#description}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#id NetworkmanagerLink#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#provider_name NetworkmanagerLink#provider_name}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#tags NetworkmanagerLink#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#tags_all NetworkmanagerLink#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeouts">NetworkmanagerLinkTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#type NetworkmanagerLink#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.bandwidth"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a>

bandwidth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#bandwidth NetworkmanagerLink#bandwidth}

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.globalNetworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#global_network_id NetworkmanagerLink#global_network_id}.

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.siteId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#site_id NetworkmanagerLink#site_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#description NetworkmanagerLink#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#id NetworkmanagerLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerName`<sup>Optional</sup> <a name="providerName" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.providerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#provider_name NetworkmanagerLink#provider_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#tags NetworkmanagerLink#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#tags_all NetworkmanagerLink#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeouts">NetworkmanagerLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#timeouts NetworkmanagerLink#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#type NetworkmanagerLink#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.putBandwidth">putBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.resetProviderName">resetProviderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putBandwidth` <a name="putBandwidth" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.putBandwidth"></a>

```java
public void putBandwidth(NetworkmanagerLinkBandwidth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.putBandwidth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.putTimeouts"></a>

```java
public void putTimeouts(NetworkmanagerLinkTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeouts">NetworkmanagerLinkTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.resetId"></a>

```java
public void resetId()
```

##### `resetProviderName` <a name="resetProviderName" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.resetProviderName"></a>

```java
public void resetProviderName()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_link.NetworkmanagerLink;

NetworkmanagerLink.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_link.NetworkmanagerLink;

NetworkmanagerLink.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_link.NetworkmanagerLink;

NetworkmanagerLink.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.bandwidth">bandwidth</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference">NetworkmanagerLinkBandwidthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference">NetworkmanagerLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.bandwidthInput">bandwidthInput</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.globalNetworkIdInput">globalNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.providerNameInput">providerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.siteIdInput">siteIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeouts">NetworkmanagerLinkTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.globalNetworkId">globalNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.siteId">siteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.bandwidth"></a>

```java
public NetworkmanagerLinkBandwidthOutputReference getBandwidth();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference">NetworkmanagerLinkBandwidthOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.timeouts"></a>

```java
public NetworkmanagerLinkTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference">NetworkmanagerLinkTimeoutsOutputReference</a>

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.bandwidthInput"></a>

```java
public NetworkmanagerLinkBandwidth getBandwidthInput();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `globalNetworkIdInput`<sup>Optional</sup> <a name="globalNetworkIdInput" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.globalNetworkIdInput"></a>

```java
public java.lang.String getGlobalNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.providerNameInput"></a>

```java
public java.lang.String getProviderNameInput();
```

- *Type:* java.lang.String

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.siteIdInput"></a>

```java
public java.lang.String getSiteIdInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeouts">NetworkmanagerLinkTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.globalNetworkId"></a>

```java
public java.lang.String getGlobalNetworkId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLink.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerLinkBandwidth <a name="NetworkmanagerLinkBandwidth" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_link.NetworkmanagerLinkBandwidth;

NetworkmanagerLinkBandwidth.builder()
//  .downloadSpeed(java.lang.Number)
//  .uploadSpeed(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidth.property.downloadSpeed">downloadSpeed</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#download_speed NetworkmanagerLink#download_speed}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidth.property.uploadSpeed">uploadSpeed</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#upload_speed NetworkmanagerLink#upload_speed}. |

---

##### `downloadSpeed`<sup>Optional</sup> <a name="downloadSpeed" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidth.property.downloadSpeed"></a>

```java
public java.lang.Number getDownloadSpeed();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#download_speed NetworkmanagerLink#download_speed}.

---

##### `uploadSpeed`<sup>Optional</sup> <a name="uploadSpeed" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidth.property.uploadSpeed"></a>

```java
public java.lang.Number getUploadSpeed();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#upload_speed NetworkmanagerLink#upload_speed}.

---

### NetworkmanagerLinkConfig <a name="NetworkmanagerLinkConfig" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_link.NetworkmanagerLinkConfig;

NetworkmanagerLinkConfig.builder()
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
    .bandwidth(NetworkmanagerLinkBandwidth)
    .globalNetworkId(java.lang.String)
    .siteId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .providerName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(NetworkmanagerLinkTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.bandwidth">bandwidth</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a></code> | bandwidth block. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.globalNetworkId">globalNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#global_network_id NetworkmanagerLink#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.siteId">siteId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#site_id NetworkmanagerLink#site_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#description NetworkmanagerLink#description}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#id NetworkmanagerLink#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#provider_name NetworkmanagerLink#provider_name}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#tags NetworkmanagerLink#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#tags_all NetworkmanagerLink#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeouts">NetworkmanagerLinkTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#type NetworkmanagerLink#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.bandwidth"></a>

```java
public NetworkmanagerLinkBandwidth getBandwidth();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a>

bandwidth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#bandwidth NetworkmanagerLink#bandwidth}

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.globalNetworkId"></a>

```java
public java.lang.String getGlobalNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#global_network_id NetworkmanagerLink#global_network_id}.

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#site_id NetworkmanagerLink#site_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#description NetworkmanagerLink#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#id NetworkmanagerLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerName`<sup>Optional</sup> <a name="providerName" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#provider_name NetworkmanagerLink#provider_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#tags NetworkmanagerLink#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#tags_all NetworkmanagerLink#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.timeouts"></a>

```java
public NetworkmanagerLinkTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeouts">NetworkmanagerLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#timeouts NetworkmanagerLink#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#type NetworkmanagerLink#type}.

---

### NetworkmanagerLinkTimeouts <a name="NetworkmanagerLinkTimeouts" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_link.NetworkmanagerLinkTimeouts;

NetworkmanagerLinkTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#create NetworkmanagerLink#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#delete NetworkmanagerLink#delete}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#update NetworkmanagerLink#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#create NetworkmanagerLink#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#delete NetworkmanagerLink#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link#update NetworkmanagerLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerLinkBandwidthOutputReference <a name="NetworkmanagerLinkBandwidthOutputReference" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_link.NetworkmanagerLinkBandwidthOutputReference;

new NetworkmanagerLinkBandwidthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resetDownloadSpeed">resetDownloadSpeed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resetUploadSpeed">resetUploadSpeed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDownloadSpeed` <a name="resetDownloadSpeed" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resetDownloadSpeed"></a>

```java
public void resetDownloadSpeed()
```

##### `resetUploadSpeed` <a name="resetUploadSpeed" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resetUploadSpeed"></a>

```java
public void resetUploadSpeed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.downloadSpeedInput">downloadSpeedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.uploadSpeedInput">uploadSpeedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.downloadSpeed">downloadSpeed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.uploadSpeed">uploadSpeed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `downloadSpeedInput`<sup>Optional</sup> <a name="downloadSpeedInput" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.downloadSpeedInput"></a>

```java
public java.lang.Number getDownloadSpeedInput();
```

- *Type:* java.lang.Number

---

##### `uploadSpeedInput`<sup>Optional</sup> <a name="uploadSpeedInput" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.uploadSpeedInput"></a>

```java
public java.lang.Number getUploadSpeedInput();
```

- *Type:* java.lang.Number

---

##### `downloadSpeed`<sup>Required</sup> <a name="downloadSpeed" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.downloadSpeed"></a>

```java
public java.lang.Number getDownloadSpeed();
```

- *Type:* java.lang.Number

---

##### `uploadSpeed`<sup>Required</sup> <a name="uploadSpeed" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.uploadSpeed"></a>

```java
public java.lang.Number getUploadSpeed();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.internalValue"></a>

```java
public NetworkmanagerLinkBandwidth getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a>

---


### NetworkmanagerLinkTimeoutsOutputReference <a name="NetworkmanagerLinkTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_link.NetworkmanagerLinkTimeoutsOutputReference;

new NetworkmanagerLinkTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeouts">NetworkmanagerLinkTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerLink.NetworkmanagerLinkTimeouts">NetworkmanagerLinkTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



