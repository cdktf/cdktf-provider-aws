# `networkmanagerConnectPeer` Submodule <a name="`networkmanagerConnectPeer` Submodule" id="@cdktf/provider-aws.networkmanagerConnectPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerConnectPeer <a name="NetworkmanagerConnectPeer" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer aws_networkmanager_connect_peer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_connect_peer.NetworkmanagerConnectPeer;

NetworkmanagerConnectPeer.Builder.create(Construct scope, java.lang.String id)
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
    .connectAttachmentId(java.lang.String)
    .insideCidrBlocks(java.util.List<java.lang.String>)
    .peerAddress(java.lang.String)
//  .bgpOptions(NetworkmanagerConnectPeerBgpOptions)
//  .coreNetworkAddress(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(NetworkmanagerConnectPeerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.connectAttachmentId">connectAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#connect_attachment_id NetworkmanagerConnectPeer#connect_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.insideCidrBlocks">insideCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#inside_cidr_blocks NetworkmanagerConnectPeer#inside_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.peerAddress">peerAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#peer_address NetworkmanagerConnectPeer#peer_address}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.bgpOptions">bgpOptions</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions">NetworkmanagerConnectPeerBgpOptions</a></code> | bgp_options block. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.coreNetworkAddress">coreNetworkAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#core_network_address NetworkmanagerConnectPeer#core_network_address}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#id NetworkmanagerConnectPeer#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#tags NetworkmanagerConnectPeer#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#tags_all NetworkmanagerConnectPeer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeouts">NetworkmanagerConnectPeerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectAttachmentId`<sup>Required</sup> <a name="connectAttachmentId" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.connectAttachmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#connect_attachment_id NetworkmanagerConnectPeer#connect_attachment_id}.

---

##### `insideCidrBlocks`<sup>Required</sup> <a name="insideCidrBlocks" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.insideCidrBlocks"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#inside_cidr_blocks NetworkmanagerConnectPeer#inside_cidr_blocks}.

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.peerAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#peer_address NetworkmanagerConnectPeer#peer_address}.

---

##### `bgpOptions`<sup>Optional</sup> <a name="bgpOptions" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.bgpOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions">NetworkmanagerConnectPeerBgpOptions</a>

bgp_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#bgp_options NetworkmanagerConnectPeer#bgp_options}

---

##### `coreNetworkAddress`<sup>Optional</sup> <a name="coreNetworkAddress" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.coreNetworkAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#core_network_address NetworkmanagerConnectPeer#core_network_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#id NetworkmanagerConnectPeer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#tags NetworkmanagerConnectPeer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#tags_all NetworkmanagerConnectPeer#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeouts">NetworkmanagerConnectPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#timeouts NetworkmanagerConnectPeer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.putBgpOptions">putBgpOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetBgpOptions">resetBgpOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetCoreNetworkAddress">resetCoreNetworkAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putBgpOptions` <a name="putBgpOptions" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.putBgpOptions"></a>

```java
public void putBgpOptions(NetworkmanagerConnectPeerBgpOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.putBgpOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions">NetworkmanagerConnectPeerBgpOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.putTimeouts"></a>

```java
public void putTimeouts(NetworkmanagerConnectPeerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeouts">NetworkmanagerConnectPeerTimeouts</a>

---

##### `resetBgpOptions` <a name="resetBgpOptions" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetBgpOptions"></a>

```java
public void resetBgpOptions()
```

##### `resetCoreNetworkAddress` <a name="resetCoreNetworkAddress" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetCoreNetworkAddress"></a>

```java
public void resetCoreNetworkAddress()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_connect_peer.NetworkmanagerConnectPeer;

NetworkmanagerConnectPeer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_connect_peer.NetworkmanagerConnectPeer;

NetworkmanagerConnectPeer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_connect_peer.NetworkmanagerConnectPeer;

NetworkmanagerConnectPeer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.bgpOptions">bgpOptions</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference">NetworkmanagerConnectPeerBgpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList">NetworkmanagerConnectPeerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connectPeerId">connectPeerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.coreNetworkId">coreNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.edgeLocation">edgeLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference">NetworkmanagerConnectPeerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.bgpOptionsInput">bgpOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions">NetworkmanagerConnectPeerBgpOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connectAttachmentIdInput">connectAttachmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.coreNetworkAddressInput">coreNetworkAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.insideCidrBlocksInput">insideCidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.peerAddressInput">peerAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeouts">NetworkmanagerConnectPeerTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connectAttachmentId">connectAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.coreNetworkAddress">coreNetworkAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.insideCidrBlocks">insideCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.peerAddress">peerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `bgpOptions`<sup>Required</sup> <a name="bgpOptions" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.bgpOptions"></a>

```java
public NetworkmanagerConnectPeerBgpOptionsOutputReference getBgpOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference">NetworkmanagerConnectPeerBgpOptionsOutputReference</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.configuration"></a>

```java
public NetworkmanagerConnectPeerConfigurationList getConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList">NetworkmanagerConnectPeerConfigurationList</a>

---

##### `connectPeerId`<sup>Required</sup> <a name="connectPeerId" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connectPeerId"></a>

```java
public java.lang.String getConnectPeerId();
```

- *Type:* java.lang.String

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.coreNetworkId"></a>

```java
public java.lang.String getCoreNetworkId();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `edgeLocation`<sup>Required</sup> <a name="edgeLocation" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.edgeLocation"></a>

```java
public java.lang.String getEdgeLocation();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.timeouts"></a>

```java
public NetworkmanagerConnectPeerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference">NetworkmanagerConnectPeerTimeoutsOutputReference</a>

---

##### `bgpOptionsInput`<sup>Optional</sup> <a name="bgpOptionsInput" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.bgpOptionsInput"></a>

```java
public NetworkmanagerConnectPeerBgpOptions getBgpOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions">NetworkmanagerConnectPeerBgpOptions</a>

---

##### `connectAttachmentIdInput`<sup>Optional</sup> <a name="connectAttachmentIdInput" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connectAttachmentIdInput"></a>

```java
public java.lang.String getConnectAttachmentIdInput();
```

- *Type:* java.lang.String

---

##### `coreNetworkAddressInput`<sup>Optional</sup> <a name="coreNetworkAddressInput" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.coreNetworkAddressInput"></a>

```java
public java.lang.String getCoreNetworkAddressInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `insideCidrBlocksInput`<sup>Optional</sup> <a name="insideCidrBlocksInput" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.insideCidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getInsideCidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peerAddressInput`<sup>Optional</sup> <a name="peerAddressInput" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.peerAddressInput"></a>

```java
public java.lang.String getPeerAddressInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeouts">NetworkmanagerConnectPeerTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `connectAttachmentId`<sup>Required</sup> <a name="connectAttachmentId" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connectAttachmentId"></a>

```java
public java.lang.String getConnectAttachmentId();
```

- *Type:* java.lang.String

---

##### `coreNetworkAddress`<sup>Required</sup> <a name="coreNetworkAddress" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.coreNetworkAddress"></a>

```java
public java.lang.String getCoreNetworkAddress();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `insideCidrBlocks`<sup>Required</sup> <a name="insideCidrBlocks" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.insideCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getInsideCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.peerAddress"></a>

```java
public java.lang.String getPeerAddress();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerConnectPeerBgpOptions <a name="NetworkmanagerConnectPeerBgpOptions" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_connect_peer.NetworkmanagerConnectPeerBgpOptions;

NetworkmanagerConnectPeerBgpOptions.builder()
//  .peerAsn(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions.property.peerAsn">peerAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#peer_asn NetworkmanagerConnectPeer#peer_asn}. |

---

##### `peerAsn`<sup>Optional</sup> <a name="peerAsn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions.property.peerAsn"></a>

```java
public java.lang.Number getPeerAsn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#peer_asn NetworkmanagerConnectPeer#peer_asn}.

---

### NetworkmanagerConnectPeerConfig <a name="NetworkmanagerConnectPeerConfig" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_connect_peer.NetworkmanagerConnectPeerConfig;

NetworkmanagerConnectPeerConfig.builder()
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
    .connectAttachmentId(java.lang.String)
    .insideCidrBlocks(java.util.List<java.lang.String>)
    .peerAddress(java.lang.String)
//  .bgpOptions(NetworkmanagerConnectPeerBgpOptions)
//  .coreNetworkAddress(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(NetworkmanagerConnectPeerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.connectAttachmentId">connectAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#connect_attachment_id NetworkmanagerConnectPeer#connect_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.insideCidrBlocks">insideCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#inside_cidr_blocks NetworkmanagerConnectPeer#inside_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.peerAddress">peerAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#peer_address NetworkmanagerConnectPeer#peer_address}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.bgpOptions">bgpOptions</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions">NetworkmanagerConnectPeerBgpOptions</a></code> | bgp_options block. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.coreNetworkAddress">coreNetworkAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#core_network_address NetworkmanagerConnectPeer#core_network_address}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#id NetworkmanagerConnectPeer#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#tags NetworkmanagerConnectPeer#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#tags_all NetworkmanagerConnectPeer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeouts">NetworkmanagerConnectPeerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectAttachmentId`<sup>Required</sup> <a name="connectAttachmentId" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.connectAttachmentId"></a>

```java
public java.lang.String getConnectAttachmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#connect_attachment_id NetworkmanagerConnectPeer#connect_attachment_id}.

---

##### `insideCidrBlocks`<sup>Required</sup> <a name="insideCidrBlocks" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.insideCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getInsideCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#inside_cidr_blocks NetworkmanagerConnectPeer#inside_cidr_blocks}.

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.peerAddress"></a>

```java
public java.lang.String getPeerAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#peer_address NetworkmanagerConnectPeer#peer_address}.

---

##### `bgpOptions`<sup>Optional</sup> <a name="bgpOptions" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.bgpOptions"></a>

```java
public NetworkmanagerConnectPeerBgpOptions getBgpOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions">NetworkmanagerConnectPeerBgpOptions</a>

bgp_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#bgp_options NetworkmanagerConnectPeer#bgp_options}

---

##### `coreNetworkAddress`<sup>Optional</sup> <a name="coreNetworkAddress" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.coreNetworkAddress"></a>

```java
public java.lang.String getCoreNetworkAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#core_network_address NetworkmanagerConnectPeer#core_network_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#id NetworkmanagerConnectPeer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#tags NetworkmanagerConnectPeer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#tags_all NetworkmanagerConnectPeer#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.timeouts"></a>

```java
public NetworkmanagerConnectPeerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeouts">NetworkmanagerConnectPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#timeouts NetworkmanagerConnectPeer#timeouts}

---

### NetworkmanagerConnectPeerConfiguration <a name="NetworkmanagerConnectPeerConfiguration" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_connect_peer.NetworkmanagerConnectPeerConfiguration;

NetworkmanagerConnectPeerConfiguration.builder()
    .build();
```


### NetworkmanagerConnectPeerConfigurationBgpConfigurations <a name="NetworkmanagerConnectPeerConfigurationBgpConfigurations" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_connect_peer.NetworkmanagerConnectPeerConfigurationBgpConfigurations;

NetworkmanagerConnectPeerConfigurationBgpConfigurations.builder()
    .build();
```


### NetworkmanagerConnectPeerTimeouts <a name="NetworkmanagerConnectPeerTimeouts" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_connect_peer.NetworkmanagerConnectPeerTimeouts;

NetworkmanagerConnectPeerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#create NetworkmanagerConnectPeer#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#delete NetworkmanagerConnectPeer#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#create NetworkmanagerConnectPeer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_peer#delete NetworkmanagerConnectPeer#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerConnectPeerBgpOptionsOutputReference <a name="NetworkmanagerConnectPeerBgpOptionsOutputReference" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_connect_peer.NetworkmanagerConnectPeerBgpOptionsOutputReference;

new NetworkmanagerConnectPeerBgpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.resetPeerAsn">resetPeerAsn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeerAsn` <a name="resetPeerAsn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.resetPeerAsn"></a>

```java
public void resetPeerAsn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.peerAsnInput">peerAsnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.peerAsn">peerAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions">NetworkmanagerConnectPeerBgpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `peerAsnInput`<sup>Optional</sup> <a name="peerAsnInput" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.peerAsnInput"></a>

```java
public java.lang.Number getPeerAsnInput();
```

- *Type:* java.lang.Number

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.peerAsn"></a>

```java
public java.lang.Number getPeerAsn();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.internalValue"></a>

```java
public NetworkmanagerConnectPeerBgpOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions">NetworkmanagerConnectPeerBgpOptions</a>

---


### NetworkmanagerConnectPeerConfigurationBgpConfigurationsList <a name="NetworkmanagerConnectPeerConfigurationBgpConfigurationsList" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_connect_peer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList;

new NetworkmanagerConnectPeerConfigurationBgpConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.get"></a>

```java
public NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference <a name="NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_connect_peer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference;

new NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.coreNetworkAddress">coreNetworkAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.coreNetworkAsn">coreNetworkAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAddress">peerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAsn">peerAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurations">NetworkmanagerConnectPeerConfigurationBgpConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coreNetworkAddress`<sup>Required</sup> <a name="coreNetworkAddress" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.coreNetworkAddress"></a>

```java
public java.lang.String getCoreNetworkAddress();
```

- *Type:* java.lang.String

---

##### `coreNetworkAsn`<sup>Required</sup> <a name="coreNetworkAsn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.coreNetworkAsn"></a>

```java
public java.lang.Number getCoreNetworkAsn();
```

- *Type:* java.lang.Number

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAddress"></a>

```java
public java.lang.String getPeerAddress();
```

- *Type:* java.lang.String

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAsn"></a>

```java
public java.lang.Number getPeerAsn();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.internalValue"></a>

```java
public NetworkmanagerConnectPeerConfigurationBgpConfigurations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurations">NetworkmanagerConnectPeerConfigurationBgpConfigurations</a>

---


### NetworkmanagerConnectPeerConfigurationList <a name="NetworkmanagerConnectPeerConfigurationList" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_connect_peer.NetworkmanagerConnectPeerConfigurationList;

new NetworkmanagerConnectPeerConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.get"></a>

```java
public NetworkmanagerConnectPeerConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkmanagerConnectPeerConfigurationOutputReference <a name="NetworkmanagerConnectPeerConfigurationOutputReference" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_connect_peer.NetworkmanagerConnectPeerConfigurationOutputReference;

new NetworkmanagerConnectPeerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.bgpConfigurations">bgpConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList">NetworkmanagerConnectPeerConfigurationBgpConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.coreNetworkAddress">coreNetworkAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.insideCidrBlocks">insideCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.peerAddress">peerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfiguration">NetworkmanagerConnectPeerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bgpConfigurations`<sup>Required</sup> <a name="bgpConfigurations" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.bgpConfigurations"></a>

```java
public NetworkmanagerConnectPeerConfigurationBgpConfigurationsList getBgpConfigurations();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList">NetworkmanagerConnectPeerConfigurationBgpConfigurationsList</a>

---

##### `coreNetworkAddress`<sup>Required</sup> <a name="coreNetworkAddress" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.coreNetworkAddress"></a>

```java
public java.lang.String getCoreNetworkAddress();
```

- *Type:* java.lang.String

---

##### `insideCidrBlocks`<sup>Required</sup> <a name="insideCidrBlocks" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.insideCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getInsideCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.peerAddress"></a>

```java
public java.lang.String getPeerAddress();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.internalValue"></a>

```java
public NetworkmanagerConnectPeerConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfiguration">NetworkmanagerConnectPeerConfiguration</a>

---


### NetworkmanagerConnectPeerTimeoutsOutputReference <a name="NetworkmanagerConnectPeerTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_connect_peer.NetworkmanagerConnectPeerTimeoutsOutputReference;

new NetworkmanagerConnectPeerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeouts">NetworkmanagerConnectPeerTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectPeer.NetworkmanagerConnectPeerTimeouts">NetworkmanagerConnectPeerTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



