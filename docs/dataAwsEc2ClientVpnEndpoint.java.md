# `dataAwsEc2ClientVpnEndpoint` Submodule <a name="`dataAwsEc2ClientVpnEndpoint` Submodule" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2ClientVpnEndpoint <a name="DataAwsEc2ClientVpnEndpoint" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint aws_ec2_client_vpn_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpoint;

DataAwsEc2ClientVpnEndpoint.Builder.create(Construct scope, java.lang.String id)
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
//  .clientVpnEndpointId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataAwsEc2ClientVpnEndpointFilter>)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsEc2ClientVpnEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.clientVpnEndpointId">clientVpnEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#client_vpn_endpoint_id DataAwsEc2ClientVpnEndpoint#client_vpn_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#id DataAwsEc2ClientVpnEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#tags DataAwsEc2ClientVpnEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientVpnEndpointId`<sup>Optional</sup> <a name="clientVpnEndpointId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.clientVpnEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#client_vpn_endpoint_id DataAwsEc2ClientVpnEndpoint#client_vpn_endpoint_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#filter DataAwsEc2ClientVpnEndpoint#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#id DataAwsEc2ClientVpnEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#tags DataAwsEc2ClientVpnEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#timeouts DataAwsEc2ClientVpnEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetClientVpnEndpointId">resetClientVpnEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataAwsEc2ClientVpnEndpointFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putTimeouts"></a>

```java
public void putTimeouts(DataAwsEc2ClientVpnEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a>

---

##### `resetClientVpnEndpointId` <a name="resetClientVpnEndpointId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetClientVpnEndpointId"></a>

```java
public void resetClientVpnEndpointId()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpoint;

DataAwsEc2ClientVpnEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpoint;

DataAwsEc2ClientVpnEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpoint;

DataAwsEc2ClientVpnEndpoint.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.authenticationOptions">authenticationOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList">DataAwsEc2ClientVpnEndpointAuthenticationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientCidrBlock">clientCidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientConnectOptions">clientConnectOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList">DataAwsEc2ClientVpnEndpointClientConnectOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientLoginBannerOptions">clientLoginBannerOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList">DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.connectionLogOptions">connectionLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList">DataAwsEc2ClientVpnEndpointConnectionLogOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList">DataAwsEc2ClientVpnEndpointFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.selfServicePortal">selfServicePortal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.serverCertificateArn">serverCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.sessionTimeoutHours">sessionTimeoutHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.splitTunnel">splitTunnel</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference">DataAwsEc2ClientVpnEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.transportProtocol">transportProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.vpnPort">vpnPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientVpnEndpointIdInput">clientVpnEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientVpnEndpointId">clientVpnEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `authenticationOptions`<sup>Required</sup> <a name="authenticationOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.authenticationOptions"></a>

```java
public DataAwsEc2ClientVpnEndpointAuthenticationOptionsList getAuthenticationOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList">DataAwsEc2ClientVpnEndpointAuthenticationOptionsList</a>

---

##### `clientCidrBlock`<sup>Required</sup> <a name="clientCidrBlock" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientCidrBlock"></a>

```java
public java.lang.String getClientCidrBlock();
```

- *Type:* java.lang.String

---

##### `clientConnectOptions`<sup>Required</sup> <a name="clientConnectOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientConnectOptions"></a>

```java
public DataAwsEc2ClientVpnEndpointClientConnectOptionsList getClientConnectOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList">DataAwsEc2ClientVpnEndpointClientConnectOptionsList</a>

---

##### `clientLoginBannerOptions`<sup>Required</sup> <a name="clientLoginBannerOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientLoginBannerOptions"></a>

```java
public DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList getClientLoginBannerOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList">DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList</a>

---

##### `connectionLogOptions`<sup>Required</sup> <a name="connectionLogOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.connectionLogOptions"></a>

```java
public DataAwsEc2ClientVpnEndpointConnectionLogOptionsList getConnectionLogOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList">DataAwsEc2ClientVpnEndpointConnectionLogOptionsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.filter"></a>

```java
public DataAwsEc2ClientVpnEndpointFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList">DataAwsEc2ClientVpnEndpointFilterList</a>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selfServicePortal`<sup>Required</sup> <a name="selfServicePortal" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.selfServicePortal"></a>

```java
public java.lang.String getSelfServicePortal();
```

- *Type:* java.lang.String

---

##### `serverCertificateArn`<sup>Required</sup> <a name="serverCertificateArn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.serverCertificateArn"></a>

```java
public java.lang.String getServerCertificateArn();
```

- *Type:* java.lang.String

---

##### `sessionTimeoutHours`<sup>Required</sup> <a name="sessionTimeoutHours" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.sessionTimeoutHours"></a>

```java
public java.lang.Number getSessionTimeoutHours();
```

- *Type:* java.lang.Number

---

##### `splitTunnel`<sup>Required</sup> <a name="splitTunnel" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.splitTunnel"></a>

```java
public IResolvable getSplitTunnel();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.timeouts"></a>

```java
public DataAwsEc2ClientVpnEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference">DataAwsEc2ClientVpnEndpointTimeoutsOutputReference</a>

---

##### `transportProtocol`<sup>Required</sup> <a name="transportProtocol" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.transportProtocol"></a>

```java
public java.lang.String getTransportProtocol();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `vpnPort`<sup>Required</sup> <a name="vpnPort" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.vpnPort"></a>

```java
public java.lang.Number getVpnPort();
```

- *Type:* java.lang.Number

---

##### `clientVpnEndpointIdInput`<sup>Optional</sup> <a name="clientVpnEndpointIdInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientVpnEndpointIdInput"></a>

```java
public java.lang.String getClientVpnEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `clientVpnEndpointId`<sup>Required</sup> <a name="clientVpnEndpointId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientVpnEndpointId"></a>

```java
public java.lang.String getClientVpnEndpointId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2ClientVpnEndpointAuthenticationOptions <a name="DataAwsEc2ClientVpnEndpointAuthenticationOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptions;

DataAwsEc2ClientVpnEndpointAuthenticationOptions.builder()
    .build();
```


### DataAwsEc2ClientVpnEndpointClientConnectOptions <a name="DataAwsEc2ClientVpnEndpointClientConnectOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpointClientConnectOptions;

DataAwsEc2ClientVpnEndpointClientConnectOptions.builder()
    .build();
```


### DataAwsEc2ClientVpnEndpointClientLoginBannerOptions <a name="DataAwsEc2ClientVpnEndpointClientLoginBannerOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptions;

DataAwsEc2ClientVpnEndpointClientLoginBannerOptions.builder()
    .build();
```


### DataAwsEc2ClientVpnEndpointConfig <a name="DataAwsEc2ClientVpnEndpointConfig" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpointConfig;

DataAwsEc2ClientVpnEndpointConfig.builder()
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
//  .clientVpnEndpointId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataAwsEc2ClientVpnEndpointFilter>)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsEc2ClientVpnEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.clientVpnEndpointId">clientVpnEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#client_vpn_endpoint_id DataAwsEc2ClientVpnEndpoint#client_vpn_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#id DataAwsEc2ClientVpnEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#tags DataAwsEc2ClientVpnEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientVpnEndpointId`<sup>Optional</sup> <a name="clientVpnEndpointId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.clientVpnEndpointId"></a>

```java
public java.lang.String getClientVpnEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#client_vpn_endpoint_id DataAwsEc2ClientVpnEndpoint#client_vpn_endpoint_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#filter DataAwsEc2ClientVpnEndpoint#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#id DataAwsEc2ClientVpnEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#tags DataAwsEc2ClientVpnEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.timeouts"></a>

```java
public DataAwsEc2ClientVpnEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#timeouts DataAwsEc2ClientVpnEndpoint#timeouts}

---

### DataAwsEc2ClientVpnEndpointConnectionLogOptions <a name="DataAwsEc2ClientVpnEndpointConnectionLogOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptions;

DataAwsEc2ClientVpnEndpointConnectionLogOptions.builder()
    .build();
```


### DataAwsEc2ClientVpnEndpointFilter <a name="DataAwsEc2ClientVpnEndpointFilter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpointFilter;

DataAwsEc2ClientVpnEndpointFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#name DataAwsEc2ClientVpnEndpoint#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#values DataAwsEc2ClientVpnEndpoint#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#name DataAwsEc2ClientVpnEndpoint#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#values DataAwsEc2ClientVpnEndpoint#values}.

---

### DataAwsEc2ClientVpnEndpointTimeouts <a name="DataAwsEc2ClientVpnEndpointTimeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpointTimeouts;

DataAwsEc2ClientVpnEndpointTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#read DataAwsEc2ClientVpnEndpoint#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#read DataAwsEc2ClientVpnEndpoint#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2ClientVpnEndpointAuthenticationOptionsList <a name="DataAwsEc2ClientVpnEndpointAuthenticationOptionsList" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList;

new DataAwsEc2ClientVpnEndpointAuthenticationOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.get"></a>

```java
public DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference <a name="DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference;

new DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryId">activeDirectoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.rootCertificateChainArn">rootCertificateChainArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.samlProviderArn">samlProviderArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.selfServiceSamlProviderArn">selfServiceSamlProviderArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptions">DataAwsEc2ClientVpnEndpointAuthenticationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeDirectoryId`<sup>Required</sup> <a name="activeDirectoryId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryId"></a>

```java
public java.lang.String getActiveDirectoryId();
```

- *Type:* java.lang.String

---

##### `rootCertificateChainArn`<sup>Required</sup> <a name="rootCertificateChainArn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.rootCertificateChainArn"></a>

```java
public java.lang.String getRootCertificateChainArn();
```

- *Type:* java.lang.String

---

##### `samlProviderArn`<sup>Required</sup> <a name="samlProviderArn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.samlProviderArn"></a>

```java
public java.lang.String getSamlProviderArn();
```

- *Type:* java.lang.String

---

##### `selfServiceSamlProviderArn`<sup>Required</sup> <a name="selfServiceSamlProviderArn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.selfServiceSamlProviderArn"></a>

```java
public java.lang.String getSelfServiceSamlProviderArn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsEc2ClientVpnEndpointAuthenticationOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptions">DataAwsEc2ClientVpnEndpointAuthenticationOptions</a>

---


### DataAwsEc2ClientVpnEndpointClientConnectOptionsList <a name="DataAwsEc2ClientVpnEndpointClientConnectOptionsList" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList;

new DataAwsEc2ClientVpnEndpointClientConnectOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.get"></a>

```java
public DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference <a name="DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference;

new DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptions">DataAwsEc2ClientVpnEndpointClientConnectOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="lambdaFunctionArn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArn"></a>

```java
public java.lang.String getLambdaFunctionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsEc2ClientVpnEndpointClientConnectOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptions">DataAwsEc2ClientVpnEndpointClientConnectOptions</a>

---


### DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList <a name="DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList;

new DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.get"></a>

```java
public DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference <a name="DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference;

new DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerText">bannerText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptions">DataAwsEc2ClientVpnEndpointClientLoginBannerOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bannerText`<sup>Required</sup> <a name="bannerText" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerText"></a>

```java
public java.lang.String getBannerText();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsEc2ClientVpnEndpointClientLoginBannerOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptions">DataAwsEc2ClientVpnEndpointClientLoginBannerOptions</a>

---


### DataAwsEc2ClientVpnEndpointConnectionLogOptionsList <a name="DataAwsEc2ClientVpnEndpointConnectionLogOptionsList" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList;

new DataAwsEc2ClientVpnEndpointConnectionLogOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.get"></a>

```java
public DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference <a name="DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference;

new DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroup">cloudwatchLogGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStream">cloudwatchLogStream</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptions">DataAwsEc2ClientVpnEndpointConnectionLogOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogGroup`<sup>Required</sup> <a name="cloudwatchLogGroup" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroup"></a>

```java
public java.lang.String getCloudwatchLogGroup();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogStream`<sup>Required</sup> <a name="cloudwatchLogStream" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStream"></a>

```java
public java.lang.String getCloudwatchLogStream();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsEc2ClientVpnEndpointConnectionLogOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptions">DataAwsEc2ClientVpnEndpointConnectionLogOptions</a>

---


### DataAwsEc2ClientVpnEndpointFilterList <a name="DataAwsEc2ClientVpnEndpointFilterList" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpointFilterList;

new DataAwsEc2ClientVpnEndpointFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.get"></a>

```java
public DataAwsEc2ClientVpnEndpointFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>>

---


### DataAwsEc2ClientVpnEndpointFilterOutputReference <a name="DataAwsEc2ClientVpnEndpointFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference;

new DataAwsEc2ClientVpnEndpointFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a> OR com.hashicorp.cdktf.IResolvable

---


### DataAwsEc2ClientVpnEndpointTimeoutsOutputReference <a name="DataAwsEc2ClientVpnEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_client_vpn_endpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference;

new DataAwsEc2ClientVpnEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



