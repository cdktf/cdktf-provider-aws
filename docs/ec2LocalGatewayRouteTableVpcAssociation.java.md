# `ec2LocalGatewayRouteTableVpcAssociation` Submodule <a name="`ec2LocalGatewayRouteTableVpcAssociation` Submodule" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2LocalGatewayRouteTableVpcAssociation <a name="Ec2LocalGatewayRouteTableVpcAssociation" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association aws_ec2_local_gateway_route_table_vpc_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_local_gateway_route_table_vpc_association.Ec2LocalGatewayRouteTableVpcAssociation;

Ec2LocalGatewayRouteTableVpcAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .localGatewayRouteTableId(java.lang.String)
    .vpcId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#local_gateway_route_table_id Ec2LocalGatewayRouteTableVpcAssociation#local_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#vpc_id Ec2LocalGatewayRouteTableVpcAssociation#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#id Ec2LocalGatewayRouteTableVpcAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#tags Ec2LocalGatewayRouteTableVpcAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#tags_all Ec2LocalGatewayRouteTableVpcAssociation#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `localGatewayRouteTableId`<sup>Required</sup> <a name="localGatewayRouteTableId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.localGatewayRouteTableId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#local_gateway_route_table_id Ec2LocalGatewayRouteTableVpcAssociation#local_gateway_route_table_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#vpc_id Ec2LocalGatewayRouteTableVpcAssociation#vpc_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#id Ec2LocalGatewayRouteTableVpcAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#tags Ec2LocalGatewayRouteTableVpcAssociation#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#tags_all Ec2LocalGatewayRouteTableVpcAssociation#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_local_gateway_route_table_vpc_association.Ec2LocalGatewayRouteTableVpcAssociation;

Ec2LocalGatewayRouteTableVpcAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_local_gateway_route_table_vpc_association.Ec2LocalGatewayRouteTableVpcAssociation;

Ec2LocalGatewayRouteTableVpcAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_local_gateway_route_table_vpc_association.Ec2LocalGatewayRouteTableVpcAssociation;

Ec2LocalGatewayRouteTableVpcAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayId">localGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableIdInput">localGatewayRouteTableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `localGatewayId`<sup>Required</sup> <a name="localGatewayId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayId"></a>

```java
public java.lang.String getLocalGatewayId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `localGatewayRouteTableIdInput`<sup>Optional</sup> <a name="localGatewayRouteTableIdInput" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableIdInput"></a>

```java
public java.lang.String getLocalGatewayRouteTableIdInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `localGatewayRouteTableId`<sup>Required</sup> <a name="localGatewayRouteTableId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableId"></a>

```java
public java.lang.String getLocalGatewayRouteTableId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2LocalGatewayRouteTableVpcAssociationConfig <a name="Ec2LocalGatewayRouteTableVpcAssociationConfig" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_local_gateway_route_table_vpc_association.Ec2LocalGatewayRouteTableVpcAssociationConfig;

Ec2LocalGatewayRouteTableVpcAssociationConfig.builder()
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
    .localGatewayRouteTableId(java.lang.String)
    .vpcId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#local_gateway_route_table_id Ec2LocalGatewayRouteTableVpcAssociation#local_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#vpc_id Ec2LocalGatewayRouteTableVpcAssociation#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#id Ec2LocalGatewayRouteTableVpcAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#tags Ec2LocalGatewayRouteTableVpcAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#tags_all Ec2LocalGatewayRouteTableVpcAssociation#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `localGatewayRouteTableId`<sup>Required</sup> <a name="localGatewayRouteTableId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.localGatewayRouteTableId"></a>

```java
public java.lang.String getLocalGatewayRouteTableId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#local_gateway_route_table_id Ec2LocalGatewayRouteTableVpcAssociation#local_gateway_route_table_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#vpc_id Ec2LocalGatewayRouteTableVpcAssociation#vpc_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#id Ec2LocalGatewayRouteTableVpcAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#tags Ec2LocalGatewayRouteTableVpcAssociation#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association#tags_all Ec2LocalGatewayRouteTableVpcAssociation#tags_all}.

---



