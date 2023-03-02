# `pinpointApnsSandboxChannel` Submodule <a name="`pinpointApnsSandboxChannel` Submodule" id="@cdktf/provider-aws.pinpointApnsSandboxChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointApnsSandboxChannel <a name="PinpointApnsSandboxChannel" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel aws_pinpoint_apns_sandbox_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.pinpoint_apns_sandbox_channel.PinpointApnsSandboxChannel;

PinpointApnsSandboxChannel.Builder.create(Construct scope, java.lang.String id)
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
    .applicationId(java.lang.String)
//  .bundleId(java.lang.String)
//  .certificate(java.lang.String)
//  .defaultAuthenticationMethod(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .privateKey(java.lang.String)
//  .teamId(java.lang.String)
//  .tokenKey(java.lang.String)
//  .tokenKeyId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#application_id PinpointApnsSandboxChannel#application_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.bundleId">bundleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#bundle_id PinpointApnsSandboxChannel#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#certificate PinpointApnsSandboxChannel#certificate}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.defaultAuthenticationMethod">defaultAuthenticationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#default_authentication_method PinpointApnsSandboxChannel#default_authentication_method}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#enabled PinpointApnsSandboxChannel#enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#id PinpointApnsSandboxChannel#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#private_key PinpointApnsSandboxChannel#private_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.teamId">teamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#team_id PinpointApnsSandboxChannel#team_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.tokenKey">tokenKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#token_key PinpointApnsSandboxChannel#token_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.tokenKeyId">tokenKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#token_key_id PinpointApnsSandboxChannel#token_key_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#application_id PinpointApnsSandboxChannel#application_id}.

---

##### `bundleId`<sup>Optional</sup> <a name="bundleId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.bundleId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#bundle_id PinpointApnsSandboxChannel#bundle_id}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.certificate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#certificate PinpointApnsSandboxChannel#certificate}.

---

##### `defaultAuthenticationMethod`<sup>Optional</sup> <a name="defaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.defaultAuthenticationMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#default_authentication_method PinpointApnsSandboxChannel#default_authentication_method}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#enabled PinpointApnsSandboxChannel#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#id PinpointApnsSandboxChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.privateKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#private_key PinpointApnsSandboxChannel#private_key}.

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.teamId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#team_id PinpointApnsSandboxChannel#team_id}.

---

##### `tokenKey`<sup>Optional</sup> <a name="tokenKey" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.tokenKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#token_key PinpointApnsSandboxChannel#token_key}.

---

##### `tokenKeyId`<sup>Optional</sup> <a name="tokenKeyId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.tokenKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#token_key_id PinpointApnsSandboxChannel#token_key_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetBundleId">resetBundleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetDefaultAuthenticationMethod">resetDefaultAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTeamId">resetTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTokenKey">resetTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTokenKeyId">resetTokenKeyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBundleId` <a name="resetBundleId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetBundleId"></a>

```java
public void resetBundleId()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetDefaultAuthenticationMethod` <a name="resetDefaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetDefaultAuthenticationMethod"></a>

```java
public void resetDefaultAuthenticationMethod()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetId"></a>

```java
public void resetId()
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetPrivateKey"></a>

```java
public void resetPrivateKey()
```

##### `resetTeamId` <a name="resetTeamId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTeamId"></a>

```java
public void resetTeamId()
```

##### `resetTokenKey` <a name="resetTokenKey" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTokenKey"></a>

```java
public void resetTokenKey()
```

##### `resetTokenKeyId` <a name="resetTokenKeyId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTokenKeyId"></a>

```java
public void resetTokenKeyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.pinpoint_apns_sandbox_channel.PinpointApnsSandboxChannel;

PinpointApnsSandboxChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.pinpoint_apns_sandbox_channel.PinpointApnsSandboxChannel;

PinpointApnsSandboxChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.pinpoint_apns_sandbox_channel.PinpointApnsSandboxChannel;

PinpointApnsSandboxChannel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.bundleIdInput">bundleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.defaultAuthenticationMethodInput">defaultAuthenticationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.teamIdInput">teamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyIdInput">tokenKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyInput">tokenKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.bundleId">bundleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.defaultAuthenticationMethod">defaultAuthenticationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.teamId">teamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKey">tokenKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyId">tokenKeyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `bundleIdInput`<sup>Optional</sup> <a name="bundleIdInput" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.bundleIdInput"></a>

```java
public java.lang.String getBundleIdInput();
```

- *Type:* java.lang.String

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `defaultAuthenticationMethodInput`<sup>Optional</sup> <a name="defaultAuthenticationMethodInput" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.defaultAuthenticationMethodInput"></a>

```java
public java.lang.String getDefaultAuthenticationMethodInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.teamIdInput"></a>

```java
public java.lang.String getTeamIdInput();
```

- *Type:* java.lang.String

---

##### `tokenKeyIdInput`<sup>Optional</sup> <a name="tokenKeyIdInput" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyIdInput"></a>

```java
public java.lang.String getTokenKeyIdInput();
```

- *Type:* java.lang.String

---

##### `tokenKeyInput`<sup>Optional</sup> <a name="tokenKeyInput" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyInput"></a>

```java
public java.lang.String getTokenKeyInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.bundleId"></a>

```java
public java.lang.String getBundleId();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `defaultAuthenticationMethod`<sup>Required</sup> <a name="defaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.defaultAuthenticationMethod"></a>

```java
public java.lang.String getDefaultAuthenticationMethod();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

---

##### `tokenKey`<sup>Required</sup> <a name="tokenKey" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKey"></a>

```java
public java.lang.String getTokenKey();
```

- *Type:* java.lang.String

---

##### `tokenKeyId`<sup>Required</sup> <a name="tokenKeyId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyId"></a>

```java
public java.lang.String getTokenKeyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointApnsSandboxChannelConfig <a name="PinpointApnsSandboxChannelConfig" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.pinpoint_apns_sandbox_channel.PinpointApnsSandboxChannelConfig;

PinpointApnsSandboxChannelConfig.builder()
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
    .applicationId(java.lang.String)
//  .bundleId(java.lang.String)
//  .certificate(java.lang.String)
//  .defaultAuthenticationMethod(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .privateKey(java.lang.String)
//  .teamId(java.lang.String)
//  .tokenKey(java.lang.String)
//  .tokenKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#application_id PinpointApnsSandboxChannel#application_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.bundleId">bundleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#bundle_id PinpointApnsSandboxChannel#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#certificate PinpointApnsSandboxChannel#certificate}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.defaultAuthenticationMethod">defaultAuthenticationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#default_authentication_method PinpointApnsSandboxChannel#default_authentication_method}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#enabled PinpointApnsSandboxChannel#enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#id PinpointApnsSandboxChannel#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#private_key PinpointApnsSandboxChannel#private_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.teamId">teamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#team_id PinpointApnsSandboxChannel#team_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.tokenKey">tokenKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#token_key PinpointApnsSandboxChannel#token_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.tokenKeyId">tokenKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#token_key_id PinpointApnsSandboxChannel#token_key_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#application_id PinpointApnsSandboxChannel#application_id}.

---

##### `bundleId`<sup>Optional</sup> <a name="bundleId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.bundleId"></a>

```java
public java.lang.String getBundleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#bundle_id PinpointApnsSandboxChannel#bundle_id}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#certificate PinpointApnsSandboxChannel#certificate}.

---

##### `defaultAuthenticationMethod`<sup>Optional</sup> <a name="defaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.defaultAuthenticationMethod"></a>

```java
public java.lang.String getDefaultAuthenticationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#default_authentication_method PinpointApnsSandboxChannel#default_authentication_method}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#enabled PinpointApnsSandboxChannel#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#id PinpointApnsSandboxChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#private_key PinpointApnsSandboxChannel#private_key}.

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#team_id PinpointApnsSandboxChannel#team_id}.

---

##### `tokenKey`<sup>Optional</sup> <a name="tokenKey" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.tokenKey"></a>

```java
public java.lang.String getTokenKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#token_key PinpointApnsSandboxChannel#token_key}.

---

##### `tokenKeyId`<sup>Optional</sup> <a name="tokenKeyId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.tokenKeyId"></a>

```java
public java.lang.String getTokenKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#token_key_id PinpointApnsSandboxChannel#token_key_id}.

---



