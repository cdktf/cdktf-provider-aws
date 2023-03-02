# `ec2TransitGateway` Submodule <a name="`ec2TransitGateway` Submodule" id="@cdktf/provider-aws.ec2TransitGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGateway <a name="Ec2TransitGateway" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway aws_ec2_transit_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway.Ec2TransitGateway;

Ec2TransitGateway.Builder.create(Construct scope, java.lang.String id)
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
//  .amazonSideAsn(java.lang.Number)
//  .autoAcceptSharedAttachments(java.lang.String)
//  .defaultRouteTableAssociation(java.lang.String)
//  .defaultRouteTablePropagation(java.lang.String)
//  .description(java.lang.String)
//  .dnsSupport(java.lang.String)
//  .id(java.lang.String)
//  .multicastSupport(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Ec2TransitGatewayTimeouts)
//  .transitGatewayCidrBlocks(java.util.List<java.lang.String>)
//  .vpnEcmpSupport(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.amazonSideAsn">amazonSideAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#amazon_side_asn Ec2TransitGateway#amazon_side_asn}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.autoAcceptSharedAttachments">autoAcceptSharedAttachments</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.defaultRouteTableAssociation">defaultRouteTableAssociation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_association Ec2TransitGateway#default_route_table_association}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.defaultRouteTablePropagation">defaultRouteTablePropagation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#description Ec2TransitGateway#description}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.dnsSupport">dnsSupport</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#dns_support Ec2TransitGateway#dns_support}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#id Ec2TransitGateway#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.multicastSupport">multicastSupport</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#multicast_support Ec2TransitGateway#multicast_support}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags Ec2TransitGateway#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags_all Ec2TransitGateway#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.transitGatewayCidrBlocks">transitGatewayCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#transit_gateway_cidr_blocks Ec2TransitGateway#transit_gateway_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.vpnEcmpSupport">vpnEcmpSupport</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `amazonSideAsn`<sup>Optional</sup> <a name="amazonSideAsn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.amazonSideAsn"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#amazon_side_asn Ec2TransitGateway#amazon_side_asn}.

---

##### `autoAcceptSharedAttachments`<sup>Optional</sup> <a name="autoAcceptSharedAttachments" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.autoAcceptSharedAttachments"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}.

---

##### `defaultRouteTableAssociation`<sup>Optional</sup> <a name="defaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.defaultRouteTableAssociation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_association Ec2TransitGateway#default_route_table_association}.

---

##### `defaultRouteTablePropagation`<sup>Optional</sup> <a name="defaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.defaultRouteTablePropagation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#description Ec2TransitGateway#description}.

---

##### `dnsSupport`<sup>Optional</sup> <a name="dnsSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.dnsSupport"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#dns_support Ec2TransitGateway#dns_support}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#id Ec2TransitGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multicastSupport`<sup>Optional</sup> <a name="multicastSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.multicastSupport"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#multicast_support Ec2TransitGateway#multicast_support}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags Ec2TransitGateway#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags_all Ec2TransitGateway#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#timeouts Ec2TransitGateway#timeouts}

---

##### `transitGatewayCidrBlocks`<sup>Optional</sup> <a name="transitGatewayCidrBlocks" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.transitGatewayCidrBlocks"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#transit_gateway_cidr_blocks Ec2TransitGateway#transit_gateway_cidr_blocks}.

---

##### `vpnEcmpSupport`<sup>Optional</sup> <a name="vpnEcmpSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.vpnEcmpSupport"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetAmazonSideAsn">resetAmazonSideAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetAutoAcceptSharedAttachments">resetAutoAcceptSharedAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDefaultRouteTableAssociation">resetDefaultRouteTableAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDefaultRouteTablePropagation">resetDefaultRouteTablePropagation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDnsSupport">resetDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetMulticastSupport">resetMulticastSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTransitGatewayCidrBlocks">resetTransitGatewayCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetVpnEcmpSupport">resetVpnEcmpSupport</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.putTimeouts"></a>

```java
public void putTimeouts(Ec2TransitGatewayTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a>

---

##### `resetAmazonSideAsn` <a name="resetAmazonSideAsn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetAmazonSideAsn"></a>

```java
public void resetAmazonSideAsn()
```

##### `resetAutoAcceptSharedAttachments` <a name="resetAutoAcceptSharedAttachments" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetAutoAcceptSharedAttachments"></a>

```java
public void resetAutoAcceptSharedAttachments()
```

##### `resetDefaultRouteTableAssociation` <a name="resetDefaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDefaultRouteTableAssociation"></a>

```java
public void resetDefaultRouteTableAssociation()
```

##### `resetDefaultRouteTablePropagation` <a name="resetDefaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDefaultRouteTablePropagation"></a>

```java
public void resetDefaultRouteTablePropagation()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDnsSupport` <a name="resetDnsSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDnsSupport"></a>

```java
public void resetDnsSupport()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetId"></a>

```java
public void resetId()
```

##### `resetMulticastSupport` <a name="resetMulticastSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetMulticastSupport"></a>

```java
public void resetMulticastSupport()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTransitGatewayCidrBlocks` <a name="resetTransitGatewayCidrBlocks" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTransitGatewayCidrBlocks"></a>

```java
public void resetTransitGatewayCidrBlocks()
```

##### `resetVpnEcmpSupport` <a name="resetVpnEcmpSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetVpnEcmpSupport"></a>

```java
public void resetVpnEcmpSupport()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway.Ec2TransitGateway;

Ec2TransitGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway.Ec2TransitGateway;

Ec2TransitGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway.Ec2TransitGateway;

Ec2TransitGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.associationDefaultRouteTableId">associationDefaultRouteTableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.propagationDefaultRouteTableId">propagationDefaultRouteTableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference">Ec2TransitGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.amazonSideAsnInput">amazonSideAsnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.autoAcceptSharedAttachmentsInput">autoAcceptSharedAttachmentsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTableAssociationInput">defaultRouteTableAssociationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTablePropagationInput">defaultRouteTablePropagationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dnsSupportInput">dnsSupportInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.multicastSupportInput">multicastSupportInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayCidrBlocksInput">transitGatewayCidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.vpnEcmpSupportInput">vpnEcmpSupportInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.amazonSideAsn">amazonSideAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.autoAcceptSharedAttachments">autoAcceptSharedAttachments</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTableAssociation">defaultRouteTableAssociation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTablePropagation">defaultRouteTablePropagation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dnsSupport">dnsSupport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.multicastSupport">multicastSupport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayCidrBlocks">transitGatewayCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.vpnEcmpSupport">vpnEcmpSupport</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `associationDefaultRouteTableId`<sup>Required</sup> <a name="associationDefaultRouteTableId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.associationDefaultRouteTableId"></a>

```java
public java.lang.String getAssociationDefaultRouteTableId();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `propagationDefaultRouteTableId`<sup>Required</sup> <a name="propagationDefaultRouteTableId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.propagationDefaultRouteTableId"></a>

```java
public java.lang.String getPropagationDefaultRouteTableId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.timeouts"></a>

```java
public Ec2TransitGatewayTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference">Ec2TransitGatewayTimeoutsOutputReference</a>

---

##### `amazonSideAsnInput`<sup>Optional</sup> <a name="amazonSideAsnInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.amazonSideAsnInput"></a>

```java
public java.lang.Number getAmazonSideAsnInput();
```

- *Type:* java.lang.Number

---

##### `autoAcceptSharedAttachmentsInput`<sup>Optional</sup> <a name="autoAcceptSharedAttachmentsInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.autoAcceptSharedAttachmentsInput"></a>

```java
public java.lang.String getAutoAcceptSharedAttachmentsInput();
```

- *Type:* java.lang.String

---

##### `defaultRouteTableAssociationInput`<sup>Optional</sup> <a name="defaultRouteTableAssociationInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTableAssociationInput"></a>

```java
public java.lang.String getDefaultRouteTableAssociationInput();
```

- *Type:* java.lang.String

---

##### `defaultRouteTablePropagationInput`<sup>Optional</sup> <a name="defaultRouteTablePropagationInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTablePropagationInput"></a>

```java
public java.lang.String getDefaultRouteTablePropagationInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dnsSupportInput`<sup>Optional</sup> <a name="dnsSupportInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dnsSupportInput"></a>

```java
public java.lang.String getDnsSupportInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `multicastSupportInput`<sup>Optional</sup> <a name="multicastSupportInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.multicastSupportInput"></a>

```java
public java.lang.String getMulticastSupportInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `transitGatewayCidrBlocksInput`<sup>Optional</sup> <a name="transitGatewayCidrBlocksInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayCidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getTransitGatewayCidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpnEcmpSupportInput`<sup>Optional</sup> <a name="vpnEcmpSupportInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.vpnEcmpSupportInput"></a>

```java
public java.lang.String getVpnEcmpSupportInput();
```

- *Type:* java.lang.String

---

##### `amazonSideAsn`<sup>Required</sup> <a name="amazonSideAsn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.amazonSideAsn"></a>

```java
public java.lang.Number getAmazonSideAsn();
```

- *Type:* java.lang.Number

---

##### `autoAcceptSharedAttachments`<sup>Required</sup> <a name="autoAcceptSharedAttachments" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.autoAcceptSharedAttachments"></a>

```java
public java.lang.String getAutoAcceptSharedAttachments();
```

- *Type:* java.lang.String

---

##### `defaultRouteTableAssociation`<sup>Required</sup> <a name="defaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTableAssociation"></a>

```java
public java.lang.String getDefaultRouteTableAssociation();
```

- *Type:* java.lang.String

---

##### `defaultRouteTablePropagation`<sup>Required</sup> <a name="defaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTablePropagation"></a>

```java
public java.lang.String getDefaultRouteTablePropagation();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dnsSupport`<sup>Required</sup> <a name="dnsSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dnsSupport"></a>

```java
public java.lang.String getDnsSupport();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `multicastSupport`<sup>Required</sup> <a name="multicastSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.multicastSupport"></a>

```java
public java.lang.String getMulticastSupport();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `transitGatewayCidrBlocks`<sup>Required</sup> <a name="transitGatewayCidrBlocks" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getTransitGatewayCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpnEcmpSupport`<sup>Required</sup> <a name="vpnEcmpSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.vpnEcmpSupport"></a>

```java
public java.lang.String getVpnEcmpSupport();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayConfig <a name="Ec2TransitGatewayConfig" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway.Ec2TransitGatewayConfig;

Ec2TransitGatewayConfig.builder()
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
//  .amazonSideAsn(java.lang.Number)
//  .autoAcceptSharedAttachments(java.lang.String)
//  .defaultRouteTableAssociation(java.lang.String)
//  .defaultRouteTablePropagation(java.lang.String)
//  .description(java.lang.String)
//  .dnsSupport(java.lang.String)
//  .id(java.lang.String)
//  .multicastSupport(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Ec2TransitGatewayTimeouts)
//  .transitGatewayCidrBlocks(java.util.List<java.lang.String>)
//  .vpnEcmpSupport(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.amazonSideAsn">amazonSideAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#amazon_side_asn Ec2TransitGateway#amazon_side_asn}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.autoAcceptSharedAttachments">autoAcceptSharedAttachments</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.defaultRouteTableAssociation">defaultRouteTableAssociation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_association Ec2TransitGateway#default_route_table_association}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.defaultRouteTablePropagation">defaultRouteTablePropagation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#description Ec2TransitGateway#description}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.dnsSupport">dnsSupport</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#dns_support Ec2TransitGateway#dns_support}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#id Ec2TransitGateway#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.multicastSupport">multicastSupport</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#multicast_support Ec2TransitGateway#multicast_support}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags Ec2TransitGateway#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags_all Ec2TransitGateway#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.transitGatewayCidrBlocks">transitGatewayCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#transit_gateway_cidr_blocks Ec2TransitGateway#transit_gateway_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.vpnEcmpSupport">vpnEcmpSupport</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `amazonSideAsn`<sup>Optional</sup> <a name="amazonSideAsn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.amazonSideAsn"></a>

```java
public java.lang.Number getAmazonSideAsn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#amazon_side_asn Ec2TransitGateway#amazon_side_asn}.

---

##### `autoAcceptSharedAttachments`<sup>Optional</sup> <a name="autoAcceptSharedAttachments" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.autoAcceptSharedAttachments"></a>

```java
public java.lang.String getAutoAcceptSharedAttachments();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}.

---

##### `defaultRouteTableAssociation`<sup>Optional</sup> <a name="defaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.defaultRouteTableAssociation"></a>

```java
public java.lang.String getDefaultRouteTableAssociation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_association Ec2TransitGateway#default_route_table_association}.

---

##### `defaultRouteTablePropagation`<sup>Optional</sup> <a name="defaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.defaultRouteTablePropagation"></a>

```java
public java.lang.String getDefaultRouteTablePropagation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#description Ec2TransitGateway#description}.

---

##### `dnsSupport`<sup>Optional</sup> <a name="dnsSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.dnsSupport"></a>

```java
public java.lang.String getDnsSupport();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#dns_support Ec2TransitGateway#dns_support}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#id Ec2TransitGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multicastSupport`<sup>Optional</sup> <a name="multicastSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.multicastSupport"></a>

```java
public java.lang.String getMulticastSupport();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#multicast_support Ec2TransitGateway#multicast_support}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags Ec2TransitGateway#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags_all Ec2TransitGateway#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.timeouts"></a>

```java
public Ec2TransitGatewayTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#timeouts Ec2TransitGateway#timeouts}

---

##### `transitGatewayCidrBlocks`<sup>Optional</sup> <a name="transitGatewayCidrBlocks" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.transitGatewayCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getTransitGatewayCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#transit_gateway_cidr_blocks Ec2TransitGateway#transit_gateway_cidr_blocks}.

---

##### `vpnEcmpSupport`<sup>Optional</sup> <a name="vpnEcmpSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.vpnEcmpSupport"></a>

```java
public java.lang.String getVpnEcmpSupport();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}.

---

### Ec2TransitGatewayTimeouts <a name="Ec2TransitGatewayTimeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway.Ec2TransitGatewayTimeouts;

Ec2TransitGatewayTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#create Ec2TransitGateway#create}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#delete Ec2TransitGateway#delete}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#update Ec2TransitGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#create Ec2TransitGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#delete Ec2TransitGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#update Ec2TransitGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayTimeoutsOutputReference <a name="Ec2TransitGatewayTimeoutsOutputReference" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway.Ec2TransitGatewayTimeoutsOutputReference;

new Ec2TransitGatewayTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



