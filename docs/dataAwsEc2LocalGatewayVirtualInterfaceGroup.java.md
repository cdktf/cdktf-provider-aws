# `dataAwsEc2LocalGatewayVirtualInterfaceGroup` Submodule <a name="`dataAwsEc2LocalGatewayVirtualInterfaceGroup` Submodule" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceGroup <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroup" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group aws_ec2_local_gateway_virtual_interface_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_local_gateway_virtual_interface_group.DataAwsEc2LocalGatewayVirtualInterfaceGroup;

DataAwsEc2LocalGatewayVirtualInterfaceGroup.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter>)
//  .id(java.lang.String)
//  .localGatewayId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#id DataAwsEc2LocalGatewayVirtualInterfaceGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.localGatewayId">localGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#local_gateway_id DataAwsEc2LocalGatewayVirtualInterfaceGroup#local_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#tags DataAwsEc2LocalGatewayVirtualInterfaceGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#filter DataAwsEc2LocalGatewayVirtualInterfaceGroup#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#id DataAwsEc2LocalGatewayVirtualInterfaceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localGatewayId`<sup>Optional</sup> <a name="localGatewayId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.localGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#local_gateway_id DataAwsEc2LocalGatewayVirtualInterfaceGroup#local_gateway_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#tags DataAwsEc2LocalGatewayVirtualInterfaceGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#timeouts DataAwsEc2LocalGatewayVirtualInterfaceGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetLocalGatewayId">resetLocalGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.putTimeouts"></a>

```java
public void putTimeouts(DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetId"></a>

```java
public void resetId()
```

##### `resetLocalGatewayId` <a name="resetLocalGatewayId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetLocalGatewayId"></a>

```java
public void resetLocalGatewayId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_local_gateway_virtual_interface_group.DataAwsEc2LocalGatewayVirtualInterfaceGroup;

DataAwsEc2LocalGatewayVirtualInterfaceGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_local_gateway_virtual_interface_group.DataAwsEc2LocalGatewayVirtualInterfaceGroup;

DataAwsEc2LocalGatewayVirtualInterfaceGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_local_gateway_virtual_interface_group.DataAwsEc2LocalGatewayVirtualInterfaceGroup;

DataAwsEc2LocalGatewayVirtualInterfaceGroup.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceIds">localGatewayVirtualInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayIdInput">localGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayId">localGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.filter"></a>

```java
public DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList</a>

---

##### `localGatewayVirtualInterfaceIds`<sup>Required</sup> <a name="localGatewayVirtualInterfaceIds" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceIds"></a>

```java
public java.util.List<java.lang.String> getLocalGatewayVirtualInterfaceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.timeouts"></a>

```java
public DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `localGatewayIdInput`<sup>Optional</sup> <a name="localGatewayIdInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayIdInput"></a>

```java
public java.lang.String getLocalGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `localGatewayId`<sup>Required</sup> <a name="localGatewayId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayId"></a>

```java
public java.lang.String getLocalGatewayId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_local_gateway_virtual_interface_group.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig;

DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter>)
//  .id(java.lang.String)
//  .localGatewayId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#id DataAwsEc2LocalGatewayVirtualInterfaceGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.localGatewayId">localGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#local_gateway_id DataAwsEc2LocalGatewayVirtualInterfaceGroup#local_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#tags DataAwsEc2LocalGatewayVirtualInterfaceGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#filter DataAwsEc2LocalGatewayVirtualInterfaceGroup#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#id DataAwsEc2LocalGatewayVirtualInterfaceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localGatewayId`<sup>Optional</sup> <a name="localGatewayId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.localGatewayId"></a>

```java
public java.lang.String getLocalGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#local_gateway_id DataAwsEc2LocalGatewayVirtualInterfaceGroup#local_gateway_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#tags DataAwsEc2LocalGatewayVirtualInterfaceGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.timeouts"></a>

```java
public DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#timeouts DataAwsEc2LocalGatewayVirtualInterfaceGroup#timeouts}

---

### DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_local_gateway_virtual_interface_group.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter;

DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#name DataAwsEc2LocalGatewayVirtualInterfaceGroup#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#values DataAwsEc2LocalGatewayVirtualInterfaceGroup#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#name DataAwsEc2LocalGatewayVirtualInterfaceGroup#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#values DataAwsEc2LocalGatewayVirtualInterfaceGroup#values}.

---

### DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_local_gateway_virtual_interface_group.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts;

DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#read DataAwsEc2LocalGatewayVirtualInterfaceGroup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#read DataAwsEc2LocalGatewayVirtualInterfaceGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_local_gateway_virtual_interface_group.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList;

new DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.get"></a>

```java
public DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a>>

---


### DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_local_gateway_virtual_interface_group.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference;

new DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a> OR com.hashicorp.cdktf.IResolvable

---


### DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_local_gateway_virtual_interface_group.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference;

new DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



