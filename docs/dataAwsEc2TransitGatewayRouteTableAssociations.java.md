# `dataAwsEc2TransitGatewayRouteTableAssociations` Submodule <a name="`dataAwsEc2TransitGatewayRouteTableAssociations` Submodule" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayRouteTableAssociations <a name="DataAwsEc2TransitGatewayRouteTableAssociations" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ec2_transit_gateway_route_table_associations aws_ec2_transit_gateway_route_table_associations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_associations.DataAwsEc2TransitGatewayRouteTableAssociations;

DataAwsEc2TransitGatewayRouteTableAssociations.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataAwsEc2TransitGatewayRouteTableAssociationsFilter>)
//  .id(java.lang.String)
//  .timeouts(DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ec2_transit_gateway_route_table_associations#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTableAssociations#transit_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilter">DataAwsEc2TransitGatewayRouteTableAssociationsFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ec2_transit_gateway_route_table_associations#id DataAwsEc2TransitGatewayRouteTableAssociations#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts">DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.transitGatewayRouteTableId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ec2_transit_gateway_route_table_associations#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTableAssociations#transit_gateway_route_table_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilter">DataAwsEc2TransitGatewayRouteTableAssociationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ec2_transit_gateway_route_table_associations#filter DataAwsEc2TransitGatewayRouteTableAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ec2_transit_gateway_route_table_associations#id DataAwsEc2TransitGatewayRouteTableAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts">DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ec2_transit_gateway_route_table_associations#timeouts DataAwsEc2TransitGatewayRouteTableAssociations#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataAwsEc2TransitGatewayRouteTableAssociationsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilter">DataAwsEc2TransitGatewayRouteTableAssociationsFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.putTimeouts"></a>

```java
public void putTimeouts(DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts">DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEc2TransitGatewayRouteTableAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_associations.DataAwsEc2TransitGatewayRouteTableAssociations;

DataAwsEc2TransitGatewayRouteTableAssociations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_associations.DataAwsEc2TransitGatewayRouteTableAssociations;

DataAwsEc2TransitGatewayRouteTableAssociations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_associations.DataAwsEc2TransitGatewayRouteTableAssociations;

DataAwsEc2TransitGatewayRouteTableAssociations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_associations.DataAwsEc2TransitGatewayRouteTableAssociations;

DataAwsEc2TransitGatewayRouteTableAssociations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsEc2TransitGatewayRouteTableAssociations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsEc2TransitGatewayRouteTableAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsEc2TransitGatewayRouteTableAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsEc2TransitGatewayRouteTableAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ec2_transit_gateway_route_table_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEc2TransitGatewayRouteTableAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList">DataAwsEc2TransitGatewayRouteTableAssociationsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference">DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilter">DataAwsEc2TransitGatewayRouteTableAssociationsFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts">DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.transitGatewayRouteTableIdInput">transitGatewayRouteTableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.filter"></a>

```java
public DataAwsEc2TransitGatewayRouteTableAssociationsFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList">DataAwsEc2TransitGatewayRouteTableAssociationsFilterList</a>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.ids"></a>

```java
public java.util.List<java.lang.String> getIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.timeouts"></a>

```java
public DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference">DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilter">DataAwsEc2TransitGatewayRouteTableAssociationsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts">DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts</a>

---

##### `transitGatewayRouteTableIdInput`<sup>Optional</sup> <a name="transitGatewayRouteTableIdInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.transitGatewayRouteTableIdInput"></a>

```java
public java.lang.String getTransitGatewayRouteTableIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.transitGatewayRouteTableId"></a>

```java
public java.lang.String getTransitGatewayRouteTableId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayRouteTableAssociationsConfig <a name="DataAwsEc2TransitGatewayRouteTableAssociationsConfig" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_associations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig;

DataAwsEc2TransitGatewayRouteTableAssociationsConfig.builder()
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
//  .filter(java.util.List<DataAwsEc2TransitGatewayRouteTableAssociationsFilter>)
//  .id(java.lang.String)
//  .timeouts(DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ec2_transit_gateway_route_table_associations#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTableAssociations#transit_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilter">DataAwsEc2TransitGatewayRouteTableAssociationsFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ec2_transit_gateway_route_table_associations#id DataAwsEc2TransitGatewayRouteTableAssociations#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts">DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.transitGatewayRouteTableId"></a>

```java
public java.lang.String getTransitGatewayRouteTableId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ec2_transit_gateway_route_table_associations#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTableAssociations#transit_gateway_route_table_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilter">DataAwsEc2TransitGatewayRouteTableAssociationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ec2_transit_gateway_route_table_associations#filter DataAwsEc2TransitGatewayRouteTableAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ec2_transit_gateway_route_table_associations#id DataAwsEc2TransitGatewayRouteTableAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsConfig.property.timeouts"></a>

```java
public DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts">DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ec2_transit_gateway_route_table_associations#timeouts DataAwsEc2TransitGatewayRouteTableAssociations#timeouts}

---

### DataAwsEc2TransitGatewayRouteTableAssociationsFilter <a name="DataAwsEc2TransitGatewayRouteTableAssociationsFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_associations.DataAwsEc2TransitGatewayRouteTableAssociationsFilter;

DataAwsEc2TransitGatewayRouteTableAssociationsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ec2_transit_gateway_route_table_associations#name DataAwsEc2TransitGatewayRouteTableAssociations#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ec2_transit_gateway_route_table_associations#values DataAwsEc2TransitGatewayRouteTableAssociations#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ec2_transit_gateway_route_table_associations#name DataAwsEc2TransitGatewayRouteTableAssociations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ec2_transit_gateway_route_table_associations#values DataAwsEc2TransitGatewayRouteTableAssociations#values}.

---

### DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts <a name="DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_associations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts;

DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ec2_transit_gateway_route_table_associations#read DataAwsEc2TransitGatewayRouteTableAssociations#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ec2_transit_gateway_route_table_associations#read DataAwsEc2TransitGatewayRouteTableAssociations#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayRouteTableAssociationsFilterList <a name="DataAwsEc2TransitGatewayRouteTableAssociationsFilterList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_associations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList;

new DataAwsEc2TransitGatewayRouteTableAssociationsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.get"></a>

```java
public DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilter">DataAwsEc2TransitGatewayRouteTableAssociationsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilter">DataAwsEc2TransitGatewayRouteTableAssociationsFilter</a>>

---


### DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference <a name="DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_associations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference;

new DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilter">DataAwsEc2TransitGatewayRouteTableAssociationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsFilter">DataAwsEc2TransitGatewayRouteTableAssociationsFilter</a>

---


### DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_transit_gateway_route_table_associations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference;

new DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts">DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableAssociations.DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts">DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts</a>

---



