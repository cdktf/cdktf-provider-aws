# `ec2TransitGatewayVpcAttachmentAccepter` Submodule <a name="`ec2TransitGatewayVpcAttachmentAccepter` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayVpcAttachmentAccepter <a name="Ec2TransitGatewayVpcAttachmentAccepter" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter aws_ec2_transit_gateway_vpc_attachment_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_vpc_attachment_accepter.Ec2TransitGatewayVpcAttachmentAccepter;

Ec2TransitGatewayVpcAttachmentAccepter.Builder.create(Construct scope, java.lang.String id)
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
    .transitGatewayAttachmentId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .transitGatewayDefaultRouteTableAssociation(java.lang.Boolean)
//  .transitGatewayDefaultRouteTableAssociation(IResolvable)
//  .transitGatewayDefaultRouteTablePropagation(java.lang.Boolean)
//  .transitGatewayDefaultRouteTablePropagation(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_attachment_id Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#id Ec2TransitGatewayVpcAttachmentAccepter#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#tags Ec2TransitGatewayVpcAttachmentAccepter#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#tags_all Ec2TransitGatewayVpcAttachmentAccepter#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.transitGatewayDefaultRouteTableAssociation">transitGatewayDefaultRouteTableAssociation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_association}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.transitGatewayDefaultRouteTablePropagation">transitGatewayDefaultRouteTablePropagation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_propagation}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.transitGatewayAttachmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_attachment_id Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_attachment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#id Ec2TransitGatewayVpcAttachmentAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#tags Ec2TransitGatewayVpcAttachmentAccepter#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#tags_all Ec2TransitGatewayVpcAttachmentAccepter#tags_all}.

---

##### `transitGatewayDefaultRouteTableAssociation`<sup>Optional</sup> <a name="transitGatewayDefaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.transitGatewayDefaultRouteTableAssociation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_association}.

---

##### `transitGatewayDefaultRouteTablePropagation`<sup>Optional</sup> <a name="transitGatewayDefaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.transitGatewayDefaultRouteTablePropagation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_propagation}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTransitGatewayDefaultRouteTableAssociation">resetTransitGatewayDefaultRouteTableAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTransitGatewayDefaultRouteTablePropagation">resetTransitGatewayDefaultRouteTablePropagation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTransitGatewayDefaultRouteTableAssociation` <a name="resetTransitGatewayDefaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTransitGatewayDefaultRouteTableAssociation"></a>

```java
public void resetTransitGatewayDefaultRouteTableAssociation()
```

##### `resetTransitGatewayDefaultRouteTablePropagation` <a name="resetTransitGatewayDefaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTransitGatewayDefaultRouteTablePropagation"></a>

```java
public void resetTransitGatewayDefaultRouteTablePropagation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_vpc_attachment_accepter.Ec2TransitGatewayVpcAttachmentAccepter;

Ec2TransitGatewayVpcAttachmentAccepter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_vpc_attachment_accepter.Ec2TransitGatewayVpcAttachmentAccepter;

Ec2TransitGatewayVpcAttachmentAccepter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_vpc_attachment_accepter.Ec2TransitGatewayVpcAttachmentAccepter;

Ec2TransitGatewayVpcAttachmentAccepter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.applianceModeSupport">applianceModeSupport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.dnsSupport">dnsSupport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.ipv6Support">ipv6Support</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.vpcOwnerId">vpcOwnerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayAttachmentIdInput">transitGatewayAttachmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTableAssociationInput">transitGatewayDefaultRouteTableAssociationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTablePropagationInput">transitGatewayDefaultRouteTablePropagationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTableAssociation">transitGatewayDefaultRouteTableAssociation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTablePropagation">transitGatewayDefaultRouteTablePropagation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applianceModeSupport`<sup>Required</sup> <a name="applianceModeSupport" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.applianceModeSupport"></a>

```java
public java.lang.String getApplianceModeSupport();
```

- *Type:* java.lang.String

---

##### `dnsSupport`<sup>Required</sup> <a name="dnsSupport" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.dnsSupport"></a>

```java
public java.lang.String getDnsSupport();
```

- *Type:* java.lang.String

---

##### `ipv6Support`<sup>Required</sup> <a name="ipv6Support" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.ipv6Support"></a>

```java
public java.lang.String getIpv6Support();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `vpcOwnerId`<sup>Required</sup> <a name="vpcOwnerId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.vpcOwnerId"></a>

```java
public java.lang.String getVpcOwnerId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `transitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="transitGatewayAttachmentIdInput" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayAttachmentIdInput"></a>

```java
public java.lang.String getTransitGatewayAttachmentIdInput();
```

- *Type:* java.lang.String

---

##### `transitGatewayDefaultRouteTableAssociationInput`<sup>Optional</sup> <a name="transitGatewayDefaultRouteTableAssociationInput" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTableAssociationInput"></a>

```java
public java.lang.Object getTransitGatewayDefaultRouteTableAssociationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `transitGatewayDefaultRouteTablePropagationInput`<sup>Optional</sup> <a name="transitGatewayDefaultRouteTablePropagationInput" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTablePropagationInput"></a>

```java
public java.lang.Object getTransitGatewayDefaultRouteTablePropagationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayAttachmentId"></a>

```java
public java.lang.String getTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

---

##### `transitGatewayDefaultRouteTableAssociation`<sup>Required</sup> <a name="transitGatewayDefaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTableAssociation"></a>

```java
public java.lang.Object getTransitGatewayDefaultRouteTableAssociation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `transitGatewayDefaultRouteTablePropagation`<sup>Required</sup> <a name="transitGatewayDefaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTablePropagation"></a>

```java
public java.lang.Object getTransitGatewayDefaultRouteTablePropagation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayVpcAttachmentAccepterConfig <a name="Ec2TransitGatewayVpcAttachmentAccepterConfig" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_vpc_attachment_accepter.Ec2TransitGatewayVpcAttachmentAccepterConfig;

Ec2TransitGatewayVpcAttachmentAccepterConfig.builder()
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
    .transitGatewayAttachmentId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .transitGatewayDefaultRouteTableAssociation(java.lang.Boolean)
//  .transitGatewayDefaultRouteTableAssociation(IResolvable)
//  .transitGatewayDefaultRouteTablePropagation(java.lang.Boolean)
//  .transitGatewayDefaultRouteTablePropagation(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_attachment_id Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#id Ec2TransitGatewayVpcAttachmentAccepter#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#tags Ec2TransitGatewayVpcAttachmentAccepter#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#tags_all Ec2TransitGatewayVpcAttachmentAccepter#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.transitGatewayDefaultRouteTableAssociation">transitGatewayDefaultRouteTableAssociation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_association}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.transitGatewayDefaultRouteTablePropagation">transitGatewayDefaultRouteTablePropagation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_propagation}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.transitGatewayAttachmentId"></a>

```java
public java.lang.String getTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_attachment_id Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_attachment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#id Ec2TransitGatewayVpcAttachmentAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#tags Ec2TransitGatewayVpcAttachmentAccepter#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#tags_all Ec2TransitGatewayVpcAttachmentAccepter#tags_all}.

---

##### `transitGatewayDefaultRouteTableAssociation`<sup>Optional</sup> <a name="transitGatewayDefaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.transitGatewayDefaultRouteTableAssociation"></a>

```java
public java.lang.Object getTransitGatewayDefaultRouteTableAssociation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_association}.

---

##### `transitGatewayDefaultRouteTablePropagation`<sup>Optional</sup> <a name="transitGatewayDefaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.transitGatewayDefaultRouteTablePropagation"></a>

```java
public java.lang.Object getTransitGatewayDefaultRouteTablePropagation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_propagation}.

---



