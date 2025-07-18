# `dataAwsEc2CoipPool` Submodule <a name="`dataAwsEc2CoipPool` Submodule" id="@cdktf/provider-aws.dataAwsEc2CoipPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2CoipPool <a name="DataAwsEc2CoipPool" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool aws_ec2_coip_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_coip_pool.DataAwsEc2CoipPool;

DataAwsEc2CoipPool.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataAwsEc2CoipPoolFilter>)
//  .id(java.lang.String)
//  .localGatewayRouteTableId(java.lang.String)
//  .poolId(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsEc2CoipPoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilter">DataAwsEc2CoipPoolFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#id DataAwsEc2CoipPool#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#local_gateway_route_table_id DataAwsEc2CoipPool#local_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.poolId">poolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#pool_id DataAwsEc2CoipPool#pool_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#tags DataAwsEc2CoipPool#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeouts">DataAwsEc2CoipPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilter">DataAwsEc2CoipPoolFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#filter DataAwsEc2CoipPool#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#id DataAwsEc2CoipPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localGatewayRouteTableId`<sup>Optional</sup> <a name="localGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.localGatewayRouteTableId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#local_gateway_route_table_id DataAwsEc2CoipPool#local_gateway_route_table_id}.

---

##### `poolId`<sup>Optional</sup> <a name="poolId" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.poolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#pool_id DataAwsEc2CoipPool#pool_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#region DataAwsEc2CoipPool#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#tags DataAwsEc2CoipPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeouts">DataAwsEc2CoipPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#timeouts DataAwsEc2CoipPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.resetLocalGatewayRouteTableId">resetLocalGatewayRouteTableId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.resetPoolId">resetPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataAwsEc2CoipPoolFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilter">DataAwsEc2CoipPoolFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.putTimeouts"></a>

```java
public void putTimeouts(DataAwsEc2CoipPoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeouts">DataAwsEc2CoipPoolTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.resetId"></a>

```java
public void resetId()
```

##### `resetLocalGatewayRouteTableId` <a name="resetLocalGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.resetLocalGatewayRouteTableId"></a>

```java
public void resetLocalGatewayRouteTableId()
```

##### `resetPoolId` <a name="resetPoolId" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.resetPoolId"></a>

```java
public void resetPoolId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEc2CoipPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_coip_pool.DataAwsEc2CoipPool;

DataAwsEc2CoipPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_coip_pool.DataAwsEc2CoipPool;

DataAwsEc2CoipPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_coip_pool.DataAwsEc2CoipPool;

DataAwsEc2CoipPool.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_coip_pool.DataAwsEc2CoipPool;

DataAwsEc2CoipPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsEc2CoipPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsEc2CoipPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsEc2CoipPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsEc2CoipPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEc2CoipPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList">DataAwsEc2CoipPoolFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.poolCidrs">poolCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference">DataAwsEc2CoipPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilter">DataAwsEc2CoipPoolFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.localGatewayRouteTableIdInput">localGatewayRouteTableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.poolIdInput">poolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeouts">DataAwsEc2CoipPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.poolId">poolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.filter"></a>

```java
public DataAwsEc2CoipPoolFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList">DataAwsEc2CoipPoolFilterList</a>

---

##### `poolCidrs`<sup>Required</sup> <a name="poolCidrs" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.poolCidrs"></a>

```java
public java.util.List<java.lang.String> getPoolCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.timeouts"></a>

```java
public DataAwsEc2CoipPoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference">DataAwsEc2CoipPoolTimeoutsOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilter">DataAwsEc2CoipPoolFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `localGatewayRouteTableIdInput`<sup>Optional</sup> <a name="localGatewayRouteTableIdInput" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.localGatewayRouteTableIdInput"></a>

```java
public java.lang.String getLocalGatewayRouteTableIdInput();
```

- *Type:* java.lang.String

---

##### `poolIdInput`<sup>Optional</sup> <a name="poolIdInput" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.poolIdInput"></a>

```java
public java.lang.String getPoolIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeouts">DataAwsEc2CoipPoolTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `localGatewayRouteTableId`<sup>Required</sup> <a name="localGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.localGatewayRouteTableId"></a>

```java
public java.lang.String getLocalGatewayRouteTableId();
```

- *Type:* java.lang.String

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.poolId"></a>

```java
public java.lang.String getPoolId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2CoipPoolConfig <a name="DataAwsEc2CoipPoolConfig" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_coip_pool.DataAwsEc2CoipPoolConfig;

DataAwsEc2CoipPoolConfig.builder()
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
//  .filter(java.util.List<DataAwsEc2CoipPoolFilter>)
//  .id(java.lang.String)
//  .localGatewayRouteTableId(java.lang.String)
//  .poolId(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsEc2CoipPoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilter">DataAwsEc2CoipPoolFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#id DataAwsEc2CoipPool#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#local_gateway_route_table_id DataAwsEc2CoipPool#local_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.poolId">poolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#pool_id DataAwsEc2CoipPool#pool_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#tags DataAwsEc2CoipPool#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeouts">DataAwsEc2CoipPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilter">DataAwsEc2CoipPoolFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#filter DataAwsEc2CoipPool#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#id DataAwsEc2CoipPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localGatewayRouteTableId`<sup>Optional</sup> <a name="localGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.localGatewayRouteTableId"></a>

```java
public java.lang.String getLocalGatewayRouteTableId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#local_gateway_route_table_id DataAwsEc2CoipPool#local_gateway_route_table_id}.

---

##### `poolId`<sup>Optional</sup> <a name="poolId" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.poolId"></a>

```java
public java.lang.String getPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#pool_id DataAwsEc2CoipPool#pool_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#region DataAwsEc2CoipPool#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#tags DataAwsEc2CoipPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolConfig.property.timeouts"></a>

```java
public DataAwsEc2CoipPoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeouts">DataAwsEc2CoipPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#timeouts DataAwsEc2CoipPool#timeouts}

---

### DataAwsEc2CoipPoolFilter <a name="DataAwsEc2CoipPoolFilter" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_coip_pool.DataAwsEc2CoipPoolFilter;

DataAwsEc2CoipPoolFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#name DataAwsEc2CoipPool#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#values DataAwsEc2CoipPool#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#name DataAwsEc2CoipPool#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#values DataAwsEc2CoipPool#values}.

---

### DataAwsEc2CoipPoolTimeouts <a name="DataAwsEc2CoipPoolTimeouts" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_coip_pool.DataAwsEc2CoipPoolTimeouts;

DataAwsEc2CoipPoolTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#read DataAwsEc2CoipPool#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_coip_pool#read DataAwsEc2CoipPool#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2CoipPoolFilterList <a name="DataAwsEc2CoipPoolFilterList" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_coip_pool.DataAwsEc2CoipPoolFilterList;

new DataAwsEc2CoipPoolFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.get"></a>

```java
public DataAwsEc2CoipPoolFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilter">DataAwsEc2CoipPoolFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilter">DataAwsEc2CoipPoolFilter</a>>

---


### DataAwsEc2CoipPoolFilterOutputReference <a name="DataAwsEc2CoipPoolFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_coip_pool.DataAwsEc2CoipPoolFilterOutputReference;

new DataAwsEc2CoipPoolFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilter">DataAwsEc2CoipPoolFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolFilter">DataAwsEc2CoipPoolFilter</a>

---


### DataAwsEc2CoipPoolTimeoutsOutputReference <a name="DataAwsEc2CoipPoolTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_coip_pool.DataAwsEc2CoipPoolTimeoutsOutputReference;

new DataAwsEc2CoipPoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeouts">DataAwsEc2CoipPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2CoipPool.DataAwsEc2CoipPoolTimeouts">DataAwsEc2CoipPoolTimeouts</a>

---



