# `data_aws_ec2_public_ipv4_pools`

Refer to the Terraform Registory for docs: [`data_aws_ec2_public_ipv4_pools`](https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ec2_public_ipv4_pools).

# `dataAwsEc2PublicIpv4Pools` Submodule <a name="`dataAwsEc2PublicIpv4Pools` Submodule" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2PublicIpv4Pools <a name="DataAwsEc2PublicIpv4Pools" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ec2_public_ipv4_pools aws_ec2_public_ipv4_pools}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_public_ipv4_pools.DataAwsEc2PublicIpv4Pools;

DataAwsEc2PublicIpv4Pools.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .filter(IResolvable)
//  .filter(java.util.List<DataAwsEc2PublicIpv4PoolsFilter>)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ec2_public_ipv4_pools#id DataAwsEc2PublicIpv4Pools#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ec2_public_ipv4_pools#tags DataAwsEc2PublicIpv4Pools#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ec2_public_ipv4_pools#filter DataAwsEc2PublicIpv4Pools#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ec2_public_ipv4_pools#id DataAwsEc2PublicIpv4Pools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ec2_public_ipv4_pools#tags DataAwsEc2PublicIpv4Pools#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataAwsEc2PublicIpv4PoolsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_public_ipv4_pools.DataAwsEc2PublicIpv4Pools;

DataAwsEc2PublicIpv4Pools.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_public_ipv4_pools.DataAwsEc2PublicIpv4Pools;

DataAwsEc2PublicIpv4Pools.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_public_ipv4_pools.DataAwsEc2PublicIpv4Pools;

DataAwsEc2PublicIpv4Pools.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList">DataAwsEc2PublicIpv4PoolsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.poolIds">poolIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.filter"></a>

```java
public DataAwsEc2PublicIpv4PoolsFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList">DataAwsEc2PublicIpv4PoolsFilterList</a>

---

##### `poolIds`<sup>Required</sup> <a name="poolIds" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.poolIds"></a>

```java
public java.util.List<java.lang.String> getPoolIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2PublicIpv4PoolsConfig <a name="DataAwsEc2PublicIpv4PoolsConfig" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_public_ipv4_pools.DataAwsEc2PublicIpv4PoolsConfig;

DataAwsEc2PublicIpv4PoolsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .filter(IResolvable)
//  .filter(java.util.List<DataAwsEc2PublicIpv4PoolsFilter>)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ec2_public_ipv4_pools#id DataAwsEc2PublicIpv4Pools#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ec2_public_ipv4_pools#tags DataAwsEc2PublicIpv4Pools#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ec2_public_ipv4_pools#filter DataAwsEc2PublicIpv4Pools#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ec2_public_ipv4_pools#id DataAwsEc2PublicIpv4Pools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ec2_public_ipv4_pools#tags DataAwsEc2PublicIpv4Pools#tags}.

---

### DataAwsEc2PublicIpv4PoolsFilter <a name="DataAwsEc2PublicIpv4PoolsFilter" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_public_ipv4_pools.DataAwsEc2PublicIpv4PoolsFilter;

DataAwsEc2PublicIpv4PoolsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ec2_public_ipv4_pools#name DataAwsEc2PublicIpv4Pools#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ec2_public_ipv4_pools#values DataAwsEc2PublicIpv4Pools#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ec2_public_ipv4_pools#name DataAwsEc2PublicIpv4Pools#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ec2_public_ipv4_pools#values DataAwsEc2PublicIpv4Pools#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2PublicIpv4PoolsFilterList <a name="DataAwsEc2PublicIpv4PoolsFilterList" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_public_ipv4_pools.DataAwsEc2PublicIpv4PoolsFilterList;

new DataAwsEc2PublicIpv4PoolsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.get"></a>

```java
public DataAwsEc2PublicIpv4PoolsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>>

---


### DataAwsEc2PublicIpv4PoolsFilterOutputReference <a name="DataAwsEc2PublicIpv4PoolsFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_public_ipv4_pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference;

new DataAwsEc2PublicIpv4PoolsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>

---



