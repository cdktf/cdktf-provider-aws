# `ec2TransitGatewayConnectPeer` Submodule <a name="`ec2TransitGatewayConnectPeer` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayConnectPeer <a name="Ec2TransitGatewayConnectPeer" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer aws_ec2_transit_gateway_connect_peer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeer;

Ec2TransitGatewayConnectPeer.Builder.create(Construct scope, java.lang.String id)
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
    .insideCidrBlocks(java.util.List<java.lang.String>)
    .peerAddress(java.lang.String)
    .transitGatewayAttachmentId(java.lang.String)
//  .bgpAsn(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Ec2TransitGatewayConnectPeerTimeouts)
//  .transitGatewayAddress(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.insideCidrBlocks">insideCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#inside_cidr_blocks Ec2TransitGatewayConnectPeer#inside_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.peerAddress">peerAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#peer_address Ec2TransitGatewayConnectPeer#peer_address}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#transit_gateway_attachment_id Ec2TransitGatewayConnectPeer#transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.bgpAsn">bgpAsn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#bgp_asn Ec2TransitGatewayConnectPeer#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#id Ec2TransitGatewayConnectPeer#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#tags Ec2TransitGatewayConnectPeer#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#tags_all Ec2TransitGatewayConnectPeer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts">Ec2TransitGatewayConnectPeerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.transitGatewayAddress">transitGatewayAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#transit_gateway_address Ec2TransitGatewayConnectPeer#transit_gateway_address}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `insideCidrBlocks`<sup>Required</sup> <a name="insideCidrBlocks" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.insideCidrBlocks"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#inside_cidr_blocks Ec2TransitGatewayConnectPeer#inside_cidr_blocks}.

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.peerAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#peer_address Ec2TransitGatewayConnectPeer#peer_address}.

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.transitGatewayAttachmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#transit_gateway_attachment_id Ec2TransitGatewayConnectPeer#transit_gateway_attachment_id}.

---

##### `bgpAsn`<sup>Optional</sup> <a name="bgpAsn" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.bgpAsn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#bgp_asn Ec2TransitGatewayConnectPeer#bgp_asn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#id Ec2TransitGatewayConnectPeer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#tags Ec2TransitGatewayConnectPeer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#tags_all Ec2TransitGatewayConnectPeer#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts">Ec2TransitGatewayConnectPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#timeouts Ec2TransitGatewayConnectPeer#timeouts}

---

##### `transitGatewayAddress`<sup>Optional</sup> <a name="transitGatewayAddress" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.transitGatewayAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#transit_gateway_address Ec2TransitGatewayConnectPeer#transit_gateway_address}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetBgpAsn">resetBgpAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetTransitGatewayAddress">resetTransitGatewayAddress</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.putTimeouts"></a>

```java
public void putTimeouts(Ec2TransitGatewayConnectPeerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts">Ec2TransitGatewayConnectPeerTimeouts</a>

---

##### `resetBgpAsn` <a name="resetBgpAsn" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetBgpAsn"></a>

```java
public void resetBgpAsn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTransitGatewayAddress` <a name="resetTransitGatewayAddress" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetTransitGatewayAddress"></a>

```java
public void resetTransitGatewayAddress()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeer;

Ec2TransitGatewayConnectPeer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeer;

Ec2TransitGatewayConnectPeer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeer;

Ec2TransitGatewayConnectPeer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference">Ec2TransitGatewayConnectPeerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.bgpAsnInput">bgpAsnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.insideCidrBlocksInput">insideCidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.peerAddressInput">peerAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts">Ec2TransitGatewayConnectPeerTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayAddressInput">transitGatewayAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayAttachmentIdInput">transitGatewayAttachmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.bgpAsn">bgpAsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.insideCidrBlocks">insideCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.peerAddress">peerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayAddress">transitGatewayAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.timeouts"></a>

```java
public Ec2TransitGatewayConnectPeerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference">Ec2TransitGatewayConnectPeerTimeoutsOutputReference</a>

---

##### `bgpAsnInput`<sup>Optional</sup> <a name="bgpAsnInput" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.bgpAsnInput"></a>

```java
public java.lang.String getBgpAsnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `insideCidrBlocksInput`<sup>Optional</sup> <a name="insideCidrBlocksInput" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.insideCidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getInsideCidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peerAddressInput`<sup>Optional</sup> <a name="peerAddressInput" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.peerAddressInput"></a>

```java
public java.lang.String getPeerAddressInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts">Ec2TransitGatewayConnectPeerTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `transitGatewayAddressInput`<sup>Optional</sup> <a name="transitGatewayAddressInput" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayAddressInput"></a>

```java
public java.lang.String getTransitGatewayAddressInput();
```

- *Type:* java.lang.String

---

##### `transitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="transitGatewayAttachmentIdInput" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayAttachmentIdInput"></a>

```java
public java.lang.String getTransitGatewayAttachmentIdInput();
```

- *Type:* java.lang.String

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.bgpAsn"></a>

```java
public java.lang.String getBgpAsn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `insideCidrBlocks`<sup>Required</sup> <a name="insideCidrBlocks" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.insideCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getInsideCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.peerAddress"></a>

```java
public java.lang.String getPeerAddress();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `transitGatewayAddress`<sup>Required</sup> <a name="transitGatewayAddress" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayAddress"></a>

```java
public java.lang.String getTransitGatewayAddress();
```

- *Type:* java.lang.String

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayAttachmentId"></a>

```java
public java.lang.String getTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayConnectPeerConfig <a name="Ec2TransitGatewayConnectPeerConfig" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeerConfig;

Ec2TransitGatewayConnectPeerConfig.builder()
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
    .insideCidrBlocks(java.util.List<java.lang.String>)
    .peerAddress(java.lang.String)
    .transitGatewayAttachmentId(java.lang.String)
//  .bgpAsn(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Ec2TransitGatewayConnectPeerTimeouts)
//  .transitGatewayAddress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.insideCidrBlocks">insideCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#inside_cidr_blocks Ec2TransitGatewayConnectPeer#inside_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.peerAddress">peerAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#peer_address Ec2TransitGatewayConnectPeer#peer_address}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#transit_gateway_attachment_id Ec2TransitGatewayConnectPeer#transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.bgpAsn">bgpAsn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#bgp_asn Ec2TransitGatewayConnectPeer#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#id Ec2TransitGatewayConnectPeer#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#tags Ec2TransitGatewayConnectPeer#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#tags_all Ec2TransitGatewayConnectPeer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts">Ec2TransitGatewayConnectPeerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.transitGatewayAddress">transitGatewayAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#transit_gateway_address Ec2TransitGatewayConnectPeer#transit_gateway_address}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `insideCidrBlocks`<sup>Required</sup> <a name="insideCidrBlocks" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.insideCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getInsideCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#inside_cidr_blocks Ec2TransitGatewayConnectPeer#inside_cidr_blocks}.

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.peerAddress"></a>

```java
public java.lang.String getPeerAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#peer_address Ec2TransitGatewayConnectPeer#peer_address}.

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.transitGatewayAttachmentId"></a>

```java
public java.lang.String getTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#transit_gateway_attachment_id Ec2TransitGatewayConnectPeer#transit_gateway_attachment_id}.

---

##### `bgpAsn`<sup>Optional</sup> <a name="bgpAsn" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.bgpAsn"></a>

```java
public java.lang.String getBgpAsn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#bgp_asn Ec2TransitGatewayConnectPeer#bgp_asn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#id Ec2TransitGatewayConnectPeer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#tags Ec2TransitGatewayConnectPeer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#tags_all Ec2TransitGatewayConnectPeer#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.timeouts"></a>

```java
public Ec2TransitGatewayConnectPeerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts">Ec2TransitGatewayConnectPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#timeouts Ec2TransitGatewayConnectPeer#timeouts}

---

##### `transitGatewayAddress`<sup>Optional</sup> <a name="transitGatewayAddress" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.transitGatewayAddress"></a>

```java
public java.lang.String getTransitGatewayAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#transit_gateway_address Ec2TransitGatewayConnectPeer#transit_gateway_address}.

---

### Ec2TransitGatewayConnectPeerTimeouts <a name="Ec2TransitGatewayConnectPeerTimeouts" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeerTimeouts;

Ec2TransitGatewayConnectPeerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#create Ec2TransitGatewayConnectPeer#create}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#delete Ec2TransitGatewayConnectPeer#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#create Ec2TransitGatewayConnectPeer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#delete Ec2TransitGatewayConnectPeer#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayConnectPeerTimeoutsOutputReference <a name="Ec2TransitGatewayConnectPeerTimeoutsOutputReference" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference;

new Ec2TransitGatewayConnectPeerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts">Ec2TransitGatewayConnectPeerTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts">Ec2TransitGatewayConnectPeerTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



