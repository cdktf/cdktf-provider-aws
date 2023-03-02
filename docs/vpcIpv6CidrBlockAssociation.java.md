# `vpcIpv6CidrBlockAssociation` Submodule <a name="`vpcIpv6CidrBlockAssociation` Submodule" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpv6CidrBlockAssociation <a name="VpcIpv6CidrBlockAssociation" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association aws_vpc_ipv6_cidr_block_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_ipv6_cidr_block_association.VpcIpv6CidrBlockAssociation;

VpcIpv6CidrBlockAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .ipv6IpamPoolId(java.lang.String)
    .vpcId(java.lang.String)
//  .id(java.lang.String)
//  .ipv6CidrBlock(java.lang.String)
//  .ipv6NetmaskLength(java.lang.Number)
//  .timeouts(VpcIpv6CidrBlockAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.ipv6IpamPoolId">ipv6IpamPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#ipv6_ipam_pool_id VpcIpv6CidrBlockAssociation#ipv6_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#vpc_id VpcIpv6CidrBlockAssociation#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#id VpcIpv6CidrBlockAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#ipv6_cidr_block VpcIpv6CidrBlockAssociation#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#ipv6_netmask_length VpcIpv6CidrBlockAssociation#ipv6_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts">VpcIpv6CidrBlockAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipv6IpamPoolId`<sup>Required</sup> <a name="ipv6IpamPoolId" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.ipv6IpamPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#ipv6_ipam_pool_id VpcIpv6CidrBlockAssociation#ipv6_ipam_pool_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#vpc_id VpcIpv6CidrBlockAssociation#vpc_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#id VpcIpv6CidrBlockAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.ipv6CidrBlock"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#ipv6_cidr_block VpcIpv6CidrBlockAssociation#ipv6_cidr_block}.

---

##### `ipv6NetmaskLength`<sup>Optional</sup> <a name="ipv6NetmaskLength" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.ipv6NetmaskLength"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#ipv6_netmask_length VpcIpv6CidrBlockAssociation#ipv6_netmask_length}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts">VpcIpv6CidrBlockAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#timeouts VpcIpv6CidrBlockAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.resetIpv6NetmaskLength">resetIpv6NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.putTimeouts"></a>

```java
public void putTimeouts(VpcIpv6CidrBlockAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts">VpcIpv6CidrBlockAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.resetIpv6CidrBlock"></a>

```java
public void resetIpv6CidrBlock()
```

##### `resetIpv6NetmaskLength` <a name="resetIpv6NetmaskLength" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.resetIpv6NetmaskLength"></a>

```java
public void resetIpv6NetmaskLength()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_ipv6_cidr_block_association.VpcIpv6CidrBlockAssociation;

VpcIpv6CidrBlockAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_ipv6_cidr_block_association.VpcIpv6CidrBlockAssociation;

VpcIpv6CidrBlockAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_ipv6_cidr_block_association.VpcIpv6CidrBlockAssociation;

VpcIpv6CidrBlockAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference">VpcIpv6CidrBlockAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6IpamPoolIdInput">ipv6IpamPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6NetmaskLengthInput">ipv6NetmaskLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts">VpcIpv6CidrBlockAssociationTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6IpamPoolId">ipv6IpamPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.timeouts"></a>

```java
public VpcIpv6CidrBlockAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference">VpcIpv6CidrBlockAssociationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6CidrBlockInput"></a>

```java
public java.lang.String getIpv6CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `ipv6IpamPoolIdInput`<sup>Optional</sup> <a name="ipv6IpamPoolIdInput" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6IpamPoolIdInput"></a>

```java
public java.lang.String getIpv6IpamPoolIdInput();
```

- *Type:* java.lang.String

---

##### `ipv6NetmaskLengthInput`<sup>Optional</sup> <a name="ipv6NetmaskLengthInput" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6NetmaskLengthInput"></a>

```java
public java.lang.Number getIpv6NetmaskLengthInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts">VpcIpv6CidrBlockAssociationTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

---

##### `ipv6IpamPoolId`<sup>Required</sup> <a name="ipv6IpamPoolId" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6IpamPoolId"></a>

```java
public java.lang.String getIpv6IpamPoolId();
```

- *Type:* java.lang.String

---

##### `ipv6NetmaskLength`<sup>Required</sup> <a name="ipv6NetmaskLength" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6NetmaskLength"></a>

```java
public java.lang.Number getIpv6NetmaskLength();
```

- *Type:* java.lang.Number

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpv6CidrBlockAssociationConfig <a name="VpcIpv6CidrBlockAssociationConfig" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_ipv6_cidr_block_association.VpcIpv6CidrBlockAssociationConfig;

VpcIpv6CidrBlockAssociationConfig.builder()
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
    .ipv6IpamPoolId(java.lang.String)
    .vpcId(java.lang.String)
//  .id(java.lang.String)
//  .ipv6CidrBlock(java.lang.String)
//  .ipv6NetmaskLength(java.lang.Number)
//  .timeouts(VpcIpv6CidrBlockAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.ipv6IpamPoolId">ipv6IpamPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#ipv6_ipam_pool_id VpcIpv6CidrBlockAssociation#ipv6_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#vpc_id VpcIpv6CidrBlockAssociation#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#id VpcIpv6CidrBlockAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#ipv6_cidr_block VpcIpv6CidrBlockAssociation#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#ipv6_netmask_length VpcIpv6CidrBlockAssociation#ipv6_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts">VpcIpv6CidrBlockAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipv6IpamPoolId`<sup>Required</sup> <a name="ipv6IpamPoolId" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.ipv6IpamPoolId"></a>

```java
public java.lang.String getIpv6IpamPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#ipv6_ipam_pool_id VpcIpv6CidrBlockAssociation#ipv6_ipam_pool_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#vpc_id VpcIpv6CidrBlockAssociation#vpc_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#id VpcIpv6CidrBlockAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#ipv6_cidr_block VpcIpv6CidrBlockAssociation#ipv6_cidr_block}.

---

##### `ipv6NetmaskLength`<sup>Optional</sup> <a name="ipv6NetmaskLength" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.ipv6NetmaskLength"></a>

```java
public java.lang.Number getIpv6NetmaskLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#ipv6_netmask_length VpcIpv6CidrBlockAssociation#ipv6_netmask_length}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.timeouts"></a>

```java
public VpcIpv6CidrBlockAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts">VpcIpv6CidrBlockAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#timeouts VpcIpv6CidrBlockAssociation#timeouts}

---

### VpcIpv6CidrBlockAssociationTimeouts <a name="VpcIpv6CidrBlockAssociationTimeouts" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_ipv6_cidr_block_association.VpcIpv6CidrBlockAssociationTimeouts;

VpcIpv6CidrBlockAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#create VpcIpv6CidrBlockAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#delete VpcIpv6CidrBlockAssociation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#create VpcIpv6CidrBlockAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#delete VpcIpv6CidrBlockAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcIpv6CidrBlockAssociationTimeoutsOutputReference <a name="VpcIpv6CidrBlockAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_ipv6_cidr_block_association.VpcIpv6CidrBlockAssociationTimeoutsOutputReference;

new VpcIpv6CidrBlockAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts">VpcIpv6CidrBlockAssociationTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts">VpcIpv6CidrBlockAssociationTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



