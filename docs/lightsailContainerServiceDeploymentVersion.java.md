# `lightsailContainerServiceDeploymentVersion` Submodule <a name="`lightsailContainerServiceDeploymentVersion` Submodule" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailContainerServiceDeploymentVersion <a name="LightsailContainerServiceDeploymentVersion" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version aws_lightsail_container_service_deployment_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service_deployment_version.LightsailContainerServiceDeploymentVersion;

LightsailContainerServiceDeploymentVersion.Builder.create(Construct scope, java.lang.String id)
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
    .container(IResolvable)
    .container(java.util.List<LightsailContainerServiceDeploymentVersionContainer>)
    .serviceName(java.lang.String)
//  .id(java.lang.String)
//  .publicEndpoint(LightsailContainerServiceDeploymentVersionPublicEndpoint)
//  .timeouts(LightsailContainerServiceDeploymentVersionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.container">container</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer">LightsailContainerServiceDeploymentVersionContainer</a>></code> | container block. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#service_name LightsailContainerServiceDeploymentVersion#service_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#id LightsailContainerServiceDeploymentVersion#id}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.publicEndpoint">publicEndpoint</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpoint">LightsailContainerServiceDeploymentVersionPublicEndpoint</a></code> | public_endpoint block. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeouts">LightsailContainerServiceDeploymentVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.container"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer">LightsailContainerServiceDeploymentVersionContainer</a>>

container block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#container LightsailContainerServiceDeploymentVersion#container}

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#service_name LightsailContainerServiceDeploymentVersion#service_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#id LightsailContainerServiceDeploymentVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publicEndpoint`<sup>Optional</sup> <a name="publicEndpoint" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.publicEndpoint"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpoint">LightsailContainerServiceDeploymentVersionPublicEndpoint</a>

public_endpoint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#public_endpoint LightsailContainerServiceDeploymentVersion#public_endpoint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeouts">LightsailContainerServiceDeploymentVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#timeouts LightsailContainerServiceDeploymentVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.putPublicEndpoint">putPublicEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.resetPublicEndpoint">resetPublicEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putContainer` <a name="putContainer" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.putContainer"></a>

```java
public void putContainer(IResolvable OR java.util.List<LightsailContainerServiceDeploymentVersionContainer> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.putContainer.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer">LightsailContainerServiceDeploymentVersionContainer</a>>

---

##### `putPublicEndpoint` <a name="putPublicEndpoint" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.putPublicEndpoint"></a>

```java
public void putPublicEndpoint(LightsailContainerServiceDeploymentVersionPublicEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.putPublicEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpoint">LightsailContainerServiceDeploymentVersionPublicEndpoint</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.putTimeouts"></a>

```java
public void putTimeouts(LightsailContainerServiceDeploymentVersionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeouts">LightsailContainerServiceDeploymentVersionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.resetId"></a>

```java
public void resetId()
```

##### `resetPublicEndpoint` <a name="resetPublicEndpoint" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.resetPublicEndpoint"></a>

```java
public void resetPublicEndpoint()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service_deployment_version.LightsailContainerServiceDeploymentVersion;

LightsailContainerServiceDeploymentVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service_deployment_version.LightsailContainerServiceDeploymentVersion;

LightsailContainerServiceDeploymentVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service_deployment_version.LightsailContainerServiceDeploymentVersion;

LightsailContainerServiceDeploymentVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.container">container</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList">LightsailContainerServiceDeploymentVersionContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.publicEndpoint">publicEndpoint</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference">LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference">LightsailContainerServiceDeploymentVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.containerInput">containerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer">LightsailContainerServiceDeploymentVersionContainer</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.publicEndpointInput">publicEndpointInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpoint">LightsailContainerServiceDeploymentVersionPublicEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeouts">LightsailContainerServiceDeploymentVersionTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.container"></a>

```java
public LightsailContainerServiceDeploymentVersionContainerList getContainer();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList">LightsailContainerServiceDeploymentVersionContainerList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `publicEndpoint`<sup>Required</sup> <a name="publicEndpoint" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.publicEndpoint"></a>

```java
public LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference getPublicEndpoint();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference">LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.timeouts"></a>

```java
public LightsailContainerServiceDeploymentVersionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference">LightsailContainerServiceDeploymentVersionTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.containerInput"></a>

```java
public java.lang.Object getContainerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer">LightsailContainerServiceDeploymentVersionContainer</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `publicEndpointInput`<sup>Optional</sup> <a name="publicEndpointInput" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.publicEndpointInput"></a>

```java
public LightsailContainerServiceDeploymentVersionPublicEndpoint getPublicEndpointInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpoint">LightsailContainerServiceDeploymentVersionPublicEndpoint</a>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeouts">LightsailContainerServiceDeploymentVersionTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailContainerServiceDeploymentVersionConfig <a name="LightsailContainerServiceDeploymentVersionConfig" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service_deployment_version.LightsailContainerServiceDeploymentVersionConfig;

LightsailContainerServiceDeploymentVersionConfig.builder()
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
    .container(IResolvable)
    .container(java.util.List<LightsailContainerServiceDeploymentVersionContainer>)
    .serviceName(java.lang.String)
//  .id(java.lang.String)
//  .publicEndpoint(LightsailContainerServiceDeploymentVersionPublicEndpoint)
//  .timeouts(LightsailContainerServiceDeploymentVersionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.container">container</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer">LightsailContainerServiceDeploymentVersionContainer</a>></code> | container block. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#service_name LightsailContainerServiceDeploymentVersion#service_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#id LightsailContainerServiceDeploymentVersion#id}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.publicEndpoint">publicEndpoint</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpoint">LightsailContainerServiceDeploymentVersionPublicEndpoint</a></code> | public_endpoint block. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeouts">LightsailContainerServiceDeploymentVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.container"></a>

```java
public java.lang.Object getContainer();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer">LightsailContainerServiceDeploymentVersionContainer</a>>

container block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#container LightsailContainerServiceDeploymentVersion#container}

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#service_name LightsailContainerServiceDeploymentVersion#service_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#id LightsailContainerServiceDeploymentVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publicEndpoint`<sup>Optional</sup> <a name="publicEndpoint" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.publicEndpoint"></a>

```java
public LightsailContainerServiceDeploymentVersionPublicEndpoint getPublicEndpoint();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpoint">LightsailContainerServiceDeploymentVersionPublicEndpoint</a>

public_endpoint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#public_endpoint LightsailContainerServiceDeploymentVersion#public_endpoint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionConfig.property.timeouts"></a>

```java
public LightsailContainerServiceDeploymentVersionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeouts">LightsailContainerServiceDeploymentVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#timeouts LightsailContainerServiceDeploymentVersion#timeouts}

---

### LightsailContainerServiceDeploymentVersionContainer <a name="LightsailContainerServiceDeploymentVersionContainer" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service_deployment_version.LightsailContainerServiceDeploymentVersionContainer;

LightsailContainerServiceDeploymentVersionContainer.builder()
    .containerName(java.lang.String)
    .image(java.lang.String)
//  .command(java.util.List<java.lang.String>)
//  .environment(java.util.Map<java.lang.String, java.lang.String>)
//  .ports(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer.property.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#container_name LightsailContainerServiceDeploymentVersion#container_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer.property.image">image</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#image LightsailContainerServiceDeploymentVersion#image}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#command LightsailContainerServiceDeploymentVersion#command}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer.property.environment">environment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#environment LightsailContainerServiceDeploymentVersion#environment}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer.property.ports">ports</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#ports LightsailContainerServiceDeploymentVersion#ports}. |

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#container_name LightsailContainerServiceDeploymentVersion#container_name}.

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#image LightsailContainerServiceDeploymentVersion#image}.

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#command LightsailContainerServiceDeploymentVersion#command}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer.property.environment"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironment();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#environment LightsailContainerServiceDeploymentVersion#environment}.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer.property.ports"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPorts();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#ports LightsailContainerServiceDeploymentVersion#ports}.

---

### LightsailContainerServiceDeploymentVersionPublicEndpoint <a name="LightsailContainerServiceDeploymentVersionPublicEndpoint" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service_deployment_version.LightsailContainerServiceDeploymentVersionPublicEndpoint;

LightsailContainerServiceDeploymentVersionPublicEndpoint.builder()
    .containerName(java.lang.String)
    .containerPort(java.lang.Number)
    .healthCheck(LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpoint.property.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#container_name LightsailContainerServiceDeploymentVersion#container_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpoint.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#container_port LightsailContainerServiceDeploymentVersion#container_port}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpoint.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck">LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck</a></code> | health_check block. |

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpoint.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#container_name LightsailContainerServiceDeploymentVersion#container_name}.

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpoint.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#container_port LightsailContainerServiceDeploymentVersion#container_port}.

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpoint.property.healthCheck"></a>

```java
public LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck getHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck">LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#health_check LightsailContainerServiceDeploymentVersion#health_check}

---

### LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck <a name="LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service_deployment_version.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck;

LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck.builder()
//  .healthyThreshold(java.lang.Number)
//  .intervalSeconds(java.lang.Number)
//  .path(java.lang.String)
//  .successCodes(java.lang.String)
//  .timeoutSeconds(java.lang.Number)
//  .unhealthyThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#healthy_threshold LightsailContainerServiceDeploymentVersion#healthy_threshold}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#interval_seconds LightsailContainerServiceDeploymentVersion#interval_seconds}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#path LightsailContainerServiceDeploymentVersion#path}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck.property.successCodes">successCodes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#success_codes LightsailContainerServiceDeploymentVersion#success_codes}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#timeout_seconds LightsailContainerServiceDeploymentVersion#timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#unhealthy_threshold LightsailContainerServiceDeploymentVersion#unhealthy_threshold}. |

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#healthy_threshold LightsailContainerServiceDeploymentVersion#healthy_threshold}.

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#interval_seconds LightsailContainerServiceDeploymentVersion#interval_seconds}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#path LightsailContainerServiceDeploymentVersion#path}.

---

##### `successCodes`<sup>Optional</sup> <a name="successCodes" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck.property.successCodes"></a>

```java
public java.lang.String getSuccessCodes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#success_codes LightsailContainerServiceDeploymentVersion#success_codes}.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#timeout_seconds LightsailContainerServiceDeploymentVersion#timeout_seconds}.

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#unhealthy_threshold LightsailContainerServiceDeploymentVersion#unhealthy_threshold}.

---

### LightsailContainerServiceDeploymentVersionTimeouts <a name="LightsailContainerServiceDeploymentVersionTimeouts" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service_deployment_version.LightsailContainerServiceDeploymentVersionTimeouts;

LightsailContainerServiceDeploymentVersionTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#create LightsailContainerServiceDeploymentVersion#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service_deployment_version#create LightsailContainerServiceDeploymentVersion#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailContainerServiceDeploymentVersionContainerList <a name="LightsailContainerServiceDeploymentVersionContainerList" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service_deployment_version.LightsailContainerServiceDeploymentVersionContainerList;

new LightsailContainerServiceDeploymentVersionContainerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.get"></a>

```java
public LightsailContainerServiceDeploymentVersionContainerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer">LightsailContainerServiceDeploymentVersionContainer</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer">LightsailContainerServiceDeploymentVersionContainer</a>>

---


### LightsailContainerServiceDeploymentVersionContainerOutputReference <a name="LightsailContainerServiceDeploymentVersionContainerOutputReference" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service_deployment_version.LightsailContainerServiceDeploymentVersionContainerOutputReference;

new LightsailContainerServiceDeploymentVersionContainerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.resetPorts"></a>

```java
public void resetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.environmentInput">environmentInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.environment">environment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.ports">ports</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer">LightsailContainerServiceDeploymentVersionContainer</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.environmentInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.portsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPortsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.environment"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironment();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.ports"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPorts();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionContainer">LightsailContainerServiceDeploymentVersionContainer</a> OR com.hashicorp.cdktf.IResolvable

---


### LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference <a name="LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service_deployment_version.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference;

new LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.resetHealthyThreshold">resetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.resetSuccessCodes">resetSuccessCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.resetUnhealthyThreshold">resetUnhealthyThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHealthyThreshold` <a name="resetHealthyThreshold" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.resetHealthyThreshold"></a>

```java
public void resetHealthyThreshold()
```

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.resetIntervalSeconds"></a>

```java
public void resetIntervalSeconds()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetSuccessCodes` <a name="resetSuccessCodes" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.resetSuccessCodes"></a>

```java
public void resetSuccessCodes()
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.resetTimeoutSeconds"></a>

```java
public void resetTimeoutSeconds()
```

##### `resetUnhealthyThreshold` <a name="resetUnhealthyThreshold" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.resetUnhealthyThreshold"></a>

```java
public void resetUnhealthyThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.successCodesInput">successCodesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.successCodes">successCodes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck">LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.healthyThresholdInput"></a>

```java
public java.lang.Number getHealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.intervalSecondsInput"></a>

```java
public java.lang.Number getIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `successCodesInput`<sup>Optional</sup> <a name="successCodesInput" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.successCodesInput"></a>

```java
public java.lang.String getSuccessCodesInput();
```

- *Type:* java.lang.String

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.timeoutSecondsInput"></a>

```java
public java.lang.Number getTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```java
public java.lang.Number getUnhealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `successCodes`<sup>Required</sup> <a name="successCodes" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.successCodes"></a>

```java
public java.lang.String getSuccessCodes();
```

- *Type:* java.lang.String

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference.property.internalValue"></a>

```java
public LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck">LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck</a>

---


### LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference <a name="LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service_deployment_version.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference;

new LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.putHealthCheck">putHealthCheck</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHealthCheck` <a name="putHealthCheck" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.putHealthCheck"></a>

```java
public void putHealthCheck(LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck">LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference">LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.property.healthCheckInput">healthCheckInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck">LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpoint">LightsailContainerServiceDeploymentVersionPublicEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.property.healthCheck"></a>

```java
public LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference getHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference">LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference</a>

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.property.containerPortInput"></a>

```java
public java.lang.Number getContainerPortInput();
```

- *Type:* java.lang.Number

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.property.healthCheckInput"></a>

```java
public LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck getHealthCheckInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck">LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck</a>

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference.property.internalValue"></a>

```java
public LightsailContainerServiceDeploymentVersionPublicEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionPublicEndpoint">LightsailContainerServiceDeploymentVersionPublicEndpoint</a>

---


### LightsailContainerServiceDeploymentVersionTimeoutsOutputReference <a name="LightsailContainerServiceDeploymentVersionTimeoutsOutputReference" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service_deployment_version.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference;

new LightsailContainerServiceDeploymentVersionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeouts">LightsailContainerServiceDeploymentVersionTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerServiceDeploymentVersion.LightsailContainerServiceDeploymentVersionTimeouts">LightsailContainerServiceDeploymentVersionTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



