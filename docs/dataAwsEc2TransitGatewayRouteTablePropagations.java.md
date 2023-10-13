# `data_aws_ec2_transit_gateway_route_table_propagations`

Refer to the Terraform Registory for docs: [`data_aws_ec2_transit_gateway_route_table_propagations`](https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/data-sources/ec2_transit_gateway_route_table_propagations).

# `dataAwsEc2TransitGatewayRouteTablePropagations` Submodule <a name="`dataAwsEc2TransitGatewayRouteTablePropagations` Submodule" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayRouteTablePropagations <a name="DataAwsEc2TransitGatewayRouteTablePropagations" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/data-sources/ec2_transit_gateway_route_table_propagations aws_ec2_transit_gateway_route_table_propagations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagations;

DataAwsEc2TransitGatewayRouteTablePropagations.Builder.create(Construct scope, java.lang.String id)
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
    .transitGatewayRouteTableId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataAwsEc2TransitGatewayRouteTablePropagationsFilter>)
//  .id(java.lang.String)
//  .timeouts(DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTablePropagations#transit_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#id DataAwsEc2TransitGatewayRouteTablePropagations#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.transitGatewayRouteTableId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTablePropagations#transit_gateway_route_table_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#filter DataAwsEc2TransitGatewayRouteTablePropagations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#id DataAwsEc2TransitGatewayRouteTablePropagations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#timeouts DataAwsEc2TransitGatewayRouteTablePropagations#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataAwsEc2TransitGatewayRouteTablePropagationsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putTimeouts"></a>

```java
public void putTimeouts(DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagations;

DataAwsEc2TransitGatewayRouteTablePropagations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagations;

DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagations;

DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList">DataAwsEc2TransitGatewayRouteTablePropagationsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference">DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.transitGatewayRouteTableIdInput">transitGatewayRouteTableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.filter"></a>

```java
public DataAwsEc2TransitGatewayRouteTablePropagationsFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList">DataAwsEc2TransitGatewayRouteTablePropagationsFilterList</a>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.ids"></a>

```java
public java.util.List<java.lang.String> getIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.timeouts"></a>

```java
public DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference">DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a>

---

##### `transitGatewayRouteTableIdInput`<sup>Optional</sup> <a name="transitGatewayRouteTableIdInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.transitGatewayRouteTableIdInput"></a>

```java
public java.lang.String getTransitGatewayRouteTableIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.transitGatewayRouteTableId"></a>

```java
public java.lang.String getTransitGatewayRouteTableId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayRouteTablePropagationsConfig <a name="DataAwsEc2TransitGatewayRouteTablePropagationsConfig" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig;

DataAwsEc2TransitGatewayRouteTablePropagationsConfig.builder()
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
    .transitGatewayRouteTableId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataAwsEc2TransitGatewayRouteTablePropagationsFilter>)
//  .id(java.lang.String)
//  .timeouts(DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTablePropagations#transit_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#id DataAwsEc2TransitGatewayRouteTablePropagations#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.transitGatewayRouteTableId"></a>

```java
public java.lang.String getTransitGatewayRouteTableId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTablePropagations#transit_gateway_route_table_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#filter DataAwsEc2TransitGatewayRouteTablePropagations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#id DataAwsEc2TransitGatewayRouteTablePropagations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.timeouts"></a>

```java
public DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#timeouts DataAwsEc2TransitGatewayRouteTablePropagations#timeouts}

---

### DataAwsEc2TransitGatewayRouteTablePropagationsFilter <a name="DataAwsEc2TransitGatewayRouteTablePropagationsFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter;

DataAwsEc2TransitGatewayRouteTablePropagationsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#name DataAwsEc2TransitGatewayRouteTablePropagations#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#values DataAwsEc2TransitGatewayRouteTablePropagations#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#name DataAwsEc2TransitGatewayRouteTablePropagations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#values DataAwsEc2TransitGatewayRouteTablePropagations#values}.

---

### DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts <a name="DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts;

DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#read DataAwsEc2TransitGatewayRouteTablePropagations#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#read DataAwsEc2TransitGatewayRouteTablePropagations#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayRouteTablePropagationsFilterList <a name="DataAwsEc2TransitGatewayRouteTablePropagationsFilterList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList;

new DataAwsEc2TransitGatewayRouteTablePropagationsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.get"></a>

```java
public DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>>

---


### DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference <a name="DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference;

new DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>

---


### DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference;

new DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a>

---



