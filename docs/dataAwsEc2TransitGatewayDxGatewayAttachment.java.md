# `dataAwsEc2TransitGatewayDxGatewayAttachment` Submodule <a name="`dataAwsEc2TransitGatewayDxGatewayAttachment` Submodule" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayDxGatewayAttachment <a name="DataAwsEc2TransitGatewayDxGatewayAttachment" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment aws_ec2_transit_gateway_dx_gateway_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_dx_gateway_attachment.DataAwsEc2TransitGatewayDxGatewayAttachment;

DataAwsEc2TransitGatewayDxGatewayAttachment.Builder.create(Construct scope, java.lang.String id)
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
//  .dxGatewayId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataAwsEc2TransitGatewayDxGatewayAttachmentFilter>)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts)
//  .transitGatewayId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.dxGatewayId">dxGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#dx_gateway_id DataAwsEc2TransitGatewayDxGatewayAttachment#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter">DataAwsEc2TransitGatewayDxGatewayAttachmentFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#id DataAwsEc2TransitGatewayDxGatewayAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#tags DataAwsEc2TransitGatewayDxGatewayAttachment#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts">DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#transit_gateway_id DataAwsEc2TransitGatewayDxGatewayAttachment#transit_gateway_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dxGatewayId`<sup>Optional</sup> <a name="dxGatewayId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.dxGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#dx_gateway_id DataAwsEc2TransitGatewayDxGatewayAttachment#dx_gateway_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter">DataAwsEc2TransitGatewayDxGatewayAttachmentFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#filter DataAwsEc2TransitGatewayDxGatewayAttachment#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#id DataAwsEc2TransitGatewayDxGatewayAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#tags DataAwsEc2TransitGatewayDxGatewayAttachment#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts">DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#timeouts DataAwsEc2TransitGatewayDxGatewayAttachment#timeouts}

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.Initializer.parameter.transitGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#transit_gateway_id DataAwsEc2TransitGatewayDxGatewayAttachment#transit_gateway_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetDxGatewayId">resetDxGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetTransitGatewayId">resetTransitGatewayId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataAwsEc2TransitGatewayDxGatewayAttachmentFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter">DataAwsEc2TransitGatewayDxGatewayAttachmentFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.putTimeouts"></a>

```java
public void putTimeouts(DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts">DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts</a>

---

##### `resetDxGatewayId` <a name="resetDxGatewayId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetDxGatewayId"></a>

```java
public void resetDxGatewayId()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTransitGatewayId` <a name="resetTransitGatewayId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.resetTransitGatewayId"></a>

```java
public void resetTransitGatewayId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_dx_gateway_attachment.DataAwsEc2TransitGatewayDxGatewayAttachment;

DataAwsEc2TransitGatewayDxGatewayAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_dx_gateway_attachment.DataAwsEc2TransitGatewayDxGatewayAttachment;

DataAwsEc2TransitGatewayDxGatewayAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_dx_gateway_attachment.DataAwsEc2TransitGatewayDxGatewayAttachment;

DataAwsEc2TransitGatewayDxGatewayAttachment.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList">DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference">DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.dxGatewayIdInput">dxGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter">DataAwsEc2TransitGatewayDxGatewayAttachmentFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts">DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.dxGatewayId">dxGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.filter"></a>

```java
public DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList">DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.timeouts"></a>

```java
public DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference">DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference</a>

---

##### `dxGatewayIdInput`<sup>Optional</sup> <a name="dxGatewayIdInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.dxGatewayIdInput"></a>

```java
public java.lang.String getDxGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter">DataAwsEc2TransitGatewayDxGatewayAttachmentFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts">DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.transitGatewayIdInput"></a>

```java
public java.lang.String getTransitGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `dxGatewayId`<sup>Required</sup> <a name="dxGatewayId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.dxGatewayId"></a>

```java
public java.lang.String getDxGatewayId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayDxGatewayAttachmentConfig <a name="DataAwsEc2TransitGatewayDxGatewayAttachmentConfig" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_dx_gateway_attachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig;

DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.builder()
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
//  .dxGatewayId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataAwsEc2TransitGatewayDxGatewayAttachmentFilter>)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts)
//  .transitGatewayId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.dxGatewayId">dxGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#dx_gateway_id DataAwsEc2TransitGatewayDxGatewayAttachment#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter">DataAwsEc2TransitGatewayDxGatewayAttachmentFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#id DataAwsEc2TransitGatewayDxGatewayAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#tags DataAwsEc2TransitGatewayDxGatewayAttachment#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts">DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#transit_gateway_id DataAwsEc2TransitGatewayDxGatewayAttachment#transit_gateway_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dxGatewayId`<sup>Optional</sup> <a name="dxGatewayId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.dxGatewayId"></a>

```java
public java.lang.String getDxGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#dx_gateway_id DataAwsEc2TransitGatewayDxGatewayAttachment#dx_gateway_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter">DataAwsEc2TransitGatewayDxGatewayAttachmentFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#filter DataAwsEc2TransitGatewayDxGatewayAttachment#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#id DataAwsEc2TransitGatewayDxGatewayAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#tags DataAwsEc2TransitGatewayDxGatewayAttachment#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.timeouts"></a>

```java
public DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts">DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#timeouts DataAwsEc2TransitGatewayDxGatewayAttachment#timeouts}

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentConfig.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#transit_gateway_id DataAwsEc2TransitGatewayDxGatewayAttachment#transit_gateway_id}.

---

### DataAwsEc2TransitGatewayDxGatewayAttachmentFilter <a name="DataAwsEc2TransitGatewayDxGatewayAttachmentFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_dx_gateway_attachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter;

DataAwsEc2TransitGatewayDxGatewayAttachmentFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#name DataAwsEc2TransitGatewayDxGatewayAttachment#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#values DataAwsEc2TransitGatewayDxGatewayAttachment#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#name DataAwsEc2TransitGatewayDxGatewayAttachment#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#values DataAwsEc2TransitGatewayDxGatewayAttachment#values}.

---

### DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts <a name="DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_dx_gateway_attachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts;

DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#read DataAwsEc2TransitGatewayDxGatewayAttachment#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment#read DataAwsEc2TransitGatewayDxGatewayAttachment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList <a name="DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_dx_gateway_attachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList;

new DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.get"></a>

```java
public DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter">DataAwsEc2TransitGatewayDxGatewayAttachmentFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter">DataAwsEc2TransitGatewayDxGatewayAttachmentFilter</a>>

---


### DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference <a name="DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_dx_gateway_attachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference;

new DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter">DataAwsEc2TransitGatewayDxGatewayAttachmentFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentFilter">DataAwsEc2TransitGatewayDxGatewayAttachmentFilter</a> OR com.hashicorp.cdktf.IResolvable

---


### DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_dx_gateway_attachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference;

new DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts">DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayDxGatewayAttachment.DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts">DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



