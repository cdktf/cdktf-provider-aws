# `dataAwsEc2TransitGatewayRouteTableRoutes` Submodule <a name="`dataAwsEc2TransitGatewayRouteTableRoutes` Submodule" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayRouteTableRoutes <a name="DataAwsEc2TransitGatewayRouteTableRoutes" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_route_table_routes aws_ec2_transit_gateway_route_table_routes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_routes.DataAwsEc2TransitGatewayRouteTableRoutes;

DataAwsEc2TransitGatewayRouteTableRoutes.Builder.create(Construct scope, java.lang.String id)
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
    .filter(IResolvable)
    .filter(java.util.List<DataAwsEc2TransitGatewayRouteTableRoutesFilter>)
    .transitGatewayRouteTableId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter">DataAwsEc2TransitGatewayRouteTableRoutesFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_route_table_routes#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTableRoutes#transit_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_route_table_routes#id DataAwsEc2TransitGatewayRouteTableRoutes#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter">DataAwsEc2TransitGatewayRouteTableRoutesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_route_table_routes#filter DataAwsEc2TransitGatewayRouteTableRoutes#filter}

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.transitGatewayRouteTableId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_route_table_routes#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTableRoutes#transit_gateway_route_table_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_route_table_routes#id DataAwsEc2TransitGatewayRouteTableRoutes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataAwsEc2TransitGatewayRouteTableRoutesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter">DataAwsEc2TransitGatewayRouteTableRoutesFilter</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEc2TransitGatewayRouteTableRoutes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_routes.DataAwsEc2TransitGatewayRouteTableRoutes;

DataAwsEc2TransitGatewayRouteTableRoutes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_routes.DataAwsEc2TransitGatewayRouteTableRoutes;

DataAwsEc2TransitGatewayRouteTableRoutes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_routes.DataAwsEc2TransitGatewayRouteTableRoutes;

DataAwsEc2TransitGatewayRouteTableRoutes.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_routes.DataAwsEc2TransitGatewayRouteTableRoutes;

DataAwsEc2TransitGatewayRouteTableRoutes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsEc2TransitGatewayRouteTableRoutes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsEc2TransitGatewayRouteTableRoutes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsEc2TransitGatewayRouteTableRoutes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsEc2TransitGatewayRouteTableRoutes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_route_table_routes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEc2TransitGatewayRouteTableRoutes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList">DataAwsEc2TransitGatewayRouteTableRoutesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList">DataAwsEc2TransitGatewayRouteTableRoutesRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter">DataAwsEc2TransitGatewayRouteTableRoutesFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.transitGatewayRouteTableIdInput">transitGatewayRouteTableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.filter"></a>

```java
public DataAwsEc2TransitGatewayRouteTableRoutesFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList">DataAwsEc2TransitGatewayRouteTableRoutesFilterList</a>

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.routes"></a>

```java
public DataAwsEc2TransitGatewayRouteTableRoutesRoutesList getRoutes();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList">DataAwsEc2TransitGatewayRouteTableRoutesRoutesList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter">DataAwsEc2TransitGatewayRouteTableRoutesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `transitGatewayRouteTableIdInput`<sup>Optional</sup> <a name="transitGatewayRouteTableIdInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.transitGatewayRouteTableIdInput"></a>

```java
public java.lang.String getTransitGatewayRouteTableIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.transitGatewayRouteTableId"></a>

```java
public java.lang.String getTransitGatewayRouteTableId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayRouteTableRoutesConfig <a name="DataAwsEc2TransitGatewayRouteTableRoutesConfig" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_routes.DataAwsEc2TransitGatewayRouteTableRoutesConfig;

DataAwsEc2TransitGatewayRouteTableRoutesConfig.builder()
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
    .filter(IResolvable)
    .filter(java.util.List<DataAwsEc2TransitGatewayRouteTableRoutesFilter>)
    .transitGatewayRouteTableId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter">DataAwsEc2TransitGatewayRouteTableRoutesFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_route_table_routes#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTableRoutes#transit_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_route_table_routes#id DataAwsEc2TransitGatewayRouteTableRoutes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter">DataAwsEc2TransitGatewayRouteTableRoutesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_route_table_routes#filter DataAwsEc2TransitGatewayRouteTableRoutes#filter}

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.transitGatewayRouteTableId"></a>

```java
public java.lang.String getTransitGatewayRouteTableId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_route_table_routes#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTableRoutes#transit_gateway_route_table_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_route_table_routes#id DataAwsEc2TransitGatewayRouteTableRoutes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsEc2TransitGatewayRouteTableRoutesFilter <a name="DataAwsEc2TransitGatewayRouteTableRoutesFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_routes.DataAwsEc2TransitGatewayRouteTableRoutesFilter;

DataAwsEc2TransitGatewayRouteTableRoutesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_route_table_routes#name DataAwsEc2TransitGatewayRouteTableRoutes#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_route_table_routes#values DataAwsEc2TransitGatewayRouteTableRoutes#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_route_table_routes#name DataAwsEc2TransitGatewayRouteTableRoutes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_route_table_routes#values DataAwsEc2TransitGatewayRouteTableRoutes#values}.

---

### DataAwsEc2TransitGatewayRouteTableRoutesRoutes <a name="DataAwsEc2TransitGatewayRouteTableRoutesRoutes" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_routes.DataAwsEc2TransitGatewayRouteTableRoutesRoutes;

DataAwsEc2TransitGatewayRouteTableRoutesRoutes.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayRouteTableRoutesFilterList <a name="DataAwsEc2TransitGatewayRouteTableRoutesFilterList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_routes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList;

new DataAwsEc2TransitGatewayRouteTableRoutesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.get"></a>

```java
public DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter">DataAwsEc2TransitGatewayRouteTableRoutesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter">DataAwsEc2TransitGatewayRouteTableRoutesFilter</a>>

---


### DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference <a name="DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_routes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference;

new DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter">DataAwsEc2TransitGatewayRouteTableRoutesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter">DataAwsEc2TransitGatewayRouteTableRoutesFilter</a>

---


### DataAwsEc2TransitGatewayRouteTableRoutesRoutesList <a name="DataAwsEc2TransitGatewayRouteTableRoutesRoutesList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_routes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList;

new DataAwsEc2TransitGatewayRouteTableRoutesRoutesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.get"></a>

```java
public DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference <a name="DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_routes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference;

new DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.prefixListId">prefixListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.transitGatewayRouteTableAnnouncementId">transitGatewayRouteTableAnnouncementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutes">DataAwsEc2TransitGatewayRouteTableRoutesRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationCidrBlock`<sup>Required</sup> <a name="destinationCidrBlock" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.destinationCidrBlock"></a>

```java
public java.lang.String getDestinationCidrBlock();
```

- *Type:* java.lang.String

---

##### `prefixListId`<sup>Required</sup> <a name="prefixListId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.prefixListId"></a>

```java
public java.lang.String getPrefixListId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `transitGatewayRouteTableAnnouncementId`<sup>Required</sup> <a name="transitGatewayRouteTableAnnouncementId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.transitGatewayRouteTableAnnouncementId"></a>

```java
public java.lang.String getTransitGatewayRouteTableAnnouncementId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.internalValue"></a>

```java
public DataAwsEc2TransitGatewayRouteTableRoutesRoutes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutes">DataAwsEc2TransitGatewayRouteTableRoutesRoutes</a>

---



