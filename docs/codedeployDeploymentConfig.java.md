# `codedeployDeploymentConfig` Submodule <a name="`codedeployDeploymentConfig` Submodule" id="@cdktf/provider-aws.codedeployDeploymentConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodedeployDeploymentConfig <a name="CodedeployDeploymentConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config aws_codedeploy_deployment_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_config.CodedeployDeploymentConfig;

CodedeployDeploymentConfig.Builder.create(Construct scope, java.lang.String id)
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
    .deploymentConfigName(java.lang.String)
//  .computePlatform(java.lang.String)
//  .id(java.lang.String)
//  .minimumHealthyHosts(CodedeployDeploymentConfigMinimumHealthyHosts)
//  .trafficRoutingConfig(CodedeployDeploymentConfigTrafficRoutingConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.deploymentConfigName">deploymentConfigName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#deployment_config_name CodedeployDeploymentConfig#deployment_config_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.computePlatform">computePlatform</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#compute_platform CodedeployDeploymentConfig#compute_platform}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#id CodedeployDeploymentConfig#id}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.minimumHealthyHosts">minimumHealthyHosts</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a></code> | minimum_healthy_hosts block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.trafficRoutingConfig">trafficRoutingConfig</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a></code> | traffic_routing_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deploymentConfigName`<sup>Required</sup> <a name="deploymentConfigName" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.deploymentConfigName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#deployment_config_name CodedeployDeploymentConfig#deployment_config_name}.

---

##### `computePlatform`<sup>Optional</sup> <a name="computePlatform" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.computePlatform"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#compute_platform CodedeployDeploymentConfig#compute_platform}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#id CodedeployDeploymentConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimumHealthyHosts`<sup>Optional</sup> <a name="minimumHealthyHosts" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.minimumHealthyHosts"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

minimum_healthy_hosts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#minimum_healthy_hosts CodedeployDeploymentConfig#minimum_healthy_hosts}

---

##### `trafficRoutingConfig`<sup>Optional</sup> <a name="trafficRoutingConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.trafficRoutingConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

traffic_routing_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#traffic_routing_config CodedeployDeploymentConfig#traffic_routing_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putMinimumHealthyHosts">putMinimumHealthyHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putTrafficRoutingConfig">putTrafficRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetComputePlatform">resetComputePlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetMinimumHealthyHosts">resetMinimumHealthyHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetTrafficRoutingConfig">resetTrafficRoutingConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMinimumHealthyHosts` <a name="putMinimumHealthyHosts" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putMinimumHealthyHosts"></a>

```java
public void putMinimumHealthyHosts(CodedeployDeploymentConfigMinimumHealthyHosts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putMinimumHealthyHosts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

---

##### `putTrafficRoutingConfig` <a name="putTrafficRoutingConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putTrafficRoutingConfig"></a>

```java
public void putTrafficRoutingConfig(CodedeployDeploymentConfigTrafficRoutingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putTrafficRoutingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

---

##### `resetComputePlatform` <a name="resetComputePlatform" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetComputePlatform"></a>

```java
public void resetComputePlatform()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetId"></a>

```java
public void resetId()
```

##### `resetMinimumHealthyHosts` <a name="resetMinimumHealthyHosts" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetMinimumHealthyHosts"></a>

```java
public void resetMinimumHealthyHosts()
```

##### `resetTrafficRoutingConfig` <a name="resetTrafficRoutingConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetTrafficRoutingConfig"></a>

```java
public void resetTrafficRoutingConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_config.CodedeployDeploymentConfig;

CodedeployDeploymentConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_config.CodedeployDeploymentConfig;

CodedeployDeploymentConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_config.CodedeployDeploymentConfig;

CodedeployDeploymentConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigId">deploymentConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.minimumHealthyHosts">minimumHealthyHosts</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference">CodedeployDeploymentConfigMinimumHealthyHostsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.trafficRoutingConfig">trafficRoutingConfig</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.computePlatformInput">computePlatformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigNameInput">deploymentConfigNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.minimumHealthyHostsInput">minimumHealthyHostsInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.trafficRoutingConfigInput">trafficRoutingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.computePlatform">computePlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigName">deploymentConfigName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deploymentConfigId`<sup>Required</sup> <a name="deploymentConfigId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigId"></a>

```java
public java.lang.String getDeploymentConfigId();
```

- *Type:* java.lang.String

---

##### `minimumHealthyHosts`<sup>Required</sup> <a name="minimumHealthyHosts" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.minimumHealthyHosts"></a>

```java
public CodedeployDeploymentConfigMinimumHealthyHostsOutputReference getMinimumHealthyHosts();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference">CodedeployDeploymentConfigMinimumHealthyHostsOutputReference</a>

---

##### `trafficRoutingConfig`<sup>Required</sup> <a name="trafficRoutingConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.trafficRoutingConfig"></a>

```java
public CodedeployDeploymentConfigTrafficRoutingConfigOutputReference getTrafficRoutingConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigOutputReference</a>

---

##### `computePlatformInput`<sup>Optional</sup> <a name="computePlatformInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.computePlatformInput"></a>

```java
public java.lang.String getComputePlatformInput();
```

- *Type:* java.lang.String

---

##### `deploymentConfigNameInput`<sup>Optional</sup> <a name="deploymentConfigNameInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigNameInput"></a>

```java
public java.lang.String getDeploymentConfigNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `minimumHealthyHostsInput`<sup>Optional</sup> <a name="minimumHealthyHostsInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.minimumHealthyHostsInput"></a>

```java
public CodedeployDeploymentConfigMinimumHealthyHosts getMinimumHealthyHostsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

---

##### `trafficRoutingConfigInput`<sup>Optional</sup> <a name="trafficRoutingConfigInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.trafficRoutingConfigInput"></a>

```java
public CodedeployDeploymentConfigTrafficRoutingConfig getTrafficRoutingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

---

##### `computePlatform`<sup>Required</sup> <a name="computePlatform" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.computePlatform"></a>

```java
public java.lang.String getComputePlatform();
```

- *Type:* java.lang.String

---

##### `deploymentConfigName`<sup>Required</sup> <a name="deploymentConfigName" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigName"></a>

```java
public java.lang.String getDeploymentConfigName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodedeployDeploymentConfigConfig <a name="CodedeployDeploymentConfigConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_config.CodedeployDeploymentConfigConfig;

CodedeployDeploymentConfigConfig.builder()
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
    .deploymentConfigName(java.lang.String)
//  .computePlatform(java.lang.String)
//  .id(java.lang.String)
//  .minimumHealthyHosts(CodedeployDeploymentConfigMinimumHealthyHosts)
//  .trafficRoutingConfig(CodedeployDeploymentConfigTrafficRoutingConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.deploymentConfigName">deploymentConfigName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#deployment_config_name CodedeployDeploymentConfig#deployment_config_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.computePlatform">computePlatform</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#compute_platform CodedeployDeploymentConfig#compute_platform}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#id CodedeployDeploymentConfig#id}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.minimumHealthyHosts">minimumHealthyHosts</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a></code> | minimum_healthy_hosts block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.trafficRoutingConfig">trafficRoutingConfig</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a></code> | traffic_routing_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deploymentConfigName`<sup>Required</sup> <a name="deploymentConfigName" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.deploymentConfigName"></a>

```java
public java.lang.String getDeploymentConfigName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#deployment_config_name CodedeployDeploymentConfig#deployment_config_name}.

---

##### `computePlatform`<sup>Optional</sup> <a name="computePlatform" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.computePlatform"></a>

```java
public java.lang.String getComputePlatform();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#compute_platform CodedeployDeploymentConfig#compute_platform}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#id CodedeployDeploymentConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimumHealthyHosts`<sup>Optional</sup> <a name="minimumHealthyHosts" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.minimumHealthyHosts"></a>

```java
public CodedeployDeploymentConfigMinimumHealthyHosts getMinimumHealthyHosts();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

minimum_healthy_hosts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#minimum_healthy_hosts CodedeployDeploymentConfig#minimum_healthy_hosts}

---

##### `trafficRoutingConfig`<sup>Optional</sup> <a name="trafficRoutingConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.trafficRoutingConfig"></a>

```java
public CodedeployDeploymentConfigTrafficRoutingConfig getTrafficRoutingConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

traffic_routing_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#traffic_routing_config CodedeployDeploymentConfig#traffic_routing_config}

---

### CodedeployDeploymentConfigMinimumHealthyHosts <a name="CodedeployDeploymentConfigMinimumHealthyHosts" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_config.CodedeployDeploymentConfigMinimumHealthyHosts;

CodedeployDeploymentConfigMinimumHealthyHosts.builder()
//  .type(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}.

---

### CodedeployDeploymentConfigTrafficRoutingConfig <a name="CodedeployDeploymentConfigTrafficRoutingConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_config.CodedeployDeploymentConfigTrafficRoutingConfig;

CodedeployDeploymentConfigTrafficRoutingConfig.builder()
//  .timeBasedCanary(CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary)
//  .timeBasedLinear(CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.timeBasedCanary">timeBasedCanary</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a></code> | time_based_canary block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.timeBasedLinear">timeBasedLinear</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a></code> | time_based_linear block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}. |

---

##### `timeBasedCanary`<sup>Optional</sup> <a name="timeBasedCanary" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.timeBasedCanary"></a>

```java
public CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary getTimeBasedCanary();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

time_based_canary block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#time_based_canary CodedeployDeploymentConfig#time_based_canary}

---

##### `timeBasedLinear`<sup>Optional</sup> <a name="timeBasedLinear" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.timeBasedLinear"></a>

```java
public CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear getTimeBasedLinear();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

time_based_linear block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#time_based_linear CodedeployDeploymentConfig#time_based_linear}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}.

---

### CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary <a name="CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_config.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary;

CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.builder()
//  .interval(java.lang.Number)
//  .percentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.property.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#interval CodedeployDeploymentConfig#interval}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#percentage CodedeployDeploymentConfig#percentage}. |

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#interval CodedeployDeploymentConfig#interval}.

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#percentage CodedeployDeploymentConfig#percentage}.

---

### CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear <a name="CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_config.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear;

CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.builder()
//  .interval(java.lang.Number)
//  .percentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.property.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#interval CodedeployDeploymentConfig#interval}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#percentage CodedeployDeploymentConfig#percentage}. |

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#interval CodedeployDeploymentConfig#interval}.

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config#percentage CodedeployDeploymentConfig#percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodedeployDeploymentConfigMinimumHealthyHostsOutputReference <a name="CodedeployDeploymentConfigMinimumHealthyHostsOutputReference" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_config.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference;

new CodedeployDeploymentConfigMinimumHealthyHostsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.internalValue"></a>

```java
public CodedeployDeploymentConfigMinimumHealthyHosts getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

---


### CodedeployDeploymentConfigTrafficRoutingConfigOutputReference <a name="CodedeployDeploymentConfigTrafficRoutingConfigOutputReference" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_config.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference;

new CodedeployDeploymentConfigTrafficRoutingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedCanary">putTimeBasedCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedLinear">putTimeBasedLinear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetTimeBasedCanary">resetTimeBasedCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetTimeBasedLinear">resetTimeBasedLinear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTimeBasedCanary` <a name="putTimeBasedCanary" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedCanary"></a>

```java
public void putTimeBasedCanary(CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedCanary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

---

##### `putTimeBasedLinear` <a name="putTimeBasedLinear" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedLinear"></a>

```java
public void putTimeBasedLinear(CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedLinear.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

---

##### `resetTimeBasedCanary` <a name="resetTimeBasedCanary" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetTimeBasedCanary"></a>

```java
public void resetTimeBasedCanary()
```

##### `resetTimeBasedLinear` <a name="resetTimeBasedLinear" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetTimeBasedLinear"></a>

```java
public void resetTimeBasedLinear()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanary">timeBasedCanary</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinear">timeBasedLinear</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanaryInput">timeBasedCanaryInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinearInput">timeBasedLinearInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeBasedCanary`<sup>Required</sup> <a name="timeBasedCanary" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanary"></a>

```java
public CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference getTimeBasedCanary();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference</a>

---

##### `timeBasedLinear`<sup>Required</sup> <a name="timeBasedLinear" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinear"></a>

```java
public CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference getTimeBasedLinear();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference</a>

---

##### `timeBasedCanaryInput`<sup>Optional</sup> <a name="timeBasedCanaryInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanaryInput"></a>

```java
public CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary getTimeBasedCanaryInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

---

##### `timeBasedLinearInput`<sup>Optional</sup> <a name="timeBasedLinearInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinearInput"></a>

```java
public CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear getTimeBasedLinearInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.internalValue"></a>

```java
public CodedeployDeploymentConfigTrafficRoutingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

---


### CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference <a name="CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_config.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference;

new CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resetPercentage"></a>

```java
public void resetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.percentageInput">percentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.percentageInput"></a>

```java
public java.lang.Number getPercentageInput();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.internalValue"></a>

```java
public CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

---


### CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference <a name="CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_config.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference;

new CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resetPercentage"></a>

```java
public void resetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.percentageInput">percentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.percentageInput"></a>

```java
public java.lang.Number getPercentageInput();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.internalValue"></a>

```java
public CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

---



