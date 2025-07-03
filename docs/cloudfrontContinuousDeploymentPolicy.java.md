# `cloudfrontContinuousDeploymentPolicy` Submodule <a name="`cloudfrontContinuousDeploymentPolicy` Submodule" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontContinuousDeploymentPolicy <a name="CloudfrontContinuousDeploymentPolicy" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy aws_cloudfront_continuous_deployment_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicy;

CloudfrontContinuousDeploymentPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .stagingDistributionDnsNames(IResolvable)
//  .stagingDistributionDnsNames(java.util.List<CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames>)
//  .trafficConfig(IResolvable)
//  .trafficConfig(java.util.List<CloudfrontContinuousDeploymentPolicyTrafficConfig>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#enabled CloudfrontContinuousDeploymentPolicy#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.stagingDistributionDnsNames">stagingDistributionDnsNames</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames</a>></code> | staging_distribution_dns_names block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.trafficConfig">trafficConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig">CloudfrontContinuousDeploymentPolicyTrafficConfig</a>></code> | traffic_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#enabled CloudfrontContinuousDeploymentPolicy#enabled}.

---

##### `stagingDistributionDnsNames`<sup>Optional</sup> <a name="stagingDistributionDnsNames" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.stagingDistributionDnsNames"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames</a>>

staging_distribution_dns_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#staging_distribution_dns_names CloudfrontContinuousDeploymentPolicy#staging_distribution_dns_names}

---

##### `trafficConfig`<sup>Optional</sup> <a name="trafficConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.trafficConfig"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig">CloudfrontContinuousDeploymentPolicyTrafficConfig</a>>

traffic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#traffic_config CloudfrontContinuousDeploymentPolicy#traffic_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putStagingDistributionDnsNames">putStagingDistributionDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putTrafficConfig">putTrafficConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.resetStagingDistributionDnsNames">resetStagingDistributionDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.resetTrafficConfig">resetTrafficConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStagingDistributionDnsNames` <a name="putStagingDistributionDnsNames" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putStagingDistributionDnsNames"></a>

```java
public void putStagingDistributionDnsNames(IResolvable OR java.util.List<CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putStagingDistributionDnsNames.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames</a>>

---

##### `putTrafficConfig` <a name="putTrafficConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putTrafficConfig"></a>

```java
public void putTrafficConfig(IResolvable OR java.util.List<CloudfrontContinuousDeploymentPolicyTrafficConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putTrafficConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig">CloudfrontContinuousDeploymentPolicyTrafficConfig</a>>

---

##### `resetStagingDistributionDnsNames` <a name="resetStagingDistributionDnsNames" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.resetStagingDistributionDnsNames"></a>

```java
public void resetStagingDistributionDnsNames()
```

##### `resetTrafficConfig` <a name="resetTrafficConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.resetTrafficConfig"></a>

```java
public void resetTrafficConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudfrontContinuousDeploymentPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicy;

CloudfrontContinuousDeploymentPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicy;

CloudfrontContinuousDeploymentPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicy;

CloudfrontContinuousDeploymentPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicy;

CloudfrontContinuousDeploymentPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudfrontContinuousDeploymentPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudfrontContinuousDeploymentPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudfrontContinuousDeploymentPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudfrontContinuousDeploymentPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudfrontContinuousDeploymentPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.stagingDistributionDnsNames">stagingDistributionDnsNames</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.trafficConfig">trafficConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList">CloudfrontContinuousDeploymentPolicyTrafficConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.stagingDistributionDnsNamesInput">stagingDistributionDnsNamesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.trafficConfigInput">trafficConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig">CloudfrontContinuousDeploymentPolicyTrafficConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `stagingDistributionDnsNames`<sup>Required</sup> <a name="stagingDistributionDnsNames" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.stagingDistributionDnsNames"></a>

```java
public CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList getStagingDistributionDnsNames();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList</a>

---

##### `trafficConfig`<sup>Required</sup> <a name="trafficConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.trafficConfig"></a>

```java
public CloudfrontContinuousDeploymentPolicyTrafficConfigList getTrafficConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList">CloudfrontContinuousDeploymentPolicyTrafficConfigList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stagingDistributionDnsNamesInput`<sup>Optional</sup> <a name="stagingDistributionDnsNamesInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.stagingDistributionDnsNamesInput"></a>

```java
public java.lang.Object getStagingDistributionDnsNamesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames</a>>

---

##### `trafficConfigInput`<sup>Optional</sup> <a name="trafficConfigInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.trafficConfigInput"></a>

```java
public java.lang.Object getTrafficConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig">CloudfrontContinuousDeploymentPolicyTrafficConfig</a>>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontContinuousDeploymentPolicyConfig <a name="CloudfrontContinuousDeploymentPolicyConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicyConfig;

CloudfrontContinuousDeploymentPolicyConfig.builder()
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
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .stagingDistributionDnsNames(IResolvable)
//  .stagingDistributionDnsNames(java.util.List<CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames>)
//  .trafficConfig(IResolvable)
//  .trafficConfig(java.util.List<CloudfrontContinuousDeploymentPolicyTrafficConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#enabled CloudfrontContinuousDeploymentPolicy#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.stagingDistributionDnsNames">stagingDistributionDnsNames</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames</a>></code> | staging_distribution_dns_names block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.trafficConfig">trafficConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig">CloudfrontContinuousDeploymentPolicyTrafficConfig</a>></code> | traffic_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#enabled CloudfrontContinuousDeploymentPolicy#enabled}.

---

##### `stagingDistributionDnsNames`<sup>Optional</sup> <a name="stagingDistributionDnsNames" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.stagingDistributionDnsNames"></a>

```java
public java.lang.Object getStagingDistributionDnsNames();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames</a>>

staging_distribution_dns_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#staging_distribution_dns_names CloudfrontContinuousDeploymentPolicy#staging_distribution_dns_names}

---

##### `trafficConfig`<sup>Optional</sup> <a name="trafficConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.trafficConfig"></a>

```java
public java.lang.Object getTrafficConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig">CloudfrontContinuousDeploymentPolicyTrafficConfig</a>>

traffic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#traffic_config CloudfrontContinuousDeploymentPolicy#traffic_config}

---

### CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames <a name="CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames;

CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames.builder()
    .quantity(java.lang.Number)
//  .items(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames.property.quantity">quantity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#quantity CloudfrontContinuousDeploymentPolicy#quantity}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames.property.items">items</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#items CloudfrontContinuousDeploymentPolicy#items}. |

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames.property.quantity"></a>

```java
public java.lang.Number getQuantity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#quantity CloudfrontContinuousDeploymentPolicy#quantity}.

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames.property.items"></a>

```java
public java.util.List<java.lang.String> getItems();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#items CloudfrontContinuousDeploymentPolicy#items}.

---

### CloudfrontContinuousDeploymentPolicyTrafficConfig <a name="CloudfrontContinuousDeploymentPolicyTrafficConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicyTrafficConfig;

CloudfrontContinuousDeploymentPolicyTrafficConfig.builder()
    .type(java.lang.String)
//  .singleHeaderConfig(IResolvable)
//  .singleHeaderConfig(java.util.List<CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig>)
//  .singleWeightConfig(IResolvable)
//  .singleWeightConfig(java.util.List<CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#type CloudfrontContinuousDeploymentPolicy#type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig.property.singleHeaderConfig">singleHeaderConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig</a>></code> | single_header_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig.property.singleWeightConfig">singleWeightConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig</a>></code> | single_weight_config block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#type CloudfrontContinuousDeploymentPolicy#type}.

---

##### `singleHeaderConfig`<sup>Optional</sup> <a name="singleHeaderConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig.property.singleHeaderConfig"></a>

```java
public java.lang.Object getSingleHeaderConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig</a>>

single_header_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#single_header_config CloudfrontContinuousDeploymentPolicy#single_header_config}

---

##### `singleWeightConfig`<sup>Optional</sup> <a name="singleWeightConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig.property.singleWeightConfig"></a>

```java
public java.lang.Object getSingleWeightConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig</a>>

single_weight_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#single_weight_config CloudfrontContinuousDeploymentPolicy#single_weight_config}

---

### CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig;

CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig.builder()
    .header(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig.property.header">header</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#header CloudfrontContinuousDeploymentPolicy#header}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#value CloudfrontContinuousDeploymentPolicy#value}. |

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig.property.header"></a>

```java
public java.lang.String getHeader();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#header CloudfrontContinuousDeploymentPolicy#header}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#value CloudfrontContinuousDeploymentPolicy#value}.

---

### CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig;

CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig.builder()
    .weight(java.lang.Number)
//  .sessionStickinessConfig(IResolvable)
//  .sessionStickinessConfig(java.util.List<CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#weight CloudfrontContinuousDeploymentPolicy#weight}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig.property.sessionStickinessConfig">sessionStickinessConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig</a>></code> | session_stickiness_config block. |

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#weight CloudfrontContinuousDeploymentPolicy#weight}.

---

##### `sessionStickinessConfig`<sup>Optional</sup> <a name="sessionStickinessConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig.property.sessionStickinessConfig"></a>

```java
public java.lang.Object getSessionStickinessConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig</a>>

session_stickiness_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#session_stickiness_config CloudfrontContinuousDeploymentPolicy#session_stickiness_config}

---

### CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig;

CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig.builder()
    .idleTtl(java.lang.Number)
    .maximumTtl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig.property.idleTtl">idleTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#idle_ttl CloudfrontContinuousDeploymentPolicy#idle_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig.property.maximumTtl">maximumTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#maximum_ttl CloudfrontContinuousDeploymentPolicy#maximum_ttl}. |

---

##### `idleTtl`<sup>Required</sup> <a name="idleTtl" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig.property.idleTtl"></a>

```java
public java.lang.Number getIdleTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#idle_ttl CloudfrontContinuousDeploymentPolicy#idle_ttl}.

---

##### `maximumTtl`<sup>Required</sup> <a name="maximumTtl" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig.property.maximumTtl"></a>

```java
public java.lang.Number getMaximumTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudfront_continuous_deployment_policy#maximum_ttl CloudfrontContinuousDeploymentPolicy#maximum_ttl}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList <a name="CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList;

new CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.get"></a>

```java
public CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames</a>>

---


### CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference <a name="CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference;

new CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetItems` <a name="resetItems" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.resetItems"></a>

```java
public void resetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.itemsInput">itemsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.quantityInput">quantityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.items">items</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.quantity">quantity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.itemsInput"></a>

```java
public java.util.List<java.lang.String> getItemsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `quantityInput`<sup>Optional</sup> <a name="quantityInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.quantityInput"></a>

```java
public java.lang.Number getQuantityInput();
```

- *Type:* java.lang.Number

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.items"></a>

```java
public java.util.List<java.lang.String> getItems();
```

- *Type:* java.util.List<java.lang.String>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.quantity"></a>

```java
public java.lang.Number getQuantity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames">CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames</a>

---


### CloudfrontContinuousDeploymentPolicyTrafficConfigList <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigList" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicyTrafficConfigList;

new CloudfrontContinuousDeploymentPolicyTrafficConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.get"></a>

```java
public CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig">CloudfrontContinuousDeploymentPolicyTrafficConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig">CloudfrontContinuousDeploymentPolicyTrafficConfig</a>>

---


### CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference;

new CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.putSingleHeaderConfig">putSingleHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.putSingleWeightConfig">putSingleWeightConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.resetSingleHeaderConfig">resetSingleHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.resetSingleWeightConfig">resetSingleWeightConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSingleHeaderConfig` <a name="putSingleHeaderConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.putSingleHeaderConfig"></a>

```java
public void putSingleHeaderConfig(IResolvable OR java.util.List<CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.putSingleHeaderConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig</a>>

---

##### `putSingleWeightConfig` <a name="putSingleWeightConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.putSingleWeightConfig"></a>

```java
public void putSingleWeightConfig(IResolvable OR java.util.List<CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.putSingleWeightConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig</a>>

---

##### `resetSingleHeaderConfig` <a name="resetSingleHeaderConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.resetSingleHeaderConfig"></a>

```java
public void resetSingleHeaderConfig()
```

##### `resetSingleWeightConfig` <a name="resetSingleWeightConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.resetSingleWeightConfig"></a>

```java
public void resetSingleWeightConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.singleHeaderConfig">singleHeaderConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.singleWeightConfig">singleWeightConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.singleHeaderConfigInput">singleHeaderConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.singleWeightConfigInput">singleWeightConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig">CloudfrontContinuousDeploymentPolicyTrafficConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `singleHeaderConfig`<sup>Required</sup> <a name="singleHeaderConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.singleHeaderConfig"></a>

```java
public CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList getSingleHeaderConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList</a>

---

##### `singleWeightConfig`<sup>Required</sup> <a name="singleWeightConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.singleWeightConfig"></a>

```java
public CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList getSingleWeightConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList</a>

---

##### `singleHeaderConfigInput`<sup>Optional</sup> <a name="singleHeaderConfigInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.singleHeaderConfigInput"></a>

```java
public java.lang.Object getSingleHeaderConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig</a>>

---

##### `singleWeightConfigInput`<sup>Optional</sup> <a name="singleWeightConfigInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.singleWeightConfigInput"></a>

```java
public java.lang.Object getSingleWeightConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfig">CloudfrontContinuousDeploymentPolicyTrafficConfig</a>

---


### CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList;

new CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.get"></a>

```java
public CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig</a>>

---


### CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference;

new CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.headerInput">headerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.header">header</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.headerInput"></a>

```java
public java.lang.String getHeaderInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.header"></a>

```java
public java.lang.String getHeader();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig</a>

---


### CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList;

new CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.get"></a>

```java
public CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig</a>>

---


### CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference;

new CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.putSessionStickinessConfig">putSessionStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.resetSessionStickinessConfig">resetSessionStickinessConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSessionStickinessConfig` <a name="putSessionStickinessConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.putSessionStickinessConfig"></a>

```java
public void putSessionStickinessConfig(IResolvable OR java.util.List<CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.putSessionStickinessConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig</a>>

---

##### `resetSessionStickinessConfig` <a name="resetSessionStickinessConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.resetSessionStickinessConfig"></a>

```java
public void resetSessionStickinessConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.sessionStickinessConfig">sessionStickinessConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.sessionStickinessConfigInput">sessionStickinessConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sessionStickinessConfig`<sup>Required</sup> <a name="sessionStickinessConfig" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.sessionStickinessConfig"></a>

```java
public CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList getSessionStickinessConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList</a>

---

##### `sessionStickinessConfigInput`<sup>Optional</sup> <a name="sessionStickinessConfigInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.sessionStickinessConfigInput"></a>

```java
public java.lang.Object getSessionStickinessConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig</a>>

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig</a>

---


### CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList;

new CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.get"></a>

```java
public CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig</a>>

---


### CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_continuous_deployment_policy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference;

new CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.idleTtlInput">idleTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.maximumTtlInput">maximumTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.idleTtl">idleTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.maximumTtl">maximumTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleTtlInput`<sup>Optional</sup> <a name="idleTtlInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.idleTtlInput"></a>

```java
public java.lang.Number getIdleTtlInput();
```

- *Type:* java.lang.Number

---

##### `maximumTtlInput`<sup>Optional</sup> <a name="maximumTtlInput" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.maximumTtlInput"></a>

```java
public java.lang.Number getMaximumTtlInput();
```

- *Type:* java.lang.Number

---

##### `idleTtl`<sup>Required</sup> <a name="idleTtl" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.idleTtl"></a>

```java
public java.lang.Number getIdleTtl();
```

- *Type:* java.lang.Number

---

##### `maximumTtl`<sup>Required</sup> <a name="maximumTtl" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.maximumTtl"></a>

```java
public java.lang.Number getMaximumTtl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig</a>

---



