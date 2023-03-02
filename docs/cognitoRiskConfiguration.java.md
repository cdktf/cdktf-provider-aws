# `cognitoRiskConfiguration` Submodule <a name="`cognitoRiskConfiguration` Submodule" id="@cdktf/provider-aws.cognitoRiskConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoRiskConfiguration <a name="CognitoRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration aws_cognito_risk_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfiguration;

CognitoRiskConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .userPoolId(java.lang.String)
//  .accountTakeoverRiskConfiguration(CognitoRiskConfigurationAccountTakeoverRiskConfiguration)
//  .clientId(java.lang.String)
//  .compromisedCredentialsRiskConfiguration(CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration)
//  .id(java.lang.String)
//  .riskExceptionConfiguration(CognitoRiskConfigurationRiskExceptionConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#user_pool_id CognitoRiskConfiguration#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.accountTakeoverRiskConfiguration">accountTakeoverRiskConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a></code> | account_takeover_risk_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#client_id CognitoRiskConfiguration#client_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.compromisedCredentialsRiskConfiguration">compromisedCredentialsRiskConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a></code> | compromised_credentials_risk_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#id CognitoRiskConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.riskExceptionConfiguration">riskExceptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a></code> | risk_exception_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.userPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#user_pool_id CognitoRiskConfiguration#user_pool_id}.

---

##### `accountTakeoverRiskConfiguration`<sup>Optional</sup> <a name="accountTakeoverRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.accountTakeoverRiskConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a>

account_takeover_risk_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#account_takeover_risk_configuration CognitoRiskConfiguration#account_takeover_risk_configuration}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#client_id CognitoRiskConfiguration#client_id}.

---

##### `compromisedCredentialsRiskConfiguration`<sup>Optional</sup> <a name="compromisedCredentialsRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.compromisedCredentialsRiskConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a>

compromised_credentials_risk_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#compromised_credentials_risk_configuration CognitoRiskConfiguration#compromised_credentials_risk_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#id CognitoRiskConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `riskExceptionConfiguration`<sup>Optional</sup> <a name="riskExceptionConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.riskExceptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a>

risk_exception_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#risk_exception_configuration CognitoRiskConfiguration#risk_exception_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putAccountTakeoverRiskConfiguration">putAccountTakeoverRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putCompromisedCredentialsRiskConfiguration">putCompromisedCredentialsRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putRiskExceptionConfiguration">putRiskExceptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetAccountTakeoverRiskConfiguration">resetAccountTakeoverRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetCompromisedCredentialsRiskConfiguration">resetCompromisedCredentialsRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetRiskExceptionConfiguration">resetRiskExceptionConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAccountTakeoverRiskConfiguration` <a name="putAccountTakeoverRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putAccountTakeoverRiskConfiguration"></a>

```java
public void putAccountTakeoverRiskConfiguration(CognitoRiskConfigurationAccountTakeoverRiskConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putAccountTakeoverRiskConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a>

---

##### `putCompromisedCredentialsRiskConfiguration` <a name="putCompromisedCredentialsRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putCompromisedCredentialsRiskConfiguration"></a>

```java
public void putCompromisedCredentialsRiskConfiguration(CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putCompromisedCredentialsRiskConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a>

---

##### `putRiskExceptionConfiguration` <a name="putRiskExceptionConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putRiskExceptionConfiguration"></a>

```java
public void putRiskExceptionConfiguration(CognitoRiskConfigurationRiskExceptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putRiskExceptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a>

---

##### `resetAccountTakeoverRiskConfiguration` <a name="resetAccountTakeoverRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetAccountTakeoverRiskConfiguration"></a>

```java
public void resetAccountTakeoverRiskConfiguration()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetCompromisedCredentialsRiskConfiguration` <a name="resetCompromisedCredentialsRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetCompromisedCredentialsRiskConfiguration"></a>

```java
public void resetCompromisedCredentialsRiskConfiguration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetRiskExceptionConfiguration` <a name="resetRiskExceptionConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetRiskExceptionConfiguration"></a>

```java
public void resetRiskExceptionConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfiguration;

CognitoRiskConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfiguration;

CognitoRiskConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfiguration;

CognitoRiskConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.accountTakeoverRiskConfiguration">accountTakeoverRiskConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.compromisedCredentialsRiskConfiguration">compromisedCredentialsRiskConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.riskExceptionConfiguration">riskExceptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference">CognitoRiskConfigurationRiskExceptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.accountTakeoverRiskConfigurationInput">accountTakeoverRiskConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.compromisedCredentialsRiskConfigurationInput">compromisedCredentialsRiskConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.riskExceptionConfigurationInput">riskExceptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountTakeoverRiskConfiguration`<sup>Required</sup> <a name="accountTakeoverRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.accountTakeoverRiskConfiguration"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference getAccountTakeoverRiskConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference</a>

---

##### `compromisedCredentialsRiskConfiguration`<sup>Required</sup> <a name="compromisedCredentialsRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.compromisedCredentialsRiskConfiguration"></a>

```java
public CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference getCompromisedCredentialsRiskConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference</a>

---

##### `riskExceptionConfiguration`<sup>Required</sup> <a name="riskExceptionConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.riskExceptionConfiguration"></a>

```java
public CognitoRiskConfigurationRiskExceptionConfigurationOutputReference getRiskExceptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference">CognitoRiskConfigurationRiskExceptionConfigurationOutputReference</a>

---

##### `accountTakeoverRiskConfigurationInput`<sup>Optional</sup> <a name="accountTakeoverRiskConfigurationInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.accountTakeoverRiskConfigurationInput"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfiguration getAccountTakeoverRiskConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `compromisedCredentialsRiskConfigurationInput`<sup>Optional</sup> <a name="compromisedCredentialsRiskConfigurationInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.compromisedCredentialsRiskConfigurationInput"></a>

```java
public CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration getCompromisedCredentialsRiskConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `riskExceptionConfigurationInput`<sup>Optional</sup> <a name="riskExceptionConfigurationInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.riskExceptionConfigurationInput"></a>

```java
public CognitoRiskConfigurationRiskExceptionConfiguration getRiskExceptionConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a>

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoRiskConfigurationAccountTakeoverRiskConfiguration <a name="CognitoRiskConfigurationAccountTakeoverRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration;

CognitoRiskConfigurationAccountTakeoverRiskConfiguration.builder()
    .actions(CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions)
    .notifyConfiguration(CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration.property.notifyConfiguration">notifyConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a></code> | notify_configuration block. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration.property.actions"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions getActions();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a>

actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#actions CognitoRiskConfiguration#actions}

---

##### `notifyConfiguration`<sup>Required</sup> <a name="notifyConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration.property.notifyConfiguration"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration getNotifyConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a>

notify_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify_configuration CognitoRiskConfiguration#notify_configuration}

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions;

CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.builder()
//  .highAction(CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction)
//  .lowAction(CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction)
//  .mediumAction(CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.property.highAction">highAction</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a></code> | high_action block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.property.lowAction">lowAction</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a></code> | low_action block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.property.mediumAction">mediumAction</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a></code> | medium_action block. |

---

##### `highAction`<sup>Optional</sup> <a name="highAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.property.highAction"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction getHighAction();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a>

high_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#high_action CognitoRiskConfiguration#high_action}

---

##### `lowAction`<sup>Optional</sup> <a name="lowAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.property.lowAction"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction getLowAction();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a>

low_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#low_action CognitoRiskConfiguration#low_action}

---

##### `mediumAction`<sup>Optional</sup> <a name="mediumAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.property.mediumAction"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction getMediumAction();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a>

medium_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#medium_action CognitoRiskConfiguration#medium_action}

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction;

CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction.builder()
    .eventAction(java.lang.String)
    .notify(java.lang.Boolean)
    .notify(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction.property.eventAction">eventAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction.property.notify">notify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}. |

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction.property.eventAction"></a>

```java
public java.lang.String getEventAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}.

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction.property.notify"></a>

```java
public java.lang.Object getNotify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}.

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction;

CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction.builder()
    .eventAction(java.lang.String)
    .notify(java.lang.Boolean)
    .notify(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction.property.eventAction">eventAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction.property.notify">notify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}. |

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction.property.eventAction"></a>

```java
public java.lang.String getEventAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}.

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction.property.notify"></a>

```java
public java.lang.Object getNotify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}.

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction;

CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction.builder()
    .eventAction(java.lang.String)
    .notify(java.lang.Boolean)
    .notify(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction.property.eventAction">eventAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction.property.notify">notify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}. |

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction.property.eventAction"></a>

```java
public java.lang.String getEventAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}.

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction.property.notify"></a>

```java
public java.lang.Object getNotify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}.

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration;

CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.builder()
    .sourceArn(java.lang.String)
//  .blockEmail(CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail)
//  .from(java.lang.String)
//  .mfaEmail(CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail)
//  .noActionEmail(CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail)
//  .replyTo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#source_arn CognitoRiskConfiguration#source_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.blockEmail">blockEmail</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a></code> | block_email block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.from">from</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#from CognitoRiskConfiguration#from}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.mfaEmail">mfaEmail</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a></code> | mfa_email block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.noActionEmail">noActionEmail</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a></code> | no_action_email block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.replyTo">replyTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#reply_to CognitoRiskConfiguration#reply_to}. |

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.sourceArn"></a>

```java
public java.lang.String getSourceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#source_arn CognitoRiskConfiguration#source_arn}.

---

##### `blockEmail`<sup>Optional</sup> <a name="blockEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.blockEmail"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail getBlockEmail();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

block_email block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#block_email CognitoRiskConfiguration#block_email}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#from CognitoRiskConfiguration#from}.

---

##### `mfaEmail`<sup>Optional</sup> <a name="mfaEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.mfaEmail"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail getMfaEmail();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

mfa_email block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#mfa_email CognitoRiskConfiguration#mfa_email}

---

##### `noActionEmail`<sup>Optional</sup> <a name="noActionEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.noActionEmail"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail getNoActionEmail();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

no_action_email block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#no_action_email CognitoRiskConfiguration#no_action_email}

---

##### `replyTo`<sup>Optional</sup> <a name="replyTo" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.replyTo"></a>

```java
public java.lang.String getReplyTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#reply_to CognitoRiskConfiguration#reply_to}.

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail;

CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.builder()
    .htmlBody(java.lang.String)
    .subject(java.lang.String)
    .textBody(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.htmlBody">htmlBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.subject">subject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.textBody">textBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}. |

---

##### `htmlBody`<sup>Required</sup> <a name="htmlBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.htmlBody"></a>

```java
public java.lang.String getHtmlBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}.

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}.

---

##### `textBody`<sup>Required</sup> <a name="textBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.textBody"></a>

```java
public java.lang.String getTextBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}.

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail;

CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.builder()
    .htmlBody(java.lang.String)
    .subject(java.lang.String)
    .textBody(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.htmlBody">htmlBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.subject">subject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.textBody">textBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}. |

---

##### `htmlBody`<sup>Required</sup> <a name="htmlBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.htmlBody"></a>

```java
public java.lang.String getHtmlBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}.

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}.

---

##### `textBody`<sup>Required</sup> <a name="textBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.textBody"></a>

```java
public java.lang.String getTextBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}.

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail;

CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.builder()
    .htmlBody(java.lang.String)
    .subject(java.lang.String)
    .textBody(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.htmlBody">htmlBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.subject">subject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.textBody">textBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}. |

---

##### `htmlBody`<sup>Required</sup> <a name="htmlBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.htmlBody"></a>

```java
public java.lang.String getHtmlBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}.

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}.

---

##### `textBody`<sup>Required</sup> <a name="textBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.textBody"></a>

```java
public java.lang.String getTextBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}.

---

### CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration <a name="CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration;

CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration.builder()
    .actions(CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions)
//  .eventFilter(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration.property.eventFilter">eventFilter</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_filter CognitoRiskConfiguration#event_filter}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration.property.actions"></a>

```java
public CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions getActions();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a>

actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#actions CognitoRiskConfiguration#actions}

---

##### `eventFilter`<sup>Optional</sup> <a name="eventFilter" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration.property.eventFilter"></a>

```java
public java.util.List<java.lang.String> getEventFilter();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_filter CognitoRiskConfiguration#event_filter}.

---

### CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions <a name="CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions;

CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions.builder()
    .eventAction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions.property.eventAction">eventAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}. |

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions.property.eventAction"></a>

```java
public java.lang.String getEventAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}.

---

### CognitoRiskConfigurationConfig <a name="CognitoRiskConfigurationConfig" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationConfig;

CognitoRiskConfigurationConfig.builder()
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
    .userPoolId(java.lang.String)
//  .accountTakeoverRiskConfiguration(CognitoRiskConfigurationAccountTakeoverRiskConfiguration)
//  .clientId(java.lang.String)
//  .compromisedCredentialsRiskConfiguration(CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration)
//  .id(java.lang.String)
//  .riskExceptionConfiguration(CognitoRiskConfigurationRiskExceptionConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#user_pool_id CognitoRiskConfiguration#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.accountTakeoverRiskConfiguration">accountTakeoverRiskConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a></code> | account_takeover_risk_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#client_id CognitoRiskConfiguration#client_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.compromisedCredentialsRiskConfiguration">compromisedCredentialsRiskConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a></code> | compromised_credentials_risk_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#id CognitoRiskConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.riskExceptionConfiguration">riskExceptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a></code> | risk_exception_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#user_pool_id CognitoRiskConfiguration#user_pool_id}.

---

##### `accountTakeoverRiskConfiguration`<sup>Optional</sup> <a name="accountTakeoverRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.accountTakeoverRiskConfiguration"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfiguration getAccountTakeoverRiskConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a>

account_takeover_risk_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#account_takeover_risk_configuration CognitoRiskConfiguration#account_takeover_risk_configuration}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#client_id CognitoRiskConfiguration#client_id}.

---

##### `compromisedCredentialsRiskConfiguration`<sup>Optional</sup> <a name="compromisedCredentialsRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.compromisedCredentialsRiskConfiguration"></a>

```java
public CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration getCompromisedCredentialsRiskConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a>

compromised_credentials_risk_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#compromised_credentials_risk_configuration CognitoRiskConfiguration#compromised_credentials_risk_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#id CognitoRiskConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `riskExceptionConfiguration`<sup>Optional</sup> <a name="riskExceptionConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.riskExceptionConfiguration"></a>

```java
public CognitoRiskConfigurationRiskExceptionConfiguration getRiskExceptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a>

risk_exception_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#risk_exception_configuration CognitoRiskConfiguration#risk_exception_configuration}

---

### CognitoRiskConfigurationRiskExceptionConfiguration <a name="CognitoRiskConfigurationRiskExceptionConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationRiskExceptionConfiguration;

CognitoRiskConfigurationRiskExceptionConfiguration.builder()
//  .blockedIpRangeList(java.util.List<java.lang.String>)
//  .skippedIpRangeList(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration.property.blockedIpRangeList">blockedIpRangeList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#blocked_ip_range_list CognitoRiskConfiguration#blocked_ip_range_list}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration.property.skippedIpRangeList">skippedIpRangeList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#skipped_ip_range_list CognitoRiskConfiguration#skipped_ip_range_list}. |

---

##### `blockedIpRangeList`<sup>Optional</sup> <a name="blockedIpRangeList" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration.property.blockedIpRangeList"></a>

```java
public java.util.List<java.lang.String> getBlockedIpRangeList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#blocked_ip_range_list CognitoRiskConfiguration#blocked_ip_range_list}.

---

##### `skippedIpRangeList`<sup>Optional</sup> <a name="skippedIpRangeList" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration.property.skippedIpRangeList"></a>

```java
public java.util.List<java.lang.String> getSkippedIpRangeList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#skipped_ip_range_list CognitoRiskConfiguration#skipped_ip_range_list}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventActionInput">eventActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notifyInput">notifyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventAction">eventAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notify">notify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventActionInput`<sup>Optional</sup> <a name="eventActionInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventActionInput"></a>

```java
public java.lang.String getEventActionInput();
```

- *Type:* java.lang.String

---

##### `notifyInput`<sup>Optional</sup> <a name="notifyInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notifyInput"></a>

```java
public java.lang.Object getNotifyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventAction"></a>

```java
public java.lang.String getEventAction();
```

- *Type:* java.lang.String

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notify"></a>

```java
public java.lang.Object getNotify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.internalValue"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventActionInput">eventActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notifyInput">notifyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventAction">eventAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notify">notify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventActionInput`<sup>Optional</sup> <a name="eventActionInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventActionInput"></a>

```java
public java.lang.String getEventActionInput();
```

- *Type:* java.lang.String

---

##### `notifyInput`<sup>Optional</sup> <a name="notifyInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notifyInput"></a>

```java
public java.lang.Object getNotifyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventAction"></a>

```java
public java.lang.String getEventAction();
```

- *Type:* java.lang.String

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notify"></a>

```java
public java.lang.Object getNotify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.internalValue"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventActionInput">eventActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notifyInput">notifyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventAction">eventAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notify">notify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventActionInput`<sup>Optional</sup> <a name="eventActionInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventActionInput"></a>

```java
public java.lang.String getEventActionInput();
```

- *Type:* java.lang.String

---

##### `notifyInput`<sup>Optional</sup> <a name="notifyInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notifyInput"></a>

```java
public java.lang.Object getNotifyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventAction"></a>

```java
public java.lang.String getEventAction();
```

- *Type:* java.lang.String

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notify"></a>

```java
public java.lang.Object getNotify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.internalValue"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putHighAction">putHighAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putLowAction">putLowAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putMediumAction">putMediumAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resetHighAction">resetHighAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resetLowAction">resetLowAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resetMediumAction">resetMediumAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHighAction` <a name="putHighAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putHighAction"></a>

```java
public void putHighAction(CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putHighAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a>

---

##### `putLowAction` <a name="putLowAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putLowAction"></a>

```java
public void putLowAction(CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putLowAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a>

---

##### `putMediumAction` <a name="putMediumAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putMediumAction"></a>

```java
public void putMediumAction(CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putMediumAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a>

---

##### `resetHighAction` <a name="resetHighAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resetHighAction"></a>

```java
public void resetHighAction()
```

##### `resetLowAction` <a name="resetLowAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resetLowAction"></a>

```java
public void resetLowAction()
```

##### `resetMediumAction` <a name="resetMediumAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resetMediumAction"></a>

```java
public void resetMediumAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.highAction">highAction</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.lowAction">lowAction</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumAction">mediumAction</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.highActionInput">highActionInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.lowActionInput">lowActionInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumActionInput">mediumActionInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `highAction`<sup>Required</sup> <a name="highAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.highAction"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference getHighAction();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference</a>

---

##### `lowAction`<sup>Required</sup> <a name="lowAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.lowAction"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference getLowAction();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference</a>

---

##### `mediumAction`<sup>Required</sup> <a name="mediumAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumAction"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference getMediumAction();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference</a>

---

##### `highActionInput`<sup>Optional</sup> <a name="highActionInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.highActionInput"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction getHighActionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a>

---

##### `lowActionInput`<sup>Optional</sup> <a name="lowActionInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.lowActionInput"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction getLowActionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a>

---

##### `mediumActionInput`<sup>Optional</sup> <a name="mediumActionInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumActionInput"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction getMediumActionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.internalValue"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBodyInput">htmlBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subjectInput">subjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBodyInput">textBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBody">htmlBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBody">textBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `htmlBodyInput`<sup>Optional</sup> <a name="htmlBodyInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBodyInput"></a>

```java
public java.lang.String getHtmlBodyInput();
```

- *Type:* java.lang.String

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subjectInput"></a>

```java
public java.lang.String getSubjectInput();
```

- *Type:* java.lang.String

---

##### `textBodyInput`<sup>Optional</sup> <a name="textBodyInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBodyInput"></a>

```java
public java.lang.String getTextBodyInput();
```

- *Type:* java.lang.String

---

##### `htmlBody`<sup>Required</sup> <a name="htmlBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBody"></a>

```java
public java.lang.String getHtmlBody();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `textBody`<sup>Required</sup> <a name="textBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBody"></a>

```java
public java.lang.String getTextBody();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.internalValue"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBodyInput">htmlBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subjectInput">subjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBodyInput">textBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBody">htmlBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBody">textBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `htmlBodyInput`<sup>Optional</sup> <a name="htmlBodyInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBodyInput"></a>

```java
public java.lang.String getHtmlBodyInput();
```

- *Type:* java.lang.String

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subjectInput"></a>

```java
public java.lang.String getSubjectInput();
```

- *Type:* java.lang.String

---

##### `textBodyInput`<sup>Optional</sup> <a name="textBodyInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBodyInput"></a>

```java
public java.lang.String getTextBodyInput();
```

- *Type:* java.lang.String

---

##### `htmlBody`<sup>Required</sup> <a name="htmlBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBody"></a>

```java
public java.lang.String getHtmlBody();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `textBody`<sup>Required</sup> <a name="textBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBody"></a>

```java
public java.lang.String getTextBody();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.internalValue"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBodyInput">htmlBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subjectInput">subjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBodyInput">textBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBody">htmlBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBody">textBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `htmlBodyInput`<sup>Optional</sup> <a name="htmlBodyInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBodyInput"></a>

```java
public java.lang.String getHtmlBodyInput();
```

- *Type:* java.lang.String

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subjectInput"></a>

```java
public java.lang.String getSubjectInput();
```

- *Type:* java.lang.String

---

##### `textBodyInput`<sup>Optional</sup> <a name="textBodyInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBodyInput"></a>

```java
public java.lang.String getTextBodyInput();
```

- *Type:* java.lang.String

---

##### `htmlBody`<sup>Required</sup> <a name="htmlBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBody"></a>

```java
public java.lang.String getHtmlBody();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `textBody`<sup>Required</sup> <a name="textBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBody"></a>

```java
public java.lang.String getTextBody();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.internalValue"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putBlockEmail">putBlockEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putMfaEmail">putMfaEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putNoActionEmail">putNoActionEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetBlockEmail">resetBlockEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetMfaEmail">resetMfaEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetNoActionEmail">resetNoActionEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetReplyTo">resetReplyTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBlockEmail` <a name="putBlockEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putBlockEmail"></a>

```java
public void putBlockEmail(CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putBlockEmail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

---

##### `putMfaEmail` <a name="putMfaEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putMfaEmail"></a>

```java
public void putMfaEmail(CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putMfaEmail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

---

##### `putNoActionEmail` <a name="putNoActionEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putNoActionEmail"></a>

```java
public void putNoActionEmail(CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putNoActionEmail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

---

##### `resetBlockEmail` <a name="resetBlockEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetBlockEmail"></a>

```java
public void resetBlockEmail()
```

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetFrom"></a>

```java
public void resetFrom()
```

##### `resetMfaEmail` <a name="resetMfaEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetMfaEmail"></a>

```java
public void resetMfaEmail()
```

##### `resetNoActionEmail` <a name="resetNoActionEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetNoActionEmail"></a>

```java
public void resetNoActionEmail()
```

##### `resetReplyTo` <a name="resetReplyTo" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetReplyTo"></a>

```java
public void resetReplyTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmail">blockEmail</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmail">mfaEmail</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmail">noActionEmail</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmailInput">blockEmailInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmailInput">mfaEmailInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmailInput">noActionEmailInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyToInput">replyToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArnInput">sourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyTo">replyTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blockEmail`<sup>Required</sup> <a name="blockEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmail"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference getBlockEmail();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference</a>

---

##### `mfaEmail`<sup>Required</sup> <a name="mfaEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmail"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference getMfaEmail();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference</a>

---

##### `noActionEmail`<sup>Required</sup> <a name="noActionEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmail"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference getNoActionEmail();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference</a>

---

##### `blockEmailInput`<sup>Optional</sup> <a name="blockEmailInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmailInput"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail getBlockEmailInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `mfaEmailInput`<sup>Optional</sup> <a name="mfaEmailInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmailInput"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail getMfaEmailInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

---

##### `noActionEmailInput`<sup>Optional</sup> <a name="noActionEmailInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmailInput"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail getNoActionEmailInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

---

##### `replyToInput`<sup>Optional</sup> <a name="replyToInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyToInput"></a>

```java
public java.lang.String getReplyToInput();
```

- *Type:* java.lang.String

---

##### `sourceArnInput`<sup>Optional</sup> <a name="sourceArnInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArnInput"></a>

```java
public java.lang.String getSourceArnInput();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `replyTo`<sup>Required</sup> <a name="replyTo" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyTo"></a>

```java
public java.lang.String getReplyTo();
```

- *Type:* java.lang.String

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArn"></a>

```java
public java.lang.String getSourceArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.internalValue"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putNotifyConfiguration">putNotifyConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putActions"></a>

```java
public void putActions(CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a>

---

##### `putNotifyConfiguration` <a name="putNotifyConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putNotifyConfiguration"></a>

```java
public void putNotifyConfiguration(CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putNotifyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.notifyConfiguration">notifyConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.actionsInput">actionsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.notifyConfigurationInput">notifyConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.actions"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference getActions();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference</a>

---

##### `notifyConfiguration`<sup>Required</sup> <a name="notifyConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.notifyConfiguration"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference getNotifyConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.actionsInput"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions getActionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a>

---

##### `notifyConfigurationInput`<sup>Optional</sup> <a name="notifyConfigurationInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.notifyConfigurationInput"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration getNotifyConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.internalValue"></a>

```java
public CognitoRiskConfigurationAccountTakeoverRiskConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a>

---


### CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference <a name="CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference;

new CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventActionInput">eventActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventAction">eventAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventActionInput`<sup>Optional</sup> <a name="eventActionInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventActionInput"></a>

```java
public java.lang.String getEventActionInput();
```

- *Type:* java.lang.String

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventAction"></a>

```java
public java.lang.String getEventAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.internalValue"></a>

```java
public CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a>

---


### CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference <a name="CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference;

new CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.resetEventFilter">resetEventFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.putActions"></a>

```java
public void putActions(CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a>

---

##### `resetEventFilter` <a name="resetEventFilter" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.resetEventFilter"></a>

```java
public void resetEventFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.actionsInput">actionsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilterInput">eventFilterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilter">eventFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.actions"></a>

```java
public CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference getActions();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.actionsInput"></a>

```java
public CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions getActionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a>

---

##### `eventFilterInput`<sup>Optional</sup> <a name="eventFilterInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilterInput"></a>

```java
public java.util.List<java.lang.String> getEventFilterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `eventFilter`<sup>Required</sup> <a name="eventFilter" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilter"></a>

```java
public java.util.List<java.lang.String> getEventFilter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.internalValue"></a>

```java
public CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a>

---


### CognitoRiskConfigurationRiskExceptionConfigurationOutputReference <a name="CognitoRiskConfigurationRiskExceptionConfigurationOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_risk_configuration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference;

new CognitoRiskConfigurationRiskExceptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resetBlockedIpRangeList">resetBlockedIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resetSkippedIpRangeList">resetSkippedIpRangeList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBlockedIpRangeList` <a name="resetBlockedIpRangeList" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resetBlockedIpRangeList"></a>

```java
public void resetBlockedIpRangeList()
```

##### `resetSkippedIpRangeList` <a name="resetSkippedIpRangeList" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resetSkippedIpRangeList"></a>

```java
public void resetSkippedIpRangeList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.blockedIpRangeListInput">blockedIpRangeListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.skippedIpRangeListInput">skippedIpRangeListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.blockedIpRangeList">blockedIpRangeList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.skippedIpRangeList">skippedIpRangeList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blockedIpRangeListInput`<sup>Optional</sup> <a name="blockedIpRangeListInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.blockedIpRangeListInput"></a>

```java
public java.util.List<java.lang.String> getBlockedIpRangeListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skippedIpRangeListInput`<sup>Optional</sup> <a name="skippedIpRangeListInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.skippedIpRangeListInput"></a>

```java
public java.util.List<java.lang.String> getSkippedIpRangeListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `blockedIpRangeList`<sup>Required</sup> <a name="blockedIpRangeList" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.blockedIpRangeList"></a>

```java
public java.util.List<java.lang.String> getBlockedIpRangeList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skippedIpRangeList`<sup>Required</sup> <a name="skippedIpRangeList" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.skippedIpRangeList"></a>

```java
public java.util.List<java.lang.String> getSkippedIpRangeList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.internalValue"></a>

```java
public CognitoRiskConfigurationRiskExceptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a>

---



