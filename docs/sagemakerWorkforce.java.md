# `sagemakerWorkforce` Submodule <a name="`sagemakerWorkforce` Submodule" id="@cdktf/provider-aws.sagemakerWorkforce"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerWorkforce <a name="SagemakerWorkforce" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce aws_sagemaker_workforce}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_workforce.SagemakerWorkforce;

SagemakerWorkforce.Builder.create(Construct scope, java.lang.String id)
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
    .workforceName(java.lang.String)
//  .cognitoConfig(SagemakerWorkforceCognitoConfig)
//  .id(java.lang.String)
//  .oidcConfig(SagemakerWorkforceOidcConfig)
//  .sourceIpConfig(SagemakerWorkforceSourceIpConfig)
//  .workforceVpcConfig(SagemakerWorkforceWorkforceVpcConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.workforceName">workforceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#workforce_name SagemakerWorkforce#workforce_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.cognitoConfig">cognitoConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a></code> | cognito_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#id SagemakerWorkforce#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.oidcConfig">oidcConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a></code> | oidc_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.sourceIpConfig">sourceIpConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a></code> | source_ip_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.workforceVpcConfig">workforceVpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a></code> | workforce_vpc_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `workforceName`<sup>Required</sup> <a name="workforceName" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.workforceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#workforce_name SagemakerWorkforce#workforce_name}.

---

##### `cognitoConfig`<sup>Optional</sup> <a name="cognitoConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.cognitoConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a>

cognito_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#cognito_config SagemakerWorkforce#cognito_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#id SagemakerWorkforce#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidcConfig`<sup>Optional</sup> <a name="oidcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.oidcConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a>

oidc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#oidc_config SagemakerWorkforce#oidc_config}

---

##### `sourceIpConfig`<sup>Optional</sup> <a name="sourceIpConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.sourceIpConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a>

source_ip_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#source_ip_config SagemakerWorkforce#source_ip_config}

---

##### `workforceVpcConfig`<sup>Optional</sup> <a name="workforceVpcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.workforceVpcConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a>

workforce_vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#workforce_vpc_config SagemakerWorkforce#workforce_vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putCognitoConfig">putCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putOidcConfig">putOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putSourceIpConfig">putSourceIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putWorkforceVpcConfig">putWorkforceVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetCognitoConfig">resetCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetOidcConfig">resetOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetSourceIpConfig">resetSourceIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetWorkforceVpcConfig">resetWorkforceVpcConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCognitoConfig` <a name="putCognitoConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putCognitoConfig"></a>

```java
public void putCognitoConfig(SagemakerWorkforceCognitoConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putCognitoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a>

---

##### `putOidcConfig` <a name="putOidcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putOidcConfig"></a>

```java
public void putOidcConfig(SagemakerWorkforceOidcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putOidcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a>

---

##### `putSourceIpConfig` <a name="putSourceIpConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putSourceIpConfig"></a>

```java
public void putSourceIpConfig(SagemakerWorkforceSourceIpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putSourceIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a>

---

##### `putWorkforceVpcConfig` <a name="putWorkforceVpcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putWorkforceVpcConfig"></a>

```java
public void putWorkforceVpcConfig(SagemakerWorkforceWorkforceVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putWorkforceVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a>

---

##### `resetCognitoConfig` <a name="resetCognitoConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetCognitoConfig"></a>

```java
public void resetCognitoConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetId"></a>

```java
public void resetId()
```

##### `resetOidcConfig` <a name="resetOidcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetOidcConfig"></a>

```java
public void resetOidcConfig()
```

##### `resetSourceIpConfig` <a name="resetSourceIpConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetSourceIpConfig"></a>

```java
public void resetSourceIpConfig()
```

##### `resetWorkforceVpcConfig` <a name="resetWorkforceVpcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetWorkforceVpcConfig"></a>

```java
public void resetWorkforceVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_workforce.SagemakerWorkforce;

SagemakerWorkforce.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_workforce.SagemakerWorkforce;

SagemakerWorkforce.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_workforce.SagemakerWorkforce;

SagemakerWorkforce.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.cognitoConfig">cognitoConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference">SagemakerWorkforceCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.oidcConfig">oidcConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference">SagemakerWorkforceOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.sourceIpConfig">sourceIpConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference">SagemakerWorkforceSourceIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.subdomain">subdomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceVpcConfig">workforceVpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference">SagemakerWorkforceWorkforceVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.cognitoConfigInput">cognitoConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.oidcConfigInput">oidcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.sourceIpConfigInput">sourceIpConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceNameInput">workforceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceVpcConfigInput">workforceVpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceName">workforceName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `cognitoConfig`<sup>Required</sup> <a name="cognitoConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.cognitoConfig"></a>

```java
public SagemakerWorkforceCognitoConfigOutputReference getCognitoConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference">SagemakerWorkforceCognitoConfigOutputReference</a>

---

##### `oidcConfig`<sup>Required</sup> <a name="oidcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.oidcConfig"></a>

```java
public SagemakerWorkforceOidcConfigOutputReference getOidcConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference">SagemakerWorkforceOidcConfigOutputReference</a>

---

##### `sourceIpConfig`<sup>Required</sup> <a name="sourceIpConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.sourceIpConfig"></a>

```java
public SagemakerWorkforceSourceIpConfigOutputReference getSourceIpConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference">SagemakerWorkforceSourceIpConfigOutputReference</a>

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.subdomain"></a>

```java
public java.lang.String getSubdomain();
```

- *Type:* java.lang.String

---

##### `workforceVpcConfig`<sup>Required</sup> <a name="workforceVpcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceVpcConfig"></a>

```java
public SagemakerWorkforceWorkforceVpcConfigOutputReference getWorkforceVpcConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference">SagemakerWorkforceWorkforceVpcConfigOutputReference</a>

---

##### `cognitoConfigInput`<sup>Optional</sup> <a name="cognitoConfigInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.cognitoConfigInput"></a>

```java
public SagemakerWorkforceCognitoConfig getCognitoConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `oidcConfigInput`<sup>Optional</sup> <a name="oidcConfigInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.oidcConfigInput"></a>

```java
public SagemakerWorkforceOidcConfig getOidcConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a>

---

##### `sourceIpConfigInput`<sup>Optional</sup> <a name="sourceIpConfigInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.sourceIpConfigInput"></a>

```java
public SagemakerWorkforceSourceIpConfig getSourceIpConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a>

---

##### `workforceNameInput`<sup>Optional</sup> <a name="workforceNameInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceNameInput"></a>

```java
public java.lang.String getWorkforceNameInput();
```

- *Type:* java.lang.String

---

##### `workforceVpcConfigInput`<sup>Optional</sup> <a name="workforceVpcConfigInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceVpcConfigInput"></a>

```java
public SagemakerWorkforceWorkforceVpcConfig getWorkforceVpcConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `workforceName`<sup>Required</sup> <a name="workforceName" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceName"></a>

```java
public java.lang.String getWorkforceName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerWorkforceCognitoConfig <a name="SagemakerWorkforceCognitoConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_workforce.SagemakerWorkforceCognitoConfig;

SagemakerWorkforceCognitoConfig.builder()
    .clientId(java.lang.String)
    .userPool(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_id SagemakerWorkforce#client_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig.property.userPool">userPool</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#user_pool SagemakerWorkforce#user_pool}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_id SagemakerWorkforce#client_id}.

---

##### `userPool`<sup>Required</sup> <a name="userPool" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig.property.userPool"></a>

```java
public java.lang.String getUserPool();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#user_pool SagemakerWorkforce#user_pool}.

---

### SagemakerWorkforceConfig <a name="SagemakerWorkforceConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_workforce.SagemakerWorkforceConfig;

SagemakerWorkforceConfig.builder()
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
    .workforceName(java.lang.String)
//  .cognitoConfig(SagemakerWorkforceCognitoConfig)
//  .id(java.lang.String)
//  .oidcConfig(SagemakerWorkforceOidcConfig)
//  .sourceIpConfig(SagemakerWorkforceSourceIpConfig)
//  .workforceVpcConfig(SagemakerWorkforceWorkforceVpcConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.workforceName">workforceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#workforce_name SagemakerWorkforce#workforce_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.cognitoConfig">cognitoConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a></code> | cognito_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#id SagemakerWorkforce#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.oidcConfig">oidcConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a></code> | oidc_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.sourceIpConfig">sourceIpConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a></code> | source_ip_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.workforceVpcConfig">workforceVpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a></code> | workforce_vpc_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `workforceName`<sup>Required</sup> <a name="workforceName" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.workforceName"></a>

```java
public java.lang.String getWorkforceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#workforce_name SagemakerWorkforce#workforce_name}.

---

##### `cognitoConfig`<sup>Optional</sup> <a name="cognitoConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.cognitoConfig"></a>

```java
public SagemakerWorkforceCognitoConfig getCognitoConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a>

cognito_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#cognito_config SagemakerWorkforce#cognito_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#id SagemakerWorkforce#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidcConfig`<sup>Optional</sup> <a name="oidcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.oidcConfig"></a>

```java
public SagemakerWorkforceOidcConfig getOidcConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a>

oidc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#oidc_config SagemakerWorkforce#oidc_config}

---

##### `sourceIpConfig`<sup>Optional</sup> <a name="sourceIpConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.sourceIpConfig"></a>

```java
public SagemakerWorkforceSourceIpConfig getSourceIpConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a>

source_ip_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#source_ip_config SagemakerWorkforce#source_ip_config}

---

##### `workforceVpcConfig`<sup>Optional</sup> <a name="workforceVpcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.workforceVpcConfig"></a>

```java
public SagemakerWorkforceWorkforceVpcConfig getWorkforceVpcConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a>

workforce_vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#workforce_vpc_config SagemakerWorkforce#workforce_vpc_config}

---

### SagemakerWorkforceOidcConfig <a name="SagemakerWorkforceOidcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_workforce.SagemakerWorkforceOidcConfig;

SagemakerWorkforceOidcConfig.builder()
    .authorizationEndpoint(java.lang.String)
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
    .issuer(java.lang.String)
    .jwksUri(java.lang.String)
    .logoutEndpoint(java.lang.String)
    .tokenEndpoint(java.lang.String)
    .userInfoEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#authorization_endpoint SagemakerWorkforce#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_id SagemakerWorkforce#client_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_secret SagemakerWorkforce#client_secret}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#issuer SagemakerWorkforce#issuer}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.jwksUri">jwksUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#jwks_uri SagemakerWorkforce#jwks_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.logoutEndpoint">logoutEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#logout_endpoint SagemakerWorkforce#logout_endpoint}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#token_endpoint SagemakerWorkforce#token_endpoint}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#user_info_endpoint SagemakerWorkforce#user_info_endpoint}. |

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#authorization_endpoint SagemakerWorkforce#authorization_endpoint}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_id SagemakerWorkforce#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_secret SagemakerWorkforce#client_secret}.

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#issuer SagemakerWorkforce#issuer}.

---

##### `jwksUri`<sup>Required</sup> <a name="jwksUri" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.jwksUri"></a>

```java
public java.lang.String getJwksUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#jwks_uri SagemakerWorkforce#jwks_uri}.

---

##### `logoutEndpoint`<sup>Required</sup> <a name="logoutEndpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.logoutEndpoint"></a>

```java
public java.lang.String getLogoutEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#logout_endpoint SagemakerWorkforce#logout_endpoint}.

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#token_endpoint SagemakerWorkforce#token_endpoint}.

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.userInfoEndpoint"></a>

```java
public java.lang.String getUserInfoEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#user_info_endpoint SagemakerWorkforce#user_info_endpoint}.

---

### SagemakerWorkforceSourceIpConfig <a name="SagemakerWorkforceSourceIpConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_workforce.SagemakerWorkforceSourceIpConfig;

SagemakerWorkforceSourceIpConfig.builder()
    .cidrs(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig.property.cidrs">cidrs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#cidrs SagemakerWorkforce#cidrs}. |

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig.property.cidrs"></a>

```java
public java.util.List<java.lang.String> getCidrs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#cidrs SagemakerWorkforce#cidrs}.

---

### SagemakerWorkforceWorkforceVpcConfig <a name="SagemakerWorkforceWorkforceVpcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_workforce.SagemakerWorkforceWorkforceVpcConfig;

SagemakerWorkforceWorkforceVpcConfig.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnets(java.util.List<java.lang.String>)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#security_group_ids SagemakerWorkforce#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#subnets SagemakerWorkforce#subnets}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#vpc_id SagemakerWorkforce#vpc_id}. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#security_group_ids SagemakerWorkforce#security_group_ids}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#subnets SagemakerWorkforce#subnets}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#vpc_id SagemakerWorkforce#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerWorkforceCognitoConfigOutputReference <a name="SagemakerWorkforceCognitoConfigOutputReference" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_workforce.SagemakerWorkforceCognitoConfigOutputReference;

new SagemakerWorkforceCognitoConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.userPoolInput">userPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.userPool">userPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `userPoolInput`<sup>Optional</sup> <a name="userPoolInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.userPoolInput"></a>

```java
public java.lang.String getUserPoolInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `userPool`<sup>Required</sup> <a name="userPool" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.userPool"></a>

```java
public java.lang.String getUserPool();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.internalValue"></a>

```java
public SagemakerWorkforceCognitoConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a>

---


### SagemakerWorkforceOidcConfigOutputReference <a name="SagemakerWorkforceOidcConfigOutputReference" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_workforce.SagemakerWorkforceOidcConfigOutputReference;

new SagemakerWorkforceOidcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.jwksUriInput">jwksUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.logoutEndpointInput">logoutEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.userInfoEndpointInput">userInfoEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.jwksUri">jwksUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.logoutEndpoint">logoutEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.authorizationEndpointInput"></a>

```java
public java.lang.String getAuthorizationEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `jwksUriInput`<sup>Optional</sup> <a name="jwksUriInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.jwksUriInput"></a>

```java
public java.lang.String getJwksUriInput();
```

- *Type:* java.lang.String

---

##### `logoutEndpointInput`<sup>Optional</sup> <a name="logoutEndpointInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.logoutEndpointInput"></a>

```java
public java.lang.String getLogoutEndpointInput();
```

- *Type:* java.lang.String

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.tokenEndpointInput"></a>

```java
public java.lang.String getTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `userInfoEndpointInput`<sup>Optional</sup> <a name="userInfoEndpointInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.userInfoEndpointInput"></a>

```java
public java.lang.String getUserInfoEndpointInput();
```

- *Type:* java.lang.String

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `jwksUri`<sup>Required</sup> <a name="jwksUri" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.jwksUri"></a>

```java
public java.lang.String getJwksUri();
```

- *Type:* java.lang.String

---

##### `logoutEndpoint`<sup>Required</sup> <a name="logoutEndpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.logoutEndpoint"></a>

```java
public java.lang.String getLogoutEndpoint();
```

- *Type:* java.lang.String

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.userInfoEndpoint"></a>

```java
public java.lang.String getUserInfoEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.internalValue"></a>

```java
public SagemakerWorkforceOidcConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a>

---


### SagemakerWorkforceSourceIpConfigOutputReference <a name="SagemakerWorkforceSourceIpConfigOutputReference" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_workforce.SagemakerWorkforceSourceIpConfigOutputReference;

new SagemakerWorkforceSourceIpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.cidrsInput">cidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.cidrs">cidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrsInput`<sup>Optional</sup> <a name="cidrsInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.cidrsInput"></a>

```java
public java.util.List<java.lang.String> getCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.cidrs"></a>

```java
public java.util.List<java.lang.String> getCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.internalValue"></a>

```java
public SagemakerWorkforceSourceIpConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a>

---


### SagemakerWorkforceWorkforceVpcConfigOutputReference <a name="SagemakerWorkforceWorkforceVpcConfigOutputReference" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_workforce.SagemakerWorkforceWorkforceVpcConfigOutputReference;

new SagemakerWorkforceWorkforceVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetVpcId"></a>

```java
public void resetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.internalValue"></a>

```java
public SagemakerWorkforceWorkforceVpcConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a>

---



