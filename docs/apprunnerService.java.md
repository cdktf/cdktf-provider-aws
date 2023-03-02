# `apprunnerService` Submodule <a name="`apprunnerService` Submodule" id="@cdktf/provider-aws.apprunnerService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerService <a name="ApprunnerService" id="@cdktf/provider-aws.apprunnerService.ApprunnerService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service aws_apprunner_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerService;

ApprunnerService.Builder.create(Construct scope, java.lang.String id)
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
    .serviceName(java.lang.String)
    .sourceConfiguration(ApprunnerServiceSourceConfiguration)
//  .autoScalingConfigurationArn(java.lang.String)
//  .encryptionConfiguration(ApprunnerServiceEncryptionConfiguration)
//  .healthCheckConfiguration(ApprunnerServiceHealthCheckConfiguration)
//  .id(java.lang.String)
//  .instanceConfiguration(ApprunnerServiceInstanceConfiguration)
//  .networkConfiguration(ApprunnerServiceNetworkConfiguration)
//  .observabilityConfiguration(ApprunnerServiceObservabilityConfiguration)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#service_name ApprunnerService#service_name}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.sourceConfiguration">sourceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a></code> | source_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.autoScalingConfigurationArn">autoScalingConfigurationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#auto_scaling_configuration_arn ApprunnerService#auto_scaling_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.healthCheckConfiguration">healthCheckConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a></code> | health_check_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#id ApprunnerService#id}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.instanceConfiguration">instanceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a></code> | instance_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.observabilityConfiguration">observabilityConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a></code> | observability_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#tags ApprunnerService#tags}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#tags_all ApprunnerService#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#service_name ApprunnerService#service_name}.

---

##### `sourceConfiguration`<sup>Required</sup> <a name="sourceConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.sourceConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

source_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#source_configuration ApprunnerService#source_configuration}

---

##### `autoScalingConfigurationArn`<sup>Optional</sup> <a name="autoScalingConfigurationArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.autoScalingConfigurationArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#auto_scaling_configuration_arn ApprunnerService#auto_scaling_configuration_arn}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#encryption_configuration ApprunnerService#encryption_configuration}

---

##### `healthCheckConfiguration`<sup>Optional</sup> <a name="healthCheckConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.healthCheckConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

health_check_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#health_check_configuration ApprunnerService#health_check_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#id ApprunnerService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceConfiguration`<sup>Optional</sup> <a name="instanceConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.instanceConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

instance_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#instance_configuration ApprunnerService#instance_configuration}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#network_configuration ApprunnerService#network_configuration}

---

##### `observabilityConfiguration`<sup>Optional</sup> <a name="observabilityConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.observabilityConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

observability_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#observability_configuration ApprunnerService#observability_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#tags ApprunnerService#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#tags_all ApprunnerService#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.putHealthCheckConfiguration">putHealthCheckConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.putInstanceConfiguration">putInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.putObservabilityConfiguration">putObservabilityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.putSourceConfiguration">putSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.resetAutoScalingConfigurationArn">resetAutoScalingConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.resetHealthCheckConfiguration">resetHealthCheckConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.resetInstanceConfiguration">resetInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.resetObservabilityConfiguration">resetObservabilityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putEncryptionConfiguration"></a>

```java
public void putEncryptionConfiguration(ApprunnerServiceEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

---

##### `putHealthCheckConfiguration` <a name="putHealthCheckConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putHealthCheckConfiguration"></a>

```java
public void putHealthCheckConfiguration(ApprunnerServiceHealthCheckConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putHealthCheckConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

---

##### `putInstanceConfiguration` <a name="putInstanceConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putInstanceConfiguration"></a>

```java
public void putInstanceConfiguration(ApprunnerServiceInstanceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putInstanceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(ApprunnerServiceNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

---

##### `putObservabilityConfiguration` <a name="putObservabilityConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putObservabilityConfiguration"></a>

```java
public void putObservabilityConfiguration(ApprunnerServiceObservabilityConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putObservabilityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

---

##### `putSourceConfiguration` <a name="putSourceConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putSourceConfiguration"></a>

```java
public void putSourceConfiguration(ApprunnerServiceSourceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.putSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

---

##### `resetAutoScalingConfigurationArn` <a name="resetAutoScalingConfigurationArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.resetAutoScalingConfigurationArn"></a>

```java
public void resetAutoScalingConfigurationArn()
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.resetEncryptionConfiguration"></a>

```java
public void resetEncryptionConfiguration()
```

##### `resetHealthCheckConfiguration` <a name="resetHealthCheckConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.resetHealthCheckConfiguration"></a>

```java
public void resetHealthCheckConfiguration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceConfiguration` <a name="resetInstanceConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.resetInstanceConfiguration"></a>

```java
public void resetInstanceConfiguration()
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.resetNetworkConfiguration"></a>

```java
public void resetNetworkConfiguration()
```

##### `resetObservabilityConfiguration` <a name="resetObservabilityConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.resetObservabilityConfiguration"></a>

```java
public void resetObservabilityConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerService;

ApprunnerService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerService;

ApprunnerService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerService;

ApprunnerService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference">ApprunnerServiceEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.healthCheckConfiguration">healthCheckConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference">ApprunnerServiceHealthCheckConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.instanceConfiguration">instanceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference">ApprunnerServiceInstanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference">ApprunnerServiceNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.observabilityConfiguration">observabilityConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference">ApprunnerServiceObservabilityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.serviceUrl">serviceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.sourceConfiguration">sourceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference">ApprunnerServiceSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.autoScalingConfigurationArnInput">autoScalingConfigurationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.healthCheckConfigurationInput">healthCheckConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.instanceConfigurationInput">instanceConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.observabilityConfigurationInput">observabilityConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.sourceConfigurationInput">sourceConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.autoScalingConfigurationArn">autoScalingConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.encryptionConfiguration"></a>

```java
public ApprunnerServiceEncryptionConfigurationOutputReference getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference">ApprunnerServiceEncryptionConfigurationOutputReference</a>

---

##### `healthCheckConfiguration`<sup>Required</sup> <a name="healthCheckConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.healthCheckConfiguration"></a>

```java
public ApprunnerServiceHealthCheckConfigurationOutputReference getHealthCheckConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference">ApprunnerServiceHealthCheckConfigurationOutputReference</a>

---

##### `instanceConfiguration`<sup>Required</sup> <a name="instanceConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.instanceConfiguration"></a>

```java
public ApprunnerServiceInstanceConfigurationOutputReference getInstanceConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference">ApprunnerServiceInstanceConfigurationOutputReference</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.networkConfiguration"></a>

```java
public ApprunnerServiceNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference">ApprunnerServiceNetworkConfigurationOutputReference</a>

---

##### `observabilityConfiguration`<sup>Required</sup> <a name="observabilityConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.observabilityConfiguration"></a>

```java
public ApprunnerServiceObservabilityConfigurationOutputReference getObservabilityConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference">ApprunnerServiceObservabilityConfigurationOutputReference</a>

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `serviceUrl`<sup>Required</sup> <a name="serviceUrl" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.serviceUrl"></a>

```java
public java.lang.String getServiceUrl();
```

- *Type:* java.lang.String

---

##### `sourceConfiguration`<sup>Required</sup> <a name="sourceConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.sourceConfiguration"></a>

```java
public ApprunnerServiceSourceConfigurationOutputReference getSourceConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference">ApprunnerServiceSourceConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `autoScalingConfigurationArnInput`<sup>Optional</sup> <a name="autoScalingConfigurationArnInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.autoScalingConfigurationArnInput"></a>

```java
public java.lang.String getAutoScalingConfigurationArnInput();
```

- *Type:* java.lang.String

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.encryptionConfigurationInput"></a>

```java
public ApprunnerServiceEncryptionConfiguration getEncryptionConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

---

##### `healthCheckConfigurationInput`<sup>Optional</sup> <a name="healthCheckConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.healthCheckConfigurationInput"></a>

```java
public ApprunnerServiceHealthCheckConfiguration getHealthCheckConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceConfigurationInput`<sup>Optional</sup> <a name="instanceConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.instanceConfigurationInput"></a>

```java
public ApprunnerServiceInstanceConfiguration getInstanceConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.networkConfigurationInput"></a>

```java
public ApprunnerServiceNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

---

##### `observabilityConfigurationInput`<sup>Optional</sup> <a name="observabilityConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.observabilityConfigurationInput"></a>

```java
public ApprunnerServiceObservabilityConfiguration getObservabilityConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `sourceConfigurationInput`<sup>Optional</sup> <a name="sourceConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.sourceConfigurationInput"></a>

```java
public ApprunnerServiceSourceConfiguration getSourceConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `autoScalingConfigurationArn`<sup>Required</sup> <a name="autoScalingConfigurationArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.autoScalingConfigurationArn"></a>

```java
public java.lang.String getAutoScalingConfigurationArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apprunnerService.ApprunnerService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerServiceConfig <a name="ApprunnerServiceConfig" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceConfig;

ApprunnerServiceConfig.builder()
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
    .serviceName(java.lang.String)
    .sourceConfiguration(ApprunnerServiceSourceConfiguration)
//  .autoScalingConfigurationArn(java.lang.String)
//  .encryptionConfiguration(ApprunnerServiceEncryptionConfiguration)
//  .healthCheckConfiguration(ApprunnerServiceHealthCheckConfiguration)
//  .id(java.lang.String)
//  .instanceConfiguration(ApprunnerServiceInstanceConfiguration)
//  .networkConfiguration(ApprunnerServiceNetworkConfiguration)
//  .observabilityConfiguration(ApprunnerServiceObservabilityConfiguration)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#service_name ApprunnerService#service_name}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.sourceConfiguration">sourceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a></code> | source_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.autoScalingConfigurationArn">autoScalingConfigurationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#auto_scaling_configuration_arn ApprunnerService#auto_scaling_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.healthCheckConfiguration">healthCheckConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a></code> | health_check_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#id ApprunnerService#id}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.instanceConfiguration">instanceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a></code> | instance_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.observabilityConfiguration">observabilityConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a></code> | observability_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#tags ApprunnerService#tags}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#tags_all ApprunnerService#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#service_name ApprunnerService#service_name}.

---

##### `sourceConfiguration`<sup>Required</sup> <a name="sourceConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.sourceConfiguration"></a>

```java
public ApprunnerServiceSourceConfiguration getSourceConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

source_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#source_configuration ApprunnerService#source_configuration}

---

##### `autoScalingConfigurationArn`<sup>Optional</sup> <a name="autoScalingConfigurationArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.autoScalingConfigurationArn"></a>

```java
public java.lang.String getAutoScalingConfigurationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#auto_scaling_configuration_arn ApprunnerService#auto_scaling_configuration_arn}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.encryptionConfiguration"></a>

```java
public ApprunnerServiceEncryptionConfiguration getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#encryption_configuration ApprunnerService#encryption_configuration}

---

##### `healthCheckConfiguration`<sup>Optional</sup> <a name="healthCheckConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.healthCheckConfiguration"></a>

```java
public ApprunnerServiceHealthCheckConfiguration getHealthCheckConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

health_check_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#health_check_configuration ApprunnerService#health_check_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#id ApprunnerService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceConfiguration`<sup>Optional</sup> <a name="instanceConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.instanceConfiguration"></a>

```java
public ApprunnerServiceInstanceConfiguration getInstanceConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

instance_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#instance_configuration ApprunnerService#instance_configuration}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.networkConfiguration"></a>

```java
public ApprunnerServiceNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#network_configuration ApprunnerService#network_configuration}

---

##### `observabilityConfiguration`<sup>Optional</sup> <a name="observabilityConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.observabilityConfiguration"></a>

```java
public ApprunnerServiceObservabilityConfiguration getObservabilityConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

observability_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#observability_configuration ApprunnerService#observability_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#tags ApprunnerService#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#tags_all ApprunnerService#tags_all}.

---

### ApprunnerServiceEncryptionConfiguration <a name="ApprunnerServiceEncryptionConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceEncryptionConfiguration;

ApprunnerServiceEncryptionConfiguration.builder()
    .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#kms_key ApprunnerService#kms_key}. |

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#kms_key ApprunnerService#kms_key}.

---

### ApprunnerServiceHealthCheckConfiguration <a name="ApprunnerServiceHealthCheckConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceHealthCheckConfiguration;

ApprunnerServiceHealthCheckConfiguration.builder()
//  .healthyThreshold(java.lang.Number)
//  .interval(java.lang.Number)
//  .path(java.lang.String)
//  .protocol(java.lang.String)
//  .timeout(java.lang.Number)
//  .unhealthyThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#healthy_threshold ApprunnerService#healthy_threshold}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#interval ApprunnerService#interval}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#path ApprunnerService#path}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#protocol ApprunnerService#protocol}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#timeout ApprunnerService#timeout}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#unhealthy_threshold ApprunnerService#unhealthy_threshold}. |

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#healthy_threshold ApprunnerService#healthy_threshold}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#interval ApprunnerService#interval}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#path ApprunnerService#path}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#protocol ApprunnerService#protocol}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#timeout ApprunnerService#timeout}.

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#unhealthy_threshold ApprunnerService#unhealthy_threshold}.

---

### ApprunnerServiceInstanceConfiguration <a name="ApprunnerServiceInstanceConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceInstanceConfiguration;

ApprunnerServiceInstanceConfiguration.builder()
//  .cpu(java.lang.String)
//  .instanceRoleArn(java.lang.String)
//  .memory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration.property.cpu">cpu</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#cpu ApprunnerService#cpu}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration.property.instanceRoleArn">instanceRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#instance_role_arn ApprunnerService#instance_role_arn}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration.property.memory">memory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#memory ApprunnerService#memory}. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#cpu ApprunnerService#cpu}.

---

##### `instanceRoleArn`<sup>Optional</sup> <a name="instanceRoleArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration.property.instanceRoleArn"></a>

```java
public java.lang.String getInstanceRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#instance_role_arn ApprunnerService#instance_role_arn}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#memory ApprunnerService#memory}.

---

### ApprunnerServiceNetworkConfiguration <a name="ApprunnerServiceNetworkConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceNetworkConfiguration;

ApprunnerServiceNetworkConfiguration.builder()
//  .egressConfiguration(ApprunnerServiceNetworkConfigurationEgressConfiguration)
//  .ingressConfiguration(ApprunnerServiceNetworkConfigurationIngressConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration.property.egressConfiguration">egressConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a></code> | egress_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration.property.ingressConfiguration">ingressConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a></code> | ingress_configuration block. |

---

##### `egressConfiguration`<sup>Optional</sup> <a name="egressConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration.property.egressConfiguration"></a>

```java
public ApprunnerServiceNetworkConfigurationEgressConfiguration getEgressConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a>

egress_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#egress_configuration ApprunnerService#egress_configuration}

---

##### `ingressConfiguration`<sup>Optional</sup> <a name="ingressConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration.property.ingressConfiguration"></a>

```java
public ApprunnerServiceNetworkConfigurationIngressConfiguration getIngressConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a>

ingress_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#ingress_configuration ApprunnerService#ingress_configuration}

---

### ApprunnerServiceNetworkConfigurationEgressConfiguration <a name="ApprunnerServiceNetworkConfigurationEgressConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceNetworkConfigurationEgressConfiguration;

ApprunnerServiceNetworkConfigurationEgressConfiguration.builder()
//  .egressType(java.lang.String)
//  .vpcConnectorArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.property.egressType">egressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#egress_type ApprunnerService#egress_type}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.property.vpcConnectorArn">vpcConnectorArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#vpc_connector_arn ApprunnerService#vpc_connector_arn}. |

---

##### `egressType`<sup>Optional</sup> <a name="egressType" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.property.egressType"></a>

```java
public java.lang.String getEgressType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#egress_type ApprunnerService#egress_type}.

---

##### `vpcConnectorArn`<sup>Optional</sup> <a name="vpcConnectorArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.property.vpcConnectorArn"></a>

```java
public java.lang.String getVpcConnectorArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#vpc_connector_arn ApprunnerService#vpc_connector_arn}.

---

### ApprunnerServiceNetworkConfigurationIngressConfiguration <a name="ApprunnerServiceNetworkConfigurationIngressConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceNetworkConfigurationIngressConfiguration;

ApprunnerServiceNetworkConfigurationIngressConfiguration.builder()
//  .isPubliclyAccessible(java.lang.Boolean)
//  .isPubliclyAccessible(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration.property.isPubliclyAccessible">isPubliclyAccessible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#is_publicly_accessible ApprunnerService#is_publicly_accessible}. |

---

##### `isPubliclyAccessible`<sup>Optional</sup> <a name="isPubliclyAccessible" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration.property.isPubliclyAccessible"></a>

```java
public java.lang.Object getIsPubliclyAccessible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#is_publicly_accessible ApprunnerService#is_publicly_accessible}.

---

### ApprunnerServiceObservabilityConfiguration <a name="ApprunnerServiceObservabilityConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceObservabilityConfiguration;

ApprunnerServiceObservabilityConfiguration.builder()
    .observabilityEnabled(java.lang.Boolean)
    .observabilityEnabled(IResolvable)
//  .observabilityConfigurationArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration.property.observabilityEnabled">observabilityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#observability_enabled ApprunnerService#observability_enabled}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration.property.observabilityConfigurationArn">observabilityConfigurationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#observability_configuration_arn ApprunnerService#observability_configuration_arn}. |

---

##### `observabilityEnabled`<sup>Required</sup> <a name="observabilityEnabled" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration.property.observabilityEnabled"></a>

```java
public java.lang.Object getObservabilityEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#observability_enabled ApprunnerService#observability_enabled}.

---

##### `observabilityConfigurationArn`<sup>Optional</sup> <a name="observabilityConfigurationArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration.property.observabilityConfigurationArn"></a>

```java
public java.lang.String getObservabilityConfigurationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#observability_configuration_arn ApprunnerService#observability_configuration_arn}.

---

### ApprunnerServiceSourceConfiguration <a name="ApprunnerServiceSourceConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceSourceConfiguration;

ApprunnerServiceSourceConfiguration.builder()
//  .authenticationConfiguration(ApprunnerServiceSourceConfigurationAuthenticationConfiguration)
//  .autoDeploymentsEnabled(java.lang.Boolean)
//  .autoDeploymentsEnabled(IResolvable)
//  .codeRepository(ApprunnerServiceSourceConfigurationCodeRepository)
//  .imageRepository(ApprunnerServiceSourceConfigurationImageRepository)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a></code> | authentication_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration.property.autoDeploymentsEnabled">autoDeploymentsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#auto_deployments_enabled ApprunnerService#auto_deployments_enabled}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration.property.codeRepository">codeRepository</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a></code> | code_repository block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration.property.imageRepository">imageRepository</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a></code> | image_repository block. |

---

##### `authenticationConfiguration`<sup>Optional</sup> <a name="authenticationConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration.property.authenticationConfiguration"></a>

```java
public ApprunnerServiceSourceConfigurationAuthenticationConfiguration getAuthenticationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a>

authentication_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#authentication_configuration ApprunnerService#authentication_configuration}

---

##### `autoDeploymentsEnabled`<sup>Optional</sup> <a name="autoDeploymentsEnabled" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration.property.autoDeploymentsEnabled"></a>

```java
public java.lang.Object getAutoDeploymentsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#auto_deployments_enabled ApprunnerService#auto_deployments_enabled}.

---

##### `codeRepository`<sup>Optional</sup> <a name="codeRepository" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration.property.codeRepository"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepository getCodeRepository();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a>

code_repository block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#code_repository ApprunnerService#code_repository}

---

##### `imageRepository`<sup>Optional</sup> <a name="imageRepository" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration.property.imageRepository"></a>

```java
public ApprunnerServiceSourceConfigurationImageRepository getImageRepository();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a>

image_repository block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#image_repository ApprunnerService#image_repository}

---

### ApprunnerServiceSourceConfigurationAuthenticationConfiguration <a name="ApprunnerServiceSourceConfigurationAuthenticationConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceSourceConfigurationAuthenticationConfiguration;

ApprunnerServiceSourceConfigurationAuthenticationConfiguration.builder()
//  .accessRoleArn(java.lang.String)
//  .connectionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.property.accessRoleArn">accessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#access_role_arn ApprunnerService#access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.property.connectionArn">connectionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#connection_arn ApprunnerService#connection_arn}. |

---

##### `accessRoleArn`<sup>Optional</sup> <a name="accessRoleArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.property.accessRoleArn"></a>

```java
public java.lang.String getAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#access_role_arn ApprunnerService#access_role_arn}.

---

##### `connectionArn`<sup>Optional</sup> <a name="connectionArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.property.connectionArn"></a>

```java
public java.lang.String getConnectionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#connection_arn ApprunnerService#connection_arn}.

---

### ApprunnerServiceSourceConfigurationCodeRepository <a name="ApprunnerServiceSourceConfigurationCodeRepository" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepository;

ApprunnerServiceSourceConfigurationCodeRepository.builder()
    .repositoryUrl(java.lang.String)
    .sourceCodeVersion(ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion)
//  .codeConfiguration(ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#repository_url ApprunnerService#repository_url}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.sourceCodeVersion">sourceCodeVersion</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a></code> | source_code_version block. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.codeConfiguration">codeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a></code> | code_configuration block. |

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#repository_url ApprunnerService#repository_url}.

---

##### `sourceCodeVersion`<sup>Required</sup> <a name="sourceCodeVersion" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.sourceCodeVersion"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion getSourceCodeVersion();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a>

source_code_version block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#source_code_version ApprunnerService#source_code_version}

---

##### `codeConfiguration`<sup>Optional</sup> <a name="codeConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.codeConfiguration"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration getCodeConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a>

code_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#code_configuration ApprunnerService#code_configuration}

---

### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration;

ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.builder()
    .configurationSource(java.lang.String)
//  .codeConfigurationValues(ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.property.configurationSource">configurationSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#configuration_source ApprunnerService#configuration_source}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.property.codeConfigurationValues">codeConfigurationValues</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a></code> | code_configuration_values block. |

---

##### `configurationSource`<sup>Required</sup> <a name="configurationSource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.property.configurationSource"></a>

```java
public java.lang.String getConfigurationSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#configuration_source ApprunnerService#configuration_source}.

---

##### `codeConfigurationValues`<sup>Optional</sup> <a name="codeConfigurationValues" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.property.codeConfigurationValues"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues getCodeConfigurationValues();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a>

code_configuration_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#code_configuration_values ApprunnerService#code_configuration_values}

---

### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues;

ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.builder()
    .runtime(java.lang.String)
//  .buildCommand(java.lang.String)
//  .port(java.lang.String)
//  .runtimeEnvironmentSecrets(java.util.Map<java.lang.String, java.lang.String>)
//  .runtimeEnvironmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .startCommand(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtime">runtime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime ApprunnerService#runtime}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.buildCommand">buildCommand</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#build_command ApprunnerService#build_command}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.port">port</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#port ApprunnerService#port}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtimeEnvironmentSecrets">runtimeEnvironmentSecrets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime_environment_secrets ApprunnerService#runtime_environment_secrets}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtimeEnvironmentVariables">runtimeEnvironmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.startCommand">startCommand</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#start_command ApprunnerService#start_command}. |

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime ApprunnerService#runtime}.

---

##### `buildCommand`<sup>Optional</sup> <a name="buildCommand" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.buildCommand"></a>

```java
public java.lang.String getBuildCommand();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#build_command ApprunnerService#build_command}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#port ApprunnerService#port}.

---

##### `runtimeEnvironmentSecrets`<sup>Optional</sup> <a name="runtimeEnvironmentSecrets" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtimeEnvironmentSecrets"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRuntimeEnvironmentSecrets();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime_environment_secrets ApprunnerService#runtime_environment_secrets}.

---

##### `runtimeEnvironmentVariables`<sup>Optional</sup> <a name="runtimeEnvironmentVariables" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtimeEnvironmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRuntimeEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}.

---

##### `startCommand`<sup>Optional</sup> <a name="startCommand" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.startCommand"></a>

```java
public java.lang.String getStartCommand();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#start_command ApprunnerService#start_command}.

---

### ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion <a name="ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion;

ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.builder()
    .type(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#type ApprunnerService#type}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#value ApprunnerService#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#type ApprunnerService#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#value ApprunnerService#value}.

---

### ApprunnerServiceSourceConfigurationImageRepository <a name="ApprunnerServiceSourceConfigurationImageRepository" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceSourceConfigurationImageRepository;

ApprunnerServiceSourceConfigurationImageRepository.builder()
    .imageIdentifier(java.lang.String)
    .imageRepositoryType(java.lang.String)
//  .imageConfiguration(ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageIdentifier">imageIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#image_identifier ApprunnerService#image_identifier}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageRepositoryType">imageRepositoryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#image_repository_type ApprunnerService#image_repository_type}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageConfiguration">imageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a></code> | image_configuration block. |

---

##### `imageIdentifier`<sup>Required</sup> <a name="imageIdentifier" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageIdentifier"></a>

```java
public java.lang.String getImageIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#image_identifier ApprunnerService#image_identifier}.

---

##### `imageRepositoryType`<sup>Required</sup> <a name="imageRepositoryType" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageRepositoryType"></a>

```java
public java.lang.String getImageRepositoryType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#image_repository_type ApprunnerService#image_repository_type}.

---

##### `imageConfiguration`<sup>Optional</sup> <a name="imageConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageConfiguration"></a>

```java
public ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration getImageConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a>

image_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#image_configuration ApprunnerService#image_configuration}

---

### ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration;

ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.builder()
//  .port(java.lang.String)
//  .runtimeEnvironmentSecrets(java.util.Map<java.lang.String, java.lang.String>)
//  .runtimeEnvironmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .startCommand(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.port">port</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#port ApprunnerService#port}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.runtimeEnvironmentSecrets">runtimeEnvironmentSecrets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime_environment_secrets ApprunnerService#runtime_environment_secrets}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.runtimeEnvironmentVariables">runtimeEnvironmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.startCommand">startCommand</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#start_command ApprunnerService#start_command}. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#port ApprunnerService#port}.

---

##### `runtimeEnvironmentSecrets`<sup>Optional</sup> <a name="runtimeEnvironmentSecrets" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.runtimeEnvironmentSecrets"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRuntimeEnvironmentSecrets();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime_environment_secrets ApprunnerService#runtime_environment_secrets}.

---

##### `runtimeEnvironmentVariables`<sup>Optional</sup> <a name="runtimeEnvironmentVariables" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.runtimeEnvironmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRuntimeEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}.

---

##### `startCommand`<sup>Optional</sup> <a name="startCommand" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.startCommand"></a>

```java
public java.lang.String getStartCommand();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#start_command ApprunnerService#start_command}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerServiceEncryptionConfigurationOutputReference <a name="ApprunnerServiceEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceEncryptionConfigurationOutputReference;

new ApprunnerServiceEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public ApprunnerServiceEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

---


### ApprunnerServiceHealthCheckConfigurationOutputReference <a name="ApprunnerServiceHealthCheckConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceHealthCheckConfigurationOutputReference;

new ApprunnerServiceHealthCheckConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetHealthyThreshold">resetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetUnhealthyThreshold">resetUnhealthyThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHealthyThreshold` <a name="resetHealthyThreshold" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetHealthyThreshold"></a>

```java
public void resetHealthyThreshold()
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetUnhealthyThreshold` <a name="resetUnhealthyThreshold" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetUnhealthyThreshold"></a>

```java
public void resetUnhealthyThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.healthyThresholdInput"></a>

```java
public java.lang.Number getHealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.unhealthyThresholdInput"></a>

```java
public java.lang.Number getUnhealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.internalValue"></a>

```java
public ApprunnerServiceHealthCheckConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

---


### ApprunnerServiceInstanceConfigurationOutputReference <a name="ApprunnerServiceInstanceConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceInstanceConfigurationOutputReference;

new ApprunnerServiceInstanceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetInstanceRoleArn">resetInstanceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetMemory">resetMemory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetCpu"></a>

```java
public void resetCpu()
```

##### `resetInstanceRoleArn` <a name="resetInstanceRoleArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetInstanceRoleArn"></a>

```java
public void resetInstanceRoleArn()
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetMemory"></a>

```java
public void resetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.cpuInput">cpuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.instanceRoleArnInput">instanceRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.cpu">cpu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.instanceRoleArn">instanceRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.memory">memory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.cpuInput"></a>

```java
public java.lang.String getCpuInput();
```

- *Type:* java.lang.String

---

##### `instanceRoleArnInput`<sup>Optional</sup> <a name="instanceRoleArnInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.instanceRoleArnInput"></a>

```java
public java.lang.String getInstanceRoleArnInput();
```

- *Type:* java.lang.String

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.memoryInput"></a>

```java
public java.lang.String getMemoryInput();
```

- *Type:* java.lang.String

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

---

##### `instanceRoleArn`<sup>Required</sup> <a name="instanceRoleArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.instanceRoleArn"></a>

```java
public java.lang.String getInstanceRoleArn();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.internalValue"></a>

```java
public ApprunnerServiceInstanceConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

---


### ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference <a name="ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference;

new ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resetEgressType">resetEgressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resetVpcConnectorArn">resetVpcConnectorArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEgressType` <a name="resetEgressType" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resetEgressType"></a>

```java
public void resetEgressType()
```

##### `resetVpcConnectorArn` <a name="resetVpcConnectorArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resetVpcConnectorArn"></a>

```java
public void resetVpcConnectorArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.egressTypeInput">egressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.vpcConnectorArnInput">vpcConnectorArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.egressType">egressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.vpcConnectorArn">vpcConnectorArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressTypeInput`<sup>Optional</sup> <a name="egressTypeInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.egressTypeInput"></a>

```java
public java.lang.String getEgressTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcConnectorArnInput`<sup>Optional</sup> <a name="vpcConnectorArnInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.vpcConnectorArnInput"></a>

```java
public java.lang.String getVpcConnectorArnInput();
```

- *Type:* java.lang.String

---

##### `egressType`<sup>Required</sup> <a name="egressType" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.egressType"></a>

```java
public java.lang.String getEgressType();
```

- *Type:* java.lang.String

---

##### `vpcConnectorArn`<sup>Required</sup> <a name="vpcConnectorArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.vpcConnectorArn"></a>

```java
public java.lang.String getVpcConnectorArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.internalValue"></a>

```java
public ApprunnerServiceNetworkConfigurationEgressConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a>

---


### ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference <a name="ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference;

new ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resetIsPubliclyAccessible">resetIsPubliclyAccessible</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsPubliclyAccessible` <a name="resetIsPubliclyAccessible" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resetIsPubliclyAccessible"></a>

```java
public void resetIsPubliclyAccessible()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.isPubliclyAccessibleInput">isPubliclyAccessibleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.isPubliclyAccessible">isPubliclyAccessible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isPubliclyAccessibleInput`<sup>Optional</sup> <a name="isPubliclyAccessibleInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.isPubliclyAccessibleInput"></a>

```java
public java.lang.Object getIsPubliclyAccessibleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPubliclyAccessible`<sup>Required</sup> <a name="isPubliclyAccessible" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.isPubliclyAccessible"></a>

```java
public java.lang.Object getIsPubliclyAccessible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.internalValue"></a>

```java
public ApprunnerServiceNetworkConfigurationIngressConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a>

---


### ApprunnerServiceNetworkConfigurationOutputReference <a name="ApprunnerServiceNetworkConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceNetworkConfigurationOutputReference;

new ApprunnerServiceNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putEgressConfiguration">putEgressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putIngressConfiguration">putIngressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetEgressConfiguration">resetEgressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetIngressConfiguration">resetIngressConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEgressConfiguration` <a name="putEgressConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putEgressConfiguration"></a>

```java
public void putEgressConfiguration(ApprunnerServiceNetworkConfigurationEgressConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putEgressConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a>

---

##### `putIngressConfiguration` <a name="putIngressConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putIngressConfiguration"></a>

```java
public void putIngressConfiguration(ApprunnerServiceNetworkConfigurationIngressConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putIngressConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a>

---

##### `resetEgressConfiguration` <a name="resetEgressConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetEgressConfiguration"></a>

```java
public void resetEgressConfiguration()
```

##### `resetIngressConfiguration` <a name="resetIngressConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetIngressConfiguration"></a>

```java
public void resetIngressConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.egressConfiguration">egressConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference">ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ingressConfiguration">ingressConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference">ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.egressConfigurationInput">egressConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ingressConfigurationInput">ingressConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressConfiguration`<sup>Required</sup> <a name="egressConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.egressConfiguration"></a>

```java
public ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference getEgressConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference">ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference</a>

---

##### `ingressConfiguration`<sup>Required</sup> <a name="ingressConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ingressConfiguration"></a>

```java
public ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference getIngressConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference">ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference</a>

---

##### `egressConfigurationInput`<sup>Optional</sup> <a name="egressConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.egressConfigurationInput"></a>

```java
public ApprunnerServiceNetworkConfigurationEgressConfiguration getEgressConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a>

---

##### `ingressConfigurationInput`<sup>Optional</sup> <a name="ingressConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ingressConfigurationInput"></a>

```java
public ApprunnerServiceNetworkConfigurationIngressConfiguration getIngressConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public ApprunnerServiceNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

---


### ApprunnerServiceObservabilityConfigurationOutputReference <a name="ApprunnerServiceObservabilityConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceObservabilityConfigurationOutputReference;

new ApprunnerServiceObservabilityConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resetObservabilityConfigurationArn">resetObservabilityConfigurationArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetObservabilityConfigurationArn` <a name="resetObservabilityConfigurationArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resetObservabilityConfigurationArn"></a>

```java
public void resetObservabilityConfigurationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityConfigurationArnInput">observabilityConfigurationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityEnabledInput">observabilityEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityConfigurationArn">observabilityConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityEnabled">observabilityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `observabilityConfigurationArnInput`<sup>Optional</sup> <a name="observabilityConfigurationArnInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityConfigurationArnInput"></a>

```java
public java.lang.String getObservabilityConfigurationArnInput();
```

- *Type:* java.lang.String

---

##### `observabilityEnabledInput`<sup>Optional</sup> <a name="observabilityEnabledInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityEnabledInput"></a>

```java
public java.lang.Object getObservabilityEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `observabilityConfigurationArn`<sup>Required</sup> <a name="observabilityConfigurationArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityConfigurationArn"></a>

```java
public java.lang.String getObservabilityConfigurationArn();
```

- *Type:* java.lang.String

---

##### `observabilityEnabled`<sup>Required</sup> <a name="observabilityEnabled" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityEnabled"></a>

```java
public java.lang.Object getObservabilityEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.internalValue"></a>

```java
public ApprunnerServiceObservabilityConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

---


### ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference <a name="ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference;

new ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resetAccessRoleArn">resetAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resetConnectionArn">resetConnectionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessRoleArn` <a name="resetAccessRoleArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resetAccessRoleArn"></a>

```java
public void resetAccessRoleArn()
```

##### `resetConnectionArn` <a name="resetConnectionArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resetConnectionArn"></a>

```java
public void resetConnectionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.accessRoleArnInput">accessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.connectionArnInput">connectionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.accessRoleArn">accessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.connectionArn">connectionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessRoleArnInput`<sup>Optional</sup> <a name="accessRoleArnInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.accessRoleArnInput"></a>

```java
public java.lang.String getAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `connectionArnInput`<sup>Optional</sup> <a name="connectionArnInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.connectionArnInput"></a>

```java
public java.lang.String getConnectionArnInput();
```

- *Type:* java.lang.String

---

##### `accessRoleArn`<sup>Required</sup> <a name="accessRoleArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.accessRoleArn"></a>

```java
public java.lang.String getAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `connectionArn`<sup>Required</sup> <a name="connectionArn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.connectionArn"></a>

```java
public java.lang.String getConnectionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.internalValue"></a>

```java
public ApprunnerServiceSourceConfigurationAuthenticationConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference;

new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetBuildCommand">resetBuildCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntimeEnvironmentSecrets">resetRuntimeEnvironmentSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntimeEnvironmentVariables">resetRuntimeEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetStartCommand">resetStartCommand</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBuildCommand` <a name="resetBuildCommand" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetBuildCommand"></a>

```java
public void resetBuildCommand()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetRuntimeEnvironmentSecrets` <a name="resetRuntimeEnvironmentSecrets" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntimeEnvironmentSecrets"></a>

```java
public void resetRuntimeEnvironmentSecrets()
```

##### `resetRuntimeEnvironmentVariables` <a name="resetRuntimeEnvironmentVariables" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntimeEnvironmentVariables"></a>

```java
public void resetRuntimeEnvironmentVariables()
```

##### `resetStartCommand` <a name="resetStartCommand" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetStartCommand"></a>

```java
public void resetStartCommand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.buildCommandInput">buildCommandInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.portInput">portInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentSecretsInput">runtimeEnvironmentSecretsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentVariablesInput">runtimeEnvironmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.startCommandInput">startCommandInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.buildCommand">buildCommand</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentSecrets">runtimeEnvironmentSecrets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentVariables">runtimeEnvironmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.startCommand">startCommand</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buildCommandInput`<sup>Optional</sup> <a name="buildCommandInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.buildCommandInput"></a>

```java
public java.lang.String getBuildCommandInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.portInput"></a>

```java
public java.lang.String getPortInput();
```

- *Type:* java.lang.String

---

##### `runtimeEnvironmentSecretsInput`<sup>Optional</sup> <a name="runtimeEnvironmentSecretsInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentSecretsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRuntimeEnvironmentSecretsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `runtimeEnvironmentVariablesInput`<sup>Optional</sup> <a name="runtimeEnvironmentVariablesInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRuntimeEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `startCommandInput`<sup>Optional</sup> <a name="startCommandInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.startCommandInput"></a>

```java
public java.lang.String getStartCommandInput();
```

- *Type:* java.lang.String

---

##### `buildCommand`<sup>Required</sup> <a name="buildCommand" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.buildCommand"></a>

```java
public java.lang.String getBuildCommand();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `runtimeEnvironmentSecrets`<sup>Required</sup> <a name="runtimeEnvironmentSecrets" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentSecrets"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRuntimeEnvironmentSecrets();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `runtimeEnvironmentVariables`<sup>Required</sup> <a name="runtimeEnvironmentVariables" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRuntimeEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `startCommand`<sup>Required</sup> <a name="startCommand" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.startCommand"></a>

```java
public java.lang.String getStartCommand();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.internalValue"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference;

new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.putCodeConfigurationValues">putCodeConfigurationValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resetCodeConfigurationValues">resetCodeConfigurationValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeConfigurationValues` <a name="putCodeConfigurationValues" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.putCodeConfigurationValues"></a>

```java
public void putCodeConfigurationValues(ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.putCodeConfigurationValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a>

---

##### `resetCodeConfigurationValues` <a name="resetCodeConfigurationValues" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resetCodeConfigurationValues"></a>

```java
public void resetCodeConfigurationValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.codeConfigurationValues">codeConfigurationValues</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.codeConfigurationValuesInput">codeConfigurationValuesInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.configurationSourceInput">configurationSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.configurationSource">configurationSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeConfigurationValues`<sup>Required</sup> <a name="codeConfigurationValues" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.codeConfigurationValues"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference getCodeConfigurationValues();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference</a>

---

##### `codeConfigurationValuesInput`<sup>Optional</sup> <a name="codeConfigurationValuesInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.codeConfigurationValuesInput"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues getCodeConfigurationValuesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a>

---

##### `configurationSourceInput`<sup>Optional</sup> <a name="configurationSourceInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.configurationSourceInput"></a>

```java
public java.lang.String getConfigurationSourceInput();
```

- *Type:* java.lang.String

---

##### `configurationSource`<sup>Required</sup> <a name="configurationSource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.configurationSource"></a>

```java
public java.lang.String getConfigurationSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.internalValue"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference;

new ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putCodeConfiguration">putCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putSourceCodeVersion">putSourceCodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetCodeConfiguration">resetCodeConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeConfiguration` <a name="putCodeConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putCodeConfiguration"></a>

```java
public void putCodeConfiguration(ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putCodeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a>

---

##### `putSourceCodeVersion` <a name="putSourceCodeVersion" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putSourceCodeVersion"></a>

```java
public void putSourceCodeVersion(ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putSourceCodeVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a>

---

##### `resetCodeConfiguration` <a name="resetCodeConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetCodeConfiguration"></a>

```java
public void resetCodeConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.codeConfiguration">codeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceCodeVersion">sourceCodeVersion</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.codeConfigurationInput">codeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.repositoryUrlInput">repositoryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceCodeVersionInput">sourceCodeVersionInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeConfiguration`<sup>Required</sup> <a name="codeConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.codeConfiguration"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference getCodeConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference</a>

---

##### `sourceCodeVersion`<sup>Required</sup> <a name="sourceCodeVersion" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceCodeVersion"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference getSourceCodeVersion();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference</a>

---

##### `codeConfigurationInput`<sup>Optional</sup> <a name="codeConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.codeConfigurationInput"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration getCodeConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a>

---

##### `repositoryUrlInput`<sup>Optional</sup> <a name="repositoryUrlInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.repositoryUrlInput"></a>

```java
public java.lang.String getRepositoryUrlInput();
```

- *Type:* java.lang.String

---

##### `sourceCodeVersionInput`<sup>Optional</sup> <a name="sourceCodeVersionInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceCodeVersionInput"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion getSourceCodeVersionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a>

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.internalValue"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference;

new ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.internalValue"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a>

---


### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference;

new ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetRuntimeEnvironmentSecrets">resetRuntimeEnvironmentSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetRuntimeEnvironmentVariables">resetRuntimeEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetStartCommand">resetStartCommand</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetRuntimeEnvironmentSecrets` <a name="resetRuntimeEnvironmentSecrets" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetRuntimeEnvironmentSecrets"></a>

```java
public void resetRuntimeEnvironmentSecrets()
```

##### `resetRuntimeEnvironmentVariables` <a name="resetRuntimeEnvironmentVariables" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetRuntimeEnvironmentVariables"></a>

```java
public void resetRuntimeEnvironmentVariables()
```

##### `resetStartCommand` <a name="resetStartCommand" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetStartCommand"></a>

```java
public void resetStartCommand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.portInput">portInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentSecretsInput">runtimeEnvironmentSecretsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentVariablesInput">runtimeEnvironmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.startCommandInput">startCommandInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentSecrets">runtimeEnvironmentSecrets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentVariables">runtimeEnvironmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.startCommand">startCommand</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.portInput"></a>

```java
public java.lang.String getPortInput();
```

- *Type:* java.lang.String

---

##### `runtimeEnvironmentSecretsInput`<sup>Optional</sup> <a name="runtimeEnvironmentSecretsInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentSecretsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRuntimeEnvironmentSecretsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `runtimeEnvironmentVariablesInput`<sup>Optional</sup> <a name="runtimeEnvironmentVariablesInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRuntimeEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `startCommandInput`<sup>Optional</sup> <a name="startCommandInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.startCommandInput"></a>

```java
public java.lang.String getStartCommandInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `runtimeEnvironmentSecrets`<sup>Required</sup> <a name="runtimeEnvironmentSecrets" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentSecrets"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRuntimeEnvironmentSecrets();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `runtimeEnvironmentVariables`<sup>Required</sup> <a name="runtimeEnvironmentVariables" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRuntimeEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `startCommand`<sup>Required</sup> <a name="startCommand" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.startCommand"></a>

```java
public java.lang.String getStartCommand();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.internalValue"></a>

```java
public ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a>

---


### ApprunnerServiceSourceConfigurationImageRepositoryOutputReference <a name="ApprunnerServiceSourceConfigurationImageRepositoryOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference;

new ApprunnerServiceSourceConfigurationImageRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.putImageConfiguration">putImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageConfiguration">resetImageConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putImageConfiguration` <a name="putImageConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.putImageConfiguration"></a>

```java
public void putImageConfiguration(ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.putImageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a>

---

##### `resetImageConfiguration` <a name="resetImageConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageConfiguration"></a>

```java
public void resetImageConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageConfiguration">imageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageConfigurationInput">imageConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageIdentifierInput">imageIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageRepositoryTypeInput">imageRepositoryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageIdentifier">imageIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageRepositoryType">imageRepositoryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageConfiguration`<sup>Required</sup> <a name="imageConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageConfiguration"></a>

```java
public ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference getImageConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference</a>

---

##### `imageConfigurationInput`<sup>Optional</sup> <a name="imageConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageConfigurationInput"></a>

```java
public ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration getImageConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a>

---

##### `imageIdentifierInput`<sup>Optional</sup> <a name="imageIdentifierInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageIdentifierInput"></a>

```java
public java.lang.String getImageIdentifierInput();
```

- *Type:* java.lang.String

---

##### `imageRepositoryTypeInput`<sup>Optional</sup> <a name="imageRepositoryTypeInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageRepositoryTypeInput"></a>

```java
public java.lang.String getImageRepositoryTypeInput();
```

- *Type:* java.lang.String

---

##### `imageIdentifier`<sup>Required</sup> <a name="imageIdentifier" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageIdentifier"></a>

```java
public java.lang.String getImageIdentifier();
```

- *Type:* java.lang.String

---

##### `imageRepositoryType`<sup>Required</sup> <a name="imageRepositoryType" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageRepositoryType"></a>

```java
public java.lang.String getImageRepositoryType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.internalValue"></a>

```java
public ApprunnerServiceSourceConfigurationImageRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a>

---


### ApprunnerServiceSourceConfigurationOutputReference <a name="ApprunnerServiceSourceConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_service.ApprunnerServiceSourceConfigurationOutputReference;

new ApprunnerServiceSourceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putAuthenticationConfiguration">putAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putCodeRepository">putCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putImageRepository">putImageRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetAuthenticationConfiguration">resetAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetAutoDeploymentsEnabled">resetAutoDeploymentsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetCodeRepository">resetCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetImageRepository">resetImageRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthenticationConfiguration` <a name="putAuthenticationConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putAuthenticationConfiguration"></a>

```java
public void putAuthenticationConfiguration(ApprunnerServiceSourceConfigurationAuthenticationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putAuthenticationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a>

---

##### `putCodeRepository` <a name="putCodeRepository" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putCodeRepository"></a>

```java
public void putCodeRepository(ApprunnerServiceSourceConfigurationCodeRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putCodeRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a>

---

##### `putImageRepository` <a name="putImageRepository" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putImageRepository"></a>

```java
public void putImageRepository(ApprunnerServiceSourceConfigurationImageRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putImageRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a>

---

##### `resetAuthenticationConfiguration` <a name="resetAuthenticationConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetAuthenticationConfiguration"></a>

```java
public void resetAuthenticationConfiguration()
```

##### `resetAutoDeploymentsEnabled` <a name="resetAutoDeploymentsEnabled" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetAutoDeploymentsEnabled"></a>

```java
public void resetAutoDeploymentsEnabled()
```

##### `resetCodeRepository` <a name="resetCodeRepository" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetCodeRepository"></a>

```java
public void resetCodeRepository()
```

##### `resetImageRepository` <a name="resetImageRepository" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetImageRepository"></a>

```java
public void resetImageRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference">ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.codeRepository">codeRepository</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.imageRepository">imageRepository</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference">ApprunnerServiceSourceConfigurationImageRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.authenticationConfigurationInput">authenticationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.autoDeploymentsEnabledInput">autoDeploymentsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.codeRepositoryInput">codeRepositoryInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.imageRepositoryInput">imageRepositoryInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.autoDeploymentsEnabled">autoDeploymentsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationConfiguration`<sup>Required</sup> <a name="authenticationConfiguration" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.authenticationConfiguration"></a>

```java
public ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference getAuthenticationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference">ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference</a>

---

##### `codeRepository`<sup>Required</sup> <a name="codeRepository" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.codeRepository"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference getCodeRepository();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference</a>

---

##### `imageRepository`<sup>Required</sup> <a name="imageRepository" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.imageRepository"></a>

```java
public ApprunnerServiceSourceConfigurationImageRepositoryOutputReference getImageRepository();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference">ApprunnerServiceSourceConfigurationImageRepositoryOutputReference</a>

---

##### `authenticationConfigurationInput`<sup>Optional</sup> <a name="authenticationConfigurationInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.authenticationConfigurationInput"></a>

```java
public ApprunnerServiceSourceConfigurationAuthenticationConfiguration getAuthenticationConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a>

---

##### `autoDeploymentsEnabledInput`<sup>Optional</sup> <a name="autoDeploymentsEnabledInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.autoDeploymentsEnabledInput"></a>

```java
public java.lang.Object getAutoDeploymentsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `codeRepositoryInput`<sup>Optional</sup> <a name="codeRepositoryInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.codeRepositoryInput"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepository getCodeRepositoryInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a>

---

##### `imageRepositoryInput`<sup>Optional</sup> <a name="imageRepositoryInput" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.imageRepositoryInput"></a>

```java
public ApprunnerServiceSourceConfigurationImageRepository getImageRepositoryInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a>

---

##### `autoDeploymentsEnabled`<sup>Required</sup> <a name="autoDeploymentsEnabled" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.autoDeploymentsEnabled"></a>

```java
public java.lang.Object getAutoDeploymentsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.internalValue"></a>

```java
public ApprunnerServiceSourceConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

---



