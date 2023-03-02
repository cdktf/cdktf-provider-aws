# `dataAwsVpcIpamPreviewNextCidr` Submodule <a name="`dataAwsVpcIpamPreviewNextCidr` Submodule" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcIpamPreviewNextCidr <a name="DataAwsVpcIpamPreviewNextCidr" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr aws_vpc_ipam_preview_next_cidr}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_ipam_preview_next_cidr.DataAwsVpcIpamPreviewNextCidr;

DataAwsVpcIpamPreviewNextCidr.Builder.create(Construct scope, java.lang.String id)
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
    .ipamPoolId(java.lang.String)
//  .disallowedCidrs(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .netmaskLength(java.lang.Number)
//  .timeouts(DataAwsVpcIpamPreviewNextCidrTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.ipamPoolId">ipamPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#ipam_pool_id DataAwsVpcIpamPreviewNextCidr#ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.disallowedCidrs">disallowedCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#disallowed_cidrs DataAwsVpcIpamPreviewNextCidr#disallowed_cidrs}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#id DataAwsVpcIpamPreviewNextCidr#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.netmaskLength">netmaskLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#netmask_length DataAwsVpcIpamPreviewNextCidr#netmask_length}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts">DataAwsVpcIpamPreviewNextCidrTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.ipamPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#ipam_pool_id DataAwsVpcIpamPreviewNextCidr#ipam_pool_id}.

---

##### `disallowedCidrs`<sup>Optional</sup> <a name="disallowedCidrs" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.disallowedCidrs"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#disallowed_cidrs DataAwsVpcIpamPreviewNextCidr#disallowed_cidrs}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#id DataAwsVpcIpamPreviewNextCidr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `netmaskLength`<sup>Optional</sup> <a name="netmaskLength" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.netmaskLength"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#netmask_length DataAwsVpcIpamPreviewNextCidr#netmask_length}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts">DataAwsVpcIpamPreviewNextCidrTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#timeouts DataAwsVpcIpamPreviewNextCidr#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetDisallowedCidrs">resetDisallowedCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetNetmaskLength">resetNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.putTimeouts"></a>

```java
public void putTimeouts(DataAwsVpcIpamPreviewNextCidrTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts">DataAwsVpcIpamPreviewNextCidrTimeouts</a>

---

##### `resetDisallowedCidrs` <a name="resetDisallowedCidrs" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetDisallowedCidrs"></a>

```java
public void resetDisallowedCidrs()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetId"></a>

```java
public void resetId()
```

##### `resetNetmaskLength` <a name="resetNetmaskLength" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetNetmaskLength"></a>

```java
public void resetNetmaskLength()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_ipam_preview_next_cidr.DataAwsVpcIpamPreviewNextCidr;

DataAwsVpcIpamPreviewNextCidr.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_ipam_preview_next_cidr.DataAwsVpcIpamPreviewNextCidr;

DataAwsVpcIpamPreviewNextCidr.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_ipam_preview_next_cidr.DataAwsVpcIpamPreviewNextCidr;

DataAwsVpcIpamPreviewNextCidr.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference">DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.disallowedCidrsInput">disallowedCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.ipamPoolIdInput">ipamPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.netmaskLengthInput">netmaskLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts">DataAwsVpcIpamPreviewNextCidrTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.disallowedCidrs">disallowedCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.ipamPoolId">ipamPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.netmaskLength">netmaskLength</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.timeouts"></a>

```java
public DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference">DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference</a>

---

##### `disallowedCidrsInput`<sup>Optional</sup> <a name="disallowedCidrsInput" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.disallowedCidrsInput"></a>

```java
public java.util.List<java.lang.String> getDisallowedCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipamPoolIdInput`<sup>Optional</sup> <a name="ipamPoolIdInput" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.ipamPoolIdInput"></a>

```java
public java.lang.String getIpamPoolIdInput();
```

- *Type:* java.lang.String

---

##### `netmaskLengthInput`<sup>Optional</sup> <a name="netmaskLengthInput" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.netmaskLengthInput"></a>

```java
public java.lang.Number getNetmaskLengthInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts">DataAwsVpcIpamPreviewNextCidrTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `disallowedCidrs`<sup>Required</sup> <a name="disallowedCidrs" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.disallowedCidrs"></a>

```java
public java.util.List<java.lang.String> getDisallowedCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.ipamPoolId"></a>

```java
public java.lang.String getIpamPoolId();
```

- *Type:* java.lang.String

---

##### `netmaskLength`<sup>Required</sup> <a name="netmaskLength" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.netmaskLength"></a>

```java
public java.lang.Number getNetmaskLength();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcIpamPreviewNextCidrConfig <a name="DataAwsVpcIpamPreviewNextCidrConfig" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_ipam_preview_next_cidr.DataAwsVpcIpamPreviewNextCidrConfig;

DataAwsVpcIpamPreviewNextCidrConfig.builder()
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
    .ipamPoolId(java.lang.String)
//  .disallowedCidrs(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .netmaskLength(java.lang.Number)
//  .timeouts(DataAwsVpcIpamPreviewNextCidrTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.ipamPoolId">ipamPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#ipam_pool_id DataAwsVpcIpamPreviewNextCidr#ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.disallowedCidrs">disallowedCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#disallowed_cidrs DataAwsVpcIpamPreviewNextCidr#disallowed_cidrs}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#id DataAwsVpcIpamPreviewNextCidr#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.netmaskLength">netmaskLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#netmask_length DataAwsVpcIpamPreviewNextCidr#netmask_length}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts">DataAwsVpcIpamPreviewNextCidrTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.ipamPoolId"></a>

```java
public java.lang.String getIpamPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#ipam_pool_id DataAwsVpcIpamPreviewNextCidr#ipam_pool_id}.

---

##### `disallowedCidrs`<sup>Optional</sup> <a name="disallowedCidrs" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.disallowedCidrs"></a>

```java
public java.util.List<java.lang.String> getDisallowedCidrs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#disallowed_cidrs DataAwsVpcIpamPreviewNextCidr#disallowed_cidrs}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#id DataAwsVpcIpamPreviewNextCidr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `netmaskLength`<sup>Optional</sup> <a name="netmaskLength" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.netmaskLength"></a>

```java
public java.lang.Number getNetmaskLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#netmask_length DataAwsVpcIpamPreviewNextCidr#netmask_length}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.timeouts"></a>

```java
public DataAwsVpcIpamPreviewNextCidrTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts">DataAwsVpcIpamPreviewNextCidrTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#timeouts DataAwsVpcIpamPreviewNextCidr#timeouts}

---

### DataAwsVpcIpamPreviewNextCidrTimeouts <a name="DataAwsVpcIpamPreviewNextCidrTimeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_ipam_preview_next_cidr.DataAwsVpcIpamPreviewNextCidrTimeouts;

DataAwsVpcIpamPreviewNextCidrTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#read DataAwsVpcIpamPreviewNextCidr#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#read DataAwsVpcIpamPreviewNextCidr#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference <a name="DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_ipam_preview_next_cidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference;

new DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts">DataAwsVpcIpamPreviewNextCidrTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts">DataAwsVpcIpamPreviewNextCidrTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



